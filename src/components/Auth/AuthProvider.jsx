import React, { createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export let AuthContext = createContext();

const AuthProvider = ({children}) => {

    let navigate = useNavigate()
    let [isloging,setislogin] = useState(null);

    let loginUser = (token) => {
        localStorage.setItem("token", token);
        console.log("login", token);
        setislogin(token);
    }
    

    let logoutUser = ()=>{
        localStorage.removeItem("token")
        setislogin(null)
        // window.location.reload()
        navigate('/'); 
    }
  return (
    <AuthContext.Provider value={{isloging,loginUser,logoutUser}}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider