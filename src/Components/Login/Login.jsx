
import React, { useState, useEffect,useContext } from 'react';
import "./Login.css"
import { useNavigate } from 'react-router-dom';
import Context from '../Context'
const Login = () => {
  const  navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');
const {setCurrentUser}=useContext(Context)
console.log(5);
  useEffect(() => {
    localStorage.clear();
    console.log(6);
    // console.clear()
  }, []);


  useEffect(() => {

    async function fetchUsers() {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      // console.log(response)
      setUsers(data);
      console.log(7);
    }
    fetchUsers();
    
 

  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userName = event?.target?.elements?.email?.value;
    const user = users.find((user) => user.email.toLowerCase() === userName.toLowerCase());
    if (!user) {
      setError('Wrong Email please Try again !!!');
      console.log(8);
    } else {
      localStorage.setItem('currentUser', JSON.stringify(user));
      console.log(9);
setCurrentUser(user);
console.log(10);
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
