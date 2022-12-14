const jwt = require('jsonwebtoken');
const config = require('../config/authJwt');

verifyToken = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, config.secret);
        const userId = decodedToken.id;
        if (req.body.userId && req.body.userId !== userId) {
            throw 'Invalid user ID';
        } else {
            next();
        }
    } catch {
        res.status(401).json({
            error: new Error('Invalid request!')
        });
    }
}


const authJwt = {
    verifyToken,
}

module.exports = authJwt