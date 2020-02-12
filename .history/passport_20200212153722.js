 "use strict";
const passport = require('passport')
const JwtStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');
const LocalStrategy = require('passport-local').Strategy;
const { JWT_SECRET } = require('./config/index');
const GoogleTokenStrategy = require('passport-google-token')
const User = require('./models/user')


passport.use(new JwtStrategy({
    jwtFromRequest:ExtractJwt.fromHeader('authorization'),
    secretOrKey:JWT_SECRET
}, async (payload,done) => {
    try {
        // Find the user specified in token
        const user = await User.findById(payload.sub);

        //if user doesn't exists, handle it

        if (!user) {
            return done(null,false);
        }

        //otherwise, return the user
        done(null,user);




    } catch(error) {
        done(error,false);
    }
}));

passport.use(new GoogleTokenStrategy({

}, async(accessToken, refreshToken, profile)))

// local strategy

passport.use(new LocalStrategy({
    usernameField:'email',
}, async (email,password,done) => {
    try {
        //find user given the email
        const user = await User.findOne({email})

        // if not, handle it 
        if (!user) {
            return done(null,fasle) 

        }
    }
}))