import { useState } from "react";

import Login from "../Authentication/Login";
import Signin from "../Authentication/Signin";

const AuthenticationModule = props => {
    const [isSignIn, setIsSignIn] = useState(false);

    const toggleSignIn = () => {
        setIsSignIn( prevState => !prevState);
    }

    return(
        isSignIn ? <Signin toggleHandler={toggleSignIn}/> : <Login toggleHandler={toggleSignIn}/>
    );

}

export default AuthenticationModule;