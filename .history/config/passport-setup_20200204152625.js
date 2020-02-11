const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20')
const keys = require('./key')

passport.use(
    new GoogleStrategy({
        callbackURL: '/auth/google/redirect',
        clientID: 'keys.google.clientID',
        clientSecret:'key.google.clientSecret'

    }), () => {

    }
)

