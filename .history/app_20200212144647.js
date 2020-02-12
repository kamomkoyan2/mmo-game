"use strict";
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('config');


const app = express();

if (!process.env.NODE_ENV)

app.use(bodyParser.json());

app.use(express.json({extended:true}));

// app.use('/api/auth', require('./routes/auth.routes'));

const PORT = config.get('port') || 5000;

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