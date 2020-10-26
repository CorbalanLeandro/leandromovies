import React, { useContext } from 'react';
import UserContext from '../context/UserContext'

const UserMovies = () => {
  const { userData } = useContext(UserContext)
  const user = userData.user
  return (
    <h1>{user.username}</h1>
  )
}

export default UserMovies;