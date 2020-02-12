                          "use strict";

const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');



const app = express();

if (!process.env.NODE_ENV === 'test') {
  app.use(morgan('dev'))
}

app.use(bodyParser.json());

app.use(express.json({extended:true}));

// app.use('/api/auth', require('./routes/auth.routes'));



async function start() {
  try {
      await mongoose.connect(config.get('mongoUri'), {
          useNewUrlParser:true,
          useUnifiedTopology:true,
          useCreateIndex:true
      });
      
  } catch (e) {
      console.log('Server Error', e.message);
  }
}

module.exports = app;