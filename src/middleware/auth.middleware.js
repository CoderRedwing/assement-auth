const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    try {
        const token = req.header("Authorization");
        if (!token) {
            return res.status(401).json({ error: "Access Denied. No token provided." });
        }

        const decoded = jwt.verify(token.replace("Bearer ", ""), process.env.JWT_SECRET);
        req.user = decoded; 
        next();
        
    } catch (error) {
        res.status(401).json({ error: "Invalid or expired token." });
    }
};

module.exports = { verifyToken };
