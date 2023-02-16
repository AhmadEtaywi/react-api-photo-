import React, { useState, useEffect, useContext } from 'react';
import "./Login.css"
import { useNavigate } from 'react-router-dom';
import Context from '../Context'
import axios from 'axios';


const Login = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');
  const { setCurrentUser } = useContext(Context);

  useEffect(() => {
    localStorage.clear();
  }, []);


  useEffect(() => {


    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        const data = response.data;
        setUsers(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchUsers();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userName = event?.target?.elements?.email?.value;
    const user = users.find((user) => user.email.toLowerCase() === userName.toLowerCase());
    if (!user) {
      setError('Wrong Email please Try again !!!');
    } else {
      localStorage.setItem('currentUser', JSON.stringify(user));
      setCurrentUser(user);
      navigate('/albums');

    }
  };

  return (

    <div className='wrapper'>
      <h6 className='Log-in-text'>Log In</h6>
      <form className='password-box' onSubmit={handleSubmit}>
        <input id="email" type="email" required />
        <input id="pass" type="password" />
        <button id='btn1' type="submit">LOG IN</button>
        {error && <div id="wrong-pass">{error}</div>}
      </form>
    </div>

  );
};

export default Login;
