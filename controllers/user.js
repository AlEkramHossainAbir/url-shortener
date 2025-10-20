const User = require('../models/user');
const { v4: uuidV4} = require('uuid')

const handleUserLogin = async (req, res) => {
     const { email, password } = req.body;
    if ( !email || !password) {
        return res.status(400).json({ error: "Name, email and password are required" });
    }

    const user = await User.findOne({ email, password });

    if (!user) {
        return res.render("login", { error: "Invalid User" });
    }

    const sessionId = uuidV4();

    return res.redirect("/")
}

const handleUserSignUp = async (req, res) => {
    console.log("called", req.body)
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        return res.status(400).json({ error: "Name, email and password are required" });
    }

    await User.create({ name, email, password });

    return res.redirect("/");
    
}

module.exports = {
    handleUserLogin,
    handleUserSignUp
}