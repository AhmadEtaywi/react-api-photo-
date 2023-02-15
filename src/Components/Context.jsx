import { createContext } from "react";

const MyContext = createContext(null);
// const MyContext = createContext(JSON.parse(localStorage.getItem("currentUser")) || {});


// export const useMyContext = () => useContext(MyContext);
export default MyContext;