import{ useContext } from 'react'
import { AuthContext } from './AuthProvider'
import { Navigate } from 'react-router-dom'

const ProtectedRoutes = ({children}) => {

    let{isloging} = useContext(AuthContext)

    if(isloging){
        return children
    }else{
        return <Navigate to="/"/>
    }
}

export default ProtectedRoutes