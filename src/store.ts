import { createContext } from "react";

const initialState = {
    first: "Tomo",
    last: "Kun"
};

export type UserState = typeof initialState;
const context = createContext<typeof initialState>(initialState);

export default context;