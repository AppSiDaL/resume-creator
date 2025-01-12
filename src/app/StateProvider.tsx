"use client";
import { createContext, useReducer, useContext, ReactNode } from "react";

interface State {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  title: string;
}

interface Action {
  type: string;
  field: string;
  value: string;
}

const initialState: State = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  address: "",
  title: "",
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_FIELD":
      return {
        ...state,
        [action.field]: action.value,
      };
    default:
      return state;
  }
}

const StateContext = createContext<State | undefined>(undefined);
const DispatchContext = createContext<React.Dispatch<Action> | undefined>(undefined);

export function StateProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}

export function useAppState() {
  const context = useContext(StateContext);
  if (context === undefined) {
    throw new Error("useAppState must be used within a StateProvider");
  }
  return context;
}

export function useAppDispatch() {
  const context = useContext(DispatchContext);
  if (context === undefined) {
    throw new Error("useAppDispatch must be used within a StateProvider");
  }
  return context;
}