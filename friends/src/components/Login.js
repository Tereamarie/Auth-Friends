import React, { useState } from 'react';
import { axiosAuth } from '../utilities/axiosAuth';


function Login(props) {
     const [error, setError] = useState();
     const [data, setData ] = useState({
         username:"",
         password:""
    })

    const handleChange = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value,
        })
    }

     const login = e => {
         e.preventDefault();
         axiosAuth()
         .post('login', data)
         .then(res => {
             localStorage.setItem('token', res.data.token);
             props.history.push('/protected');
         })
     }

    return (
        <form onSubmit={login}>
             {error && <div className="error">{error}</div>}

          <input
            type="text"
            name="username"
            placeholder="Username"
            value={data.username}
            onChange={handleChange} />

            <input
               type="password"
               name="password"
               placeholder="Password"
               value={data.password}
               onChange={handleChange} />

             <button type="submit">Log In</button>  
          </form>
       );
}
export default Login;