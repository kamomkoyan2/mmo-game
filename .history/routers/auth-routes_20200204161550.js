const router = require('express').Router();
const passport = require('passport')
const passportSetup = require()


//auth login
router.get('/App.svelte', (req,res) => {
    res.render(login)
})

//auth with google
router.get('google', passport.authenticate('google', {
    scope:['profile']
}))



module.exports = router;