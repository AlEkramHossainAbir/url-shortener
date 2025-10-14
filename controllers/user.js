const User = require('../models/user');

const handleGetUser = (req, res, db) => {
    const userId = req.params.userId;
    db.collection('users').findOne({ id: userId }, (err, user) => {
        if (err) {
            return res.status(500).json({ error: "Database error" });
        }
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        res.json(user);
    });
}

const handleUserSignUp = async (req, res, db) => {
    console.log("called")
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        return res.status(400).json({ error: "Name, email and password are required" });
    }

    await User.create({ name, email, password });

    return res.render("home")
    
}

module.exports = {
    handleGetUser,
    handleUserSignUp
}