// const { google } = require('googleapis');
// const express = require('express')
// const OAuth2Data = require('./google_key.json')

// const app = express()

// const CLIENT_ID = OAuth2Data.client.id;
// const CLIENT_SECRET = OAuth2Data.client.secret;
// const REDIRECT_URL = OAuth2Data.client.redirect

// const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URL)
// var authed = false;

// app.get('/', (req, res) => {
//     if (!authed) {
//         // Generate an OAuth URL and redirect there
//         const url = oAuth2Client.generateAuthUrl({
//             access_type: 'offline',
//             scope: 'https://www.googleapis.com/auth/gmail.readonly'
//         });
//         console.log(url)
//         res.redirect(url);
//     } else {
//         const gmail = google.gmail({ version: 'v1', auth: oAuth2Client });
//         gmail.users.labels.list({
//             userId: 'me',
//         }, (err, res) => {
//             if (err) return console.log('The API returned an error: ' + err);
//             const labels = res.data.labels;
//             if (labels.length) {
//                 console.log('Labels:');
//                 labels.forEach((label) => {
//                     console.log(`- ${label.name}`);
//                 });
//             } else {
//                 console.log('No labels found.');
//             }
//         });
//         res.send('Logged in')
//     }
// })

// app.get('/auth/google/callback', function (req, res) {
//     const code = req.query.code
//     if (code) {
//         // Get an access token based on our OAuth code
//         oAuth2Client.getToken(code, function (err, tokens) {
//             if (err) {
//                 console.log('Error authenticating')
//                 console.log(err);
//             } else {
//                 console.log('Successfully authenticated');
//                 oAuth2Client.setCredentials(tokens);
//                 authed = true;
//                 res.redirect('/')
//             }
//         });
//     }
// });


// const express = require('express')
// const authRoutes = require('./routers/auth-routes')
// const passportSetup = require('./config/passport-setup')
// const app = express()
// // const Svelte = require('*.svelte')

// const svelteViewEngine = require("svelte-view-engine");

// let engine = svelteViewEngine({
//     template: "../src/App.svelte", // see Root template below
//     dir: "./pages",
//     type: "svelte",
//     init: true,
//     watch: true,
//     liveReload: true,
//     // See Build script below
//     buildScript: "./scripts/svelte/build.js",
//     buildDir: "/tmp/svelte-build",
// });
 
// app.engine(engine.type, engine.render);
// app.set("view engine", 'svelte');
// app.set("views", '../src');

// app.use('/auth', authRoutes)


// app.get('/', (req,res) => {
//     res.render('/App.svelte')
// })

// const port = process.env.port || 5000
// app.listen(port, () => console.log(`Server running at ${port}`));


const app = require('express')()
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const user  = require()

require('dotenv').config({ path: '.env' })

async function start() {
  try {
      await mongoose.connect(config.get('mongoUri'), {
          useNewUrlParser:true,
          useUnifiedTopology:true,
          useCreateIndex:true
      });
      app.listen(PORT, () => console.log(`App has ben started pn port ${PORT}...`));
  } catch (e) {
      console.log('Server Error', e.message);
  }
}
// // require('./models/Story.js')
// require('./models/Comment.js')
// require('./models/User.js')

require('./handlers/passport')

app.use(cors())

app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.end('hello world!')
})

app.use('/', require('./routers/users'))
app.use('/', require('./routes/auth'))
// app.use('/stories', require('./routes/stories'))

app.use((req, res) => {
  res
    .status(404)
    .json({
      message: 'not found'
    })
})

app.use((err, req, res, next) => {
  let error = {
    status: err.status || 500,
    message: err.message || 'Something went wrong!'
  }
  if (process.env.NODE_ENV === 'development') {
    error['stack'] = err.stack
  }
  res
    .status(err.status || 500)
    .json(error)
})

// const port = process.env.PORT || 8000
// app.listen(port, () => console.log(`news app backend is running on port ${port}`))