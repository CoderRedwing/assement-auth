const User = require('../models/user.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const signup = async (req, res) => {
    try {
        const { username, email, password, fullName, gender, dateOfBirth, country } = req.body;

        if (!username || !email || !password || !fullName || !gender || !dateOfBirth || !country) {
            return res.status(400).json({ error: "All fields are required" });
        }

        const existingUser = await User.findOne({ $or: [{ email }, { username }] });
        if (existingUser) return res.status(400).json({ error: 'User already exists' });

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({ username, email, password: hashedPassword, fullName, gender, dateOfBirth, country });
        await newUser.save();

        res.status(201).json({ message: "User registered successfully", user: newUser });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ error: 'Invalid credentials' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ error: 'Invalid credentials' });

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });

        res.json({ token, user: { 
            username: user.username, 
            email: user.email, 
            fullName: user.fullName, 
            gender: user.gender, 
            dateOfBirth: user.dateOfBirth, 
            country: user.country 
        } });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { signup, login };
