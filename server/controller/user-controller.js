const User = require("../model/user.js");
const bcrypt = require('bcrypt');

const signUp = async (req, res) =>{
    try {
        const { name, username, password } = req.body;     
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = {name, username, password: hashedPassword};
        const newUser = new User(user);
        const userData = await newUser.save();
        return res.status(200).json({
            status: false,
            msg: 'signup successful',
            data: userData
        });
    } catch (error) {
        return res.status(500).json({
            status: false,
            msg: 'Internal server error',
        });
    }
}

module.exports = { signUp };