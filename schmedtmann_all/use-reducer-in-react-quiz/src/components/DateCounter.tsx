import React, { useReducer } from "react";

interface State {
  count: number;
  step: number;
}

interface Action {
  type: string;
  payload?: any;
}

function reducer(state: State, action: Action) {
  console.log(state, action);

  switch (action.type) {
    case 'inc':
      return { ...state, count: state.count + state.step };
    case 'dec':
      return { ...state, count: state.count - state.step };
    case 'setStep':
      return { ...state, step: action.payload };
    case 'reset':
      return {...state, count: 0, step: 1 };
    default:
      console.log('unknown state in reducer...');
      return state;
  }
}

function DateCounter() {
  const [state, dispatch] = useReducer(reducer, { count: 0, step: 1 });

  const date = new Date(Date.now());
  date.setDate(date.getDate() + state.count);


  const defineStep = function (e: React.ChangeEvent<HTMLInputElement>) {
    dispatch({ type: 'setStep', payload: Number(e.target.value) });
  };

  const inc = () => {
    dispatch({ type: 'inc' });
  }

  const dec = () => {
    dispatch({ type: 'dec' });
  }

  const reset = function () {
    dispatch({ type: 'reset' });
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={state.step}
          onChange={defineStep}
        />
        <span>{state.step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={state.step} onChange={defineStep} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default DateCounter;
