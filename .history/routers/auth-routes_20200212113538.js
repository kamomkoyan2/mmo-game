// const router = require('express').Router();
// const passport = require('passport')



// //auth login
// router.get('/App.svelte', (req,res) => {
//     res.render(login)
// })

// //auth with google
// router.get('google', passport.authenticate('google', {
//     scope:['profile']
// }))

// router.get('/google/redirect', (req,res) => {
//     res.send('you reached the calback')
// })



//api/auth/register

router.post('/login'
    [
        check('email', 'incorrect Email').isEmail(),
        check('password' 'minheight password will be 6').isLen
    ]
)


module.exports = router;