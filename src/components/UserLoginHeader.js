import React, { useContext } from 'react';
import Dropdown from 'react-bootstrap/Dropdown'
import { Link, useHistory } from 'react-router-dom';
import UserContext from '../context/UserContext';

const UserLoginHeader = () => {
  const history = useHistory();  
  const { userData, setUserData } = useContext(UserContext);
  const clickHandler = (e) => {
    if (e.target.attributes.href.value === 'logout') {
      setUserData(null);
      return history.push('/');
    } else {
      history.push('/user_movies')
    }
    
  }
  if (!userData) {
    return (
      <Link to='/login'>
        <span className='navbar-brand'>Login</span>
      </Link>
    )
  }
  return (
    <Dropdown navbar='true'>
      <Dropdown.Toggle className="navbar-brand" variant="primary" id="dropdown-basic">
        {userData.user.username}
      </Dropdown.Toggle>  
      <Dropdown.Menu>
        <Dropdown.Item as="button" href="profile" onClick={clickHandler} eventKey="1">My Movies</Dropdown.Item>
        <Dropdown.Item as="button" href="logout" onClick={clickHandler} eventKey="2">Logout</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default UserLoginHeader