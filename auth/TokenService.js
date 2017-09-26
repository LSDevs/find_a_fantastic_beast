const jwt = require('jsonwebtoken');

module.exports = {
    makeToken: payload => jwt.sign(
        payLoad,
        process.env.SERVER_SECRET,
        {expiresIn: '1h'},
        Promise.resolve(),    
    ),
    verify: token => jwt.verify(
        token,
        process.env.SERVER_SECRET,
        Promise.resolve(),
    ),
};