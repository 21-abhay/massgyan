

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const UserSchema = require('../../Schema/UserSchema');

const signinController = async (req, res) => {
    
    try {
        // Check whether the user with this email exists already
        const User = mongoose.model('user',UserSchema);
        let user = await User.findOne({ email: req.body.email});
        if (user) {
            return res.status(400).json({ error: "Sorry a user with this email already exists" })
        }
        else{
            const salt = await bcrypt.genSalt(10);
            const secPass = await bcrypt.hash(req.body.password, salt);
        
            // Create a new user
            user = await User.create({
                name: req.body.name,
                email: req.body.email,
                phone: req.body.phone,
                password: secPass
            });
            res.status(200);
        }
  
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  };

module.exports = signinController