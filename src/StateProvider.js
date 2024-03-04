import { createContext, useContext, useReducer } from "react";

export const StateContext = createContext();

export const StateProvider = ({reducder, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducder, initialState)}>
        {children}
    </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);