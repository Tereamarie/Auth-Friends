import React from 'react';
import { Route, Redirect } from 'react-router-dom';

//Requirement:
//1. Has to have the same API as <Route/>, (same props as Route)
//2. It renders a <Route /> and passes all the props through to it;
//3. It checks if the user is authenticated, if they are , it renders
//the "component" prop. if not, it redirects the user to /login.
// Import your  { Route, Redirect } and  pass all your props through it to render: return (<Route {...props} />)
// so have taken all of the private props and passed them to  our Route 
//when we want to do logic for this we will render={() =>{if}}
const PrivateRoute = ({ component: Component, ...rest }) => {
    //const Component = props.component
     return (
        <Route 
            {...rest } 
            render={(props) => {
                // check to see if we think we have a good token
                if (localStorage.getItem('token')){
                //if token is in localstorage, render the given component
                 //push to component prop
                return <Component {...props} />
            } else {
                return <Redirect to="/login" />
            }
        }} />
    );
};

export default PrivateRoute;