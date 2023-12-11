import { createContext, useContext, useReducer } from "react";

interface IUser {
  name: string;
  email: string;
  password: string;
  avatar?: string
}

const FAKE_USER: IUser = {
  name: "Jack",
  email: "jack@example.com",
  password: "qwerty",
  avatar: "https://i.pravatar.cc/100?u=zz",
};

const AuthContext = createContext<{
    user: IUser | null;
    isAuthenticated: boolean;
    login: (email: string, password: string) => void;
    logout: () => void;
  }>({
  user: null,
  isAuthenticated: false,
  login: (email, password) => {},
  logout: () => {}

});

interface State {
  user: IUser | null;
  isAuthenticated: boolean;
}

interface Action {
  type: string;
  payload?: any;
}

function reducer(state: State, action: Action){
  switch (action.type) {
    case 'login':
      return {...state, user: action.payload, isAuthenticated: true};
    case 'logout':
      return {...state, user: null, isAuthenticated: false}
      default:
        console.error('unknown state (fakeAuthContextContext) in reducer...');
        return state;
  }
}

const initialState: State = {
  user: null,
  isAuthenticated: false
}

interface IPropsAuthProvider {
  children: React.ReactNode;
}

export default function AuthProvider({children}: IPropsAuthProvider) {
  const [{user, isAuthenticated}, dispatch] = useReducer(reducer, initialState);

  function login(email: string, password: string) {
    if(email === FAKE_USER.email && password === FAKE_USER.password)
    dispatch({type: 'login', payload: FAKE_USER});
  };

  function logout() {
    dispatch({type: 'logout'});
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error(
      'AuthContext was used outside of the CityProvider!'
    );
  return context;
}