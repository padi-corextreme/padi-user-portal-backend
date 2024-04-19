import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'

const hashPassword = (password) => {
    return new Promise((resolve, reject) => {
        bcrypt.genSalt(8, (err, salt) => {
            if(err) {
                reject(err)
            }
            bcrypt.hash(password, salt, (err, hash) => {
                if(err){
                    reject(err)
                }
                resolve(hash)
            })
        })
    })
};

const comparePassword = (password, hashed) => {
    return bcrypt.compare(password, hashed)
}

export {hashPassword, comparePassword};



export const verifyToken = (req, res, next) => {
    try {
        //Extract bearer token from request headers
        const token = req.headers.authorization;
        //Check if bearer token exist
        if (!token) {
            return res.status(401).json({message: 'Access token not found in headers!'});
        }
        //Verify bearer token
        const accessToken = token.split('')[1];
        const decoded = jwt.verify(accessToken, process.env.JWT_SECRET);
        req.user = decoded;
        //Forward request to next middleware
        next();
    } catch (error) {
        return res.status(401).json({message: error.message})
    }
};