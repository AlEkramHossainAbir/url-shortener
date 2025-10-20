const User = require('../models/user');

const handleUserLogin = (req, res) => {
    console.log("login called", req.body)
    return res.render("login")
}

const handleUserSignUp = async (req, res) => {
    console.log("called", req.body)
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        return res.status(400).json({ error: "Name, email and password are required" });
    }

    await User.create({ name, email, password });

    return res.render("home")
    
}

module.exports = {
    handleUserLogin,
    handleUserSignUp
}