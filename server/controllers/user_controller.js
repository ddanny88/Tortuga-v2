const { User } = require('../../db/models/user_model');
const bcrypt = require('bcryptjs');

const registerUser = async (req, res) => {
    const { username , password, firstName, lastName, email} = req.body;
    let user = await User.find({ username: username });
    if (user.length === 0) {
        try {
            let salt =  await bcrypt.genSalt(10);
            let hash =  await bcrypt.hash(password, salt);
            let newUser = await new User( {...req.body, password: hash} );
            let saveUser = await newUser.save();
            req.session.user = { 
                firstName,
                lastName,
                email
            }
            res.status(201).json(req.session.user);
        } catch (e) {
           console.log('ERROR: ', e);
        }
    } else {
        res.json({error: "USERNAME ALREADY EXISTS"});
    }
}




const loginUser = async (req, res) => {
    const { username, password } = req.body;
    const user = await User.find({ username: username });
    if (user.length === 0) {
        return res.json({error: 'USER NOT FOUND'});
    } else {
        let isAuthenticated = await bcrypt.compare(password, user[0].password);
        if (!isAuthenticated) return res.json({error: 'INCORRECT PASSWORD'});
        req.session.user = {
            username
        }
        return res.status(200).json(req.session.user);
    }
}

const getUser = (req, res) => {
    res.status(200).json(req.session)
}

const logout = (req, res) => {
    req.session.destroy();
    res.sendStatus(200);
}


module.exports = {
   registerUser,
   loginUser,
   getUser,
   logout
}