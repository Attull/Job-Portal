import React, { useState } from 'react'
import UserPage from './UserPage'
import Login from '../../Login/Login'

export const Profile = () => {
    const [userLoged , setUserLoged] = useState("Bhaskar")
  return (
    <div>
{
(!userLoged)?<Login/>:<UserPage/>
}

    </div>
  )
}