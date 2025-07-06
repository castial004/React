import React, { useContext } from 'react'
import UserContext from '../context/Usercontext'

const Profile = () => {
    const {user} = useContext(UserContext)
    if(!user) <div> please login! </div>
    return <div> Username: {user.userName}</div>
}

export default Profile
