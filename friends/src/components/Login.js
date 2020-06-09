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
      e.preventDefault();
      axiosAuth()
        .post('/login', this.state.credentials)
        .then(res => {
          localStorage.setItem('token', res.data.payload);
          // redirect to the apps main page?
          this.props.history.push('/protected');
        })
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
  
  


