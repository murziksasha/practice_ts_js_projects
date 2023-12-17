import React, { createContext, useContext, useEffect, useReducer } from "react";

const SECS_PER_QUESTION = 20;

const QuestionContext = createContext<{
  questions: IDataQuestion[];
  currentQuestion: IDataQuestion | null;
  status: 'loading' | 'error' | 'ready' | 'active' | 'finished';
  index: number;
  answer: number | null;
  points: number;
  highscore: number;
  secondsRemaining: number;
  maxPossiblePoints: number;
  numQuestions: number;
  dispatch: React.Dispatch<Action>;
}>({
  questions: [],
  status: 'ready',
  index: 0,
  answer: null,
  points: 0,
  highscore: 0,
  secondsRemaining: 0,
  maxPossiblePoints: 0,
  numQuestions: 0,
  currentQuestion: null,
  dispatch: () => {}
});

export interface IDataQuestion {
  question: string;
  options: string[];
  correctOption: number;
  points: number;
}

export interface Action {
  type: string;
  payload?: any;
}

interface State {
  questions: IDataQuestion[];
  status: 'loading' | 'error' | 'ready' | 'active' | 'finished';
  index: number;
  answer: number | null;
  points: number;
  highscore: number;
  secondsRemaining: number;
}

const initialState: State = {
  questions: [],
  status: 'loading',
  index: 0,
  answer: null,
  points: 0,
  highscore: 0,
  secondsRemaining: 0
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'dataReceived':
      return {
        ...state,
        questions: action.payload,
        status: 'ready',
      };
    case 'dataFailed':
      return {
        ...state,
        status: 'error'
      };
    case 'start':
      return {
        ...state,
        status: 'active',
        secondsRemaining: state.questions.length * SECS_PER_QUESTION
      };
    case 'newAnswer':
      const question = state.questions[state.index];
      return {
        ...state,
        answer: action.payload,
        points: action.payload === question?.correctOption ?
          state.points + (question?.points ?? 0) : state.points,
      };
    case 'nextQuestion':
      return {
        ...state,
        index: state.index + 1,
        answer: null
      };
    case 'finish':
      return {
        ...state,
        status: 'finished',
        highscore: state.points > state.highscore ? state.points : state.highscore,
      };
    case 'restart':
      return {
        ...initialState,
        questions: state.questions,
        status: 'ready',
        highscore: state.highscore
      };
    case 'tick':
      return {
        ...state,
        secondsRemaining: state.secondsRemaining - 1,
        status: state.secondsRemaining === 0 ? 'finished' : state.status,
      };
    default:
      return state;
  }
}

interface IPropsQuestionProvider {
  children: React.ReactNode;
}

export default function QuestionProvider({ children }: IPropsQuestionProvider) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { questions, status, index, answer, points, highscore, secondsRemaining } = state;

  const numQuestions = questions.length;
  const maxPossiblePoints = questions.reduce((prev, cur) => {
    return prev + Number(cur.points);
  }, 0);
  const currentQuestion = questions[index];

    useEffect(() => {
      const fetchData = async () => {
        const timeout = (s: number) =>
          new Promise<void>((_, reject) => {
            const timerId = setTimeout(() => {
              reject(
                new Error(
                  `Request took too long! Timeout after ${s} seconds`
                )
              );
            }, s * 1000);

            return () => clearTimeout(timerId);
          });

        try {
          const response = (await Promise.race([
            fetch('http://localhost:9000/questions'),
            timeout(10),
          ])) as Response;

          if (!response.ok) {
            throw new Error(`${response.status}`);
          }

          const data: IDataQuestion[] = await response.json();
          dispatch({ type: 'dataReceived', payload: data });
        } catch (error: unknown) {
          if (error instanceof Error)
            dispatch({ type: 'dataFailed' });
          console.error(`An unknown error occurred -  `, error);
        }
      };

      fetchData();
    }, [dispatch]);



  return (
    <QuestionContext.Provider
      value={{
        maxPossiblePoints,
        numQuestions,
        questions,
        status,
        index,
        answer,
        points,
        highscore,
        secondsRemaining,
        currentQuestion,
        dispatch
      }}
    >
      {children}
    </QuestionContext.Provider>
  );
}

export function useQuestions() {
  const context = useContext(QuestionContext);
  if (context === undefined)
    throw new Error(
      'CityContext was used outside of the CityProvider!'
    );
  return context;
}
