import { Outlet, Navigate } from 'react-router-dom'

const PrivateRoutes = ({currentUser}) => {
    console.log(3);
    return(
        
       
        currentUser ? <Outlet/> : <Navigate to="/"/>
        
    )
}

export default PrivateRoutes