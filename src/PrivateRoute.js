import { Outlet, Navigate } from 'react-router-dom'

const PrivateRoutes = ({currentUser}) => {
    return(
        
       
        currentUser ? <Outlet/> : <Navigate to="/"/>
        
    )
}

export default PrivateRoutes