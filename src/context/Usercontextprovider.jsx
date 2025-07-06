import React, { useState } from 'react'
import UserContext from './Usercontext'

const Usercontextprovider = ({children}) => {
   const[user,setUser] = useState('')
  return (
    <UserContext.Provider value={{user,setUser}}>
        {children}
    </UserContext.Provider>
  )
}

export default Usercontextprovider