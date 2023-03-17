const bcrypt = require('bcrypt')
const Joi = require('joi')
const {v4: uuid}= require('uuid')
const Io = require('../utils/Io') 
const Users = new Io("src/db/users.json");
const User = require("../models/users");
const jwt = require("../utils/jwt");


const register = async (req, res)  => {
    try {
        const {username, password, name, image} = req.body;
       
        const schema =Joi.object({
            username: Joi.string().alphanum().min(5).max(32).required(),
            password: Joi.string().required(),
            name: Joi.string().alphanum().min(5).max(32).required(),
            image: Joi.required()
        })
        
    
            const users = await Users.read();
            
            
            // if (user) return res.redirect("/login")
            
            const id =  (users[users.length - 1]?.id || 0) + 1;
            const  hashedPass = await bcrypt.hash(password, 12)
            const {error} = schema.validate({username, name, password, image})
            const path = `${process.cwd()}/img/${uuid()}`;
            image.mv(path)
            const newUser = new User(id, username,name, image, hashedPass);
            
            const allUsers = users.length ? [...users, newUser] : [newUser];
            if (error) return res.status(400).send(error.message)
            Users.write(allUsers)
            
            
            const token = jwt.sign({id: newUser.id})
            res.cookie("token", token)
            res.redirect("/")
            res.status(201).json({message: "User Created"})
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = {
    register
}