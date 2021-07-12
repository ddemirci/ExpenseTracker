import classes from './Login.module.css';
import Input from '../UI/Input/Input';
import { useState } from 'react';

const Login = props => {
    
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = event => {
        event.preventDefault(); // To prevent reload of the page

        const loginData = {
            userName: userName,
            password: password
        };
    }

    const userNameChangeHandler = event => {
        setUserName(event.target.value);
    }

    const passwordChangeHandler = event => {
        setPassword(event.target.value);
    }
    
    return(
        <form onSubmit={submitHandler}>
            <div className= {classes['login-controls']}>
                <Input className={classes['login-control']} label='Username' value={userName} type='text' onChangeHandler={userNameChangeHandler}/>
                <Input className={classes['login-control']} label='Password' value={password} type='password' minLength='6' onChangeHandler={passwordChangeHandler}/>
            </div>
            <div className={classes['login-controls-actions']}>
                <a onClick={props.toggleHandler}>Sign In</a>
            </div>            
            <div className={classes['login-controls-actions']}>
                <button type="submit">Login</button>
            </div>
        </form>
    ) 
}

export default Login