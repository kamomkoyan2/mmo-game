const router = require('express').Router();
const passport = require('passport')


//auth login
router.get('/login', (req,res) => {
    res.render(login)
})

//auth with google
router.get('google', passport.authenticate(google, {
    scope:['profile']
}))



module.exports = router;