import React, { createContext, useContext, useReducer } from 'react';

export const StateContext = createContext();

export const StateProvider = ({ reducer, defaultState, children }) => (
  <StateContext.Provider value={useReducer(reducer, defaultState)}>
    {children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);
