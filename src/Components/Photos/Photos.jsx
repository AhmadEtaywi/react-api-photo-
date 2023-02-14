import React, { useContext } from 'react';
import {UserContext} from '../Albums/Albums'
function Photos(){

    const currentUser = useContext(UserContext);

    return(
        <>
        <p>sdasdasdasdasd</p>
        <p>{currentUser.email}</p>
        </>
    )
}
export default Photos