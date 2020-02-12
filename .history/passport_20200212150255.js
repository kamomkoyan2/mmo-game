const passport = require('passport')
const JwtStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');
const LocalStrategy = require('passport-local').Strategy;
const { JWT_SECRET } = require('');
const User = require('./models/user')


passport.use(new JwtStrategy({
    jwtFromRequest:ExtractJwt.fromHeader('authorization'),
    secretOrKey:JWT_SECRET
}. async (payload,done) => {
    try {
        // Find the user specified in token
        const user = await User.findById(payload.sub);

        //if user doesn't exists, handle it

        if (!user) {
            
        }


    }
}))