import { createContext, useContext } from "react";


export const context = createContext();

export const TodoProvider = context.Provider;

export const TodoCustomHook = () => {
    return useContext(context);
}