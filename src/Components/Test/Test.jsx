import React, { useContext } from 'react';
import MyContext from '../Context'
function Test(){

    const currentUser = useContext(MyContext);
console.log(currentUser);
    return(
        <>
        <p>sdasdasdasdasd</p>
        <p>Context Value: {currentUser.id}</p>
        </>
    )
}
export default Test