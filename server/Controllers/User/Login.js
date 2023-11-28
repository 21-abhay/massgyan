
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const UserSchema = require('../../Schema/UserSchema')

const loginController = async (req, res) => {
  
    const { email, password } = req.body;
    try {
        const User = mongoose.model('user',UserSchema)
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ error: "Please try to login with correct credentials" });
        }
        else{
            const passwordCompare = await bcrypt.compare(password, user.password);
            if (!passwordCompare) {
                return res.status(400).json({error: "Please try to login with correct credentials" });
            }
        
            const data = {
                user: {
                id: user.id
                }
            }
            const authtoken = jwt.sign(data, process.env.JWT_SECRET);
            res.json({authtoken })
        }
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  };


  module.exports = loginController;