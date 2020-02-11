const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20')
const key = require('./key')

passport.use(
    new GoogleStrategy({
        callbackURL: '/auth/google/redirect',
        clientID: key.google.clientID,
        clientSecret:'key.google.clientSecret

    }), () => {

    }
)

