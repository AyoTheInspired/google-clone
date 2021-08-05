import React, { createContext, useContext, useReducer } from "react";

export const StateContext = useContext();

export const StateProvider = ({ reducer, initialState, children }) => {
	return (
		<StateProvider value={useReducer(reducer, initialState)}>
			{children}
		</StateProvider>
	);
};

export default StateProvider;

export const useStateValue = () => usecontext(StateContext);
