import { createContext,useContext } from "react";

const MyContext = createContext(null);

export const useMyContext = () => useContext(MyContext);
export default MyContext;