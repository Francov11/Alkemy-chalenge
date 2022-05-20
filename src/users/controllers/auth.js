require('dotenv').config()
const jwt = require('jsonwebtoken');
const bcrypt = require ('bcrypt')
const repositories = require('../repositories/auth')
const http = require('../../helpers/helpers')

require('dotenv').config();

//User register 
const register = async (req, res) => {
    try {
        const { name, lastname, email, password} = req.body 

        const passwordHash = await bcrypt.hash(password, 8)

        const newUser = {
            name: name, 
            lastname: lastname,
            email: email,
            password: passwordHash,
        }

        const user = await repositories.register(newUser)
        console.log(user)

        res.json({
            message: 'usuario creado',
            status: 200
        });
    }
    catch (err) {
        http.Error(req, res, err)
    }
}

//User login 
const login = async (req, res) => {
    try {
        const { email } = req.body

        const user = await repositories.login(email)

        if(user) {
            const { password, email } = req.body;
            console.log("signup", password, email);
            jwt.sign(
                {email, userId: user._id},
                process.env.SECRET_KEY,
                { expiresIn: process.env.JWT_EXPIRES_IN },
                (err, token) => {
                    if (err) {
                        http.Error(req,res,err)
                    } else {
                    req.token = token;
                    console.log('TOKEN:', token)
                    res.json({token});
                    }
                }
                );
        }
        else {
            http.Error(req,res,err)
        } 

    }
    catch (err){
        http.Error(req,res,err)
    }
}

// Exports 
module.exports = {
    register,
    login,
}