import User from "../model/user.js";
import bcrypt from 'bcrypt';

const signUpUser = async (request, response) =>{
    try {       
        const hashedPassword = await bcrypt.hash(request.body.password, 10);
        const user = {name: request.body.name, username: request.body.username, password: hashedPassword};
        const newUser = new User(user);
        await newUser.save();
        return response.status(200).json({msg: 'signup successful'});
    } catch (error) {
        return response.status(500).json({msg: 'error while signup'});
    }
}

export default signUpUser;