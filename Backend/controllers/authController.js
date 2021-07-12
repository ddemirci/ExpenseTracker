const User = require('../models/user');
const bcrypt = require('bcrypt');

/**
 * A new user signs in to the system
 * @returns signedUser
 */
exports.signIn = async (req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const userName = req.body.userName;
    const password = req.body.password;

    try{
        const cryptedPassword = await cryptPassword(password);
        const user = new User({
            firstName: firstName,
            lastName: lastName,
            email: email,
            userName: userName,
            password: cryptedPassword,
        });
    
        await user.save();
        return res.status(201).json({userName: userName, id: user._id});
    }
    catch(err){
        console.log(err);
        return res.status(500).json({err});
    }
}

/**
 * A user logs in to the system
 * @returns loggedUser
 */
exports.logIn = async (req, res) => {
    const userName = req.body.userName;
    const password = req.body.password;

    try{
        const user = await User.findOne().or([{ email: userName }, {userName: userName}]);
        if (!user) 
            return res.status(401).json({errorMessage: 'Invalid email or password'});

        const isMatched = await bcrypt.compare(password, user.password);
        if (isMatched) 
            return res.status(200).json({userName: userName, id: user._id});
        
        return res.status(401).json({errorMessage: 'Invalid email or password'});
    }
    catch{
        console.log(err);
        return res.status(500).json({err});
    }
}

cryptPassword = (password) => {
    return bcrypt.hash(password, 12)
}


