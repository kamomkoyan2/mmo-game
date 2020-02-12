
const app = require('./server/app');

// Start the server
const PORT = config.get('port') || 5000;
app.listen(port);
console.log(`Server listening at ${port}`);

// refactored code for easier test and feature scale