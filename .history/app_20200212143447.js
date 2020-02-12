"use strict";
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');




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