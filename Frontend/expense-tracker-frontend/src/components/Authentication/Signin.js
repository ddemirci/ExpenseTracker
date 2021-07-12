import { useState } from "react";

const Signin = props => {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
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

    const emailChangeHandler = event => {
        setEmail(event.target.value);
    }

    const nameChangeHandler = event => {
        setName(event.target.value);
    }

    const surnameChangeHandler = event => {
        setSurname(event.target.value);
    }

    const passwordChangeHandler = event => {
        setPassword(event.target.value);
    }
    
    return(
        <form onSubmit={submitHandler}>
            <div className= {classes['login-controls']}>
                <Input className={classes['login-control']} label='Username' value={userName} type='text' onChangeHandler={userNameChangeHandler}/>
                <Input className={classes['login-control']} label='Email' value={email} type='email' onChangeHandler={emailChangeHandler}/>
                <Input className={classes['login-control']} label='Name' value={name} type='text'  onChangeHandler={nameChangeHandler}/>
                <Input className={classes['login-control']} label='Surname' value={surname} type='text' onChangeHandler={surnameChangeHandler}/>
                <Input className={classes['login-control']} label='Password' value={password} type='password' minLength='6' onChangeHandler={passwordChangeHandler}/>
            </div>
            <div className={classes['login-controls-actions']}>
                <a onClick={props.toggleHandler}>Log In</a>
            </div>            
            <div className={classes['login-controls-actions']}>
                <button type="submit">Sign In</button>
            </div>
        </form>
    ) 
}

export default Signin;