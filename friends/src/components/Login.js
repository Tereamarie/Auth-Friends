import React, { useState } from 'react';
import { axiosAuth } from '../utilities/axiosAuth';

// function Login(props) {
//     const [error, setError] = useState();
//     const [data, setData ] = useState({
//         username: "",
//         password: ""
//     })

//     const handleChange = (event) => {
//         setData({
//             ...data,
//             [event.target.name]: event.target.value,
//         })
//     }

//     const login = e => {
//         e.preventDefault();
//         axiosAuth()
//             .post('login', data)
//             .then(res => {
//             localStorage.setItem('token', res.data.token);
//             props.history.push('/protected');
//           })
//       }


//     return (
//         <form onSubmit={login}>
//             {error && <div className="error">{error}</div>}

//             <input 
//                 type="text" 
//                 name="username" 
//                 placeholder="Username" 
//                 value={data.username} 
//                 onChange={handleChange} />
//             <input 
//                 type="password" 
//                 name="password" 
//                 placeholder="Password" 
//                 value={data.password}
//                 onChange={handleChange} />

//             <button type="submit">Log In</button> 
//         </form>
//     );
// }

// export default Login;


class Login extends React.Component {
    state = {
      credentials: {
        username: '',
        password: ''
      }
    };
  
    handleChange = e => {
      this.setState({
        credentials: {
          ...this.state.credentials,
          [e.target.name]: e.target.value
        }
      });
    };
  
    login = e => {
      // 1). make a .POST request to the server
//the server will "authenticate" the user based on their credentials they provide in the form 
//If they can be authenticated the server will return a 'token'

// DRIVER NAVIGATOR: What is  the first step in this function? 1). you  import axios
// 2). You create a POST request to the server.


//What is the first step in this process 
// 1). iMPORT AXIOS from 'axios';
//2). create a .post request to the server.
//3). use the credentials in the axios call
      e.preventDefault();
      axiosAuth()
        .post('/login', this.state.credentials)
        /* we will first console.log(res) here initial code at the .then(res => console.log(res))*/
        .then(res => {
          localStorage.setItem('token', res.data.payload);
          // redirect to the apps main page?
          this.props.history.push('/protected');
        })
        // Also at the .catch(err => console.log(err));
        .catch(err => console.log(err));
    };
  
    componentDidMount() {
      this.setState({ isLoading: false })
    }
  
    render() {
      return (
        <div>
          <form className="login" onSubmit={this.login}>
            <div className="username">Username</div>
            <input
              type="text"
              name="username"
              value={this.state.credentials.username}
              onChange={this.handleChange}
            />
            <div className="password">Password</div>
            <input
              type="password"
              name="password"
              value={this.state.credentials.password}
              onChange={this.handleChange}
            />
            <button className="login-button">Log in</button>
          </form>
        </div>
      );
    }
  }
  
  export default Login;
  
  


