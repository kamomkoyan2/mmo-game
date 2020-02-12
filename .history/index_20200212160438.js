
const app = require('./server/app');
const config = require('config');
// Start the server
const PORT = config.get('port') || 3000;

app.listen(port);
console.log(`Server listening at ${port}`);

// refactored code for easier test and feature scale