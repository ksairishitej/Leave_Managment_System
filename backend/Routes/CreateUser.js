const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const bcrypt=require("bcryptjs")
const jwt=require("jsonwebtoken")
const leave=require('../models/LeaveRequest')
const secret="qwertyuiopasdfghjklzxcvbnmqwerty"
router.post("/createuser", [
    body('email').isEmail(),
    body('password', 'incorrect password').isLength({ min: 5 })
], async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const salt=await bcrypt.genSalt(10);
        const secure=await bcrypt.hash(req.body.password,salt);
        await User.create({
            name: req.body.name,
            password: secure,
            email: req.body.email,
            location: req.body.location
        });
        res.json({ success: true }); 
    } catch (error) {
        console.error(error); 
        res.json({ success: false });
    }
});
router.post("/loginuser", [
    body('email').isEmail(),
    body('password', 'incorrect password').isLength({ min: 5 })
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    let email = req.body.email;
    try {
        let userData = await User.findOne({ email })
        if (!userData) {
            return res.status(400).json({
                errors: "try login with correct credentials"
            })
        }
        const compPassword=await bcrypt.compare(req.body.password,userData.password);
        if (!compPassword) {
            return res.status(400).json({
                errors: "try login with correct credentials"
            })
        }
        const data={
            user:{
                id:userData.id,
                name:userData.name
            }
        }   
        const authtoken=jwt.sign(data,secret)
        res.json({ success: true,authtoken:authtoken});
    } catch (error) {
        console.error(error); 
        res.json({ success: false });
    }
});

module.exports = router;
