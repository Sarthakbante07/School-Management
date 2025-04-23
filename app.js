require('dotenv').config(); // Add this line at the top

const express = require('express');
const bodyParser = require('body-parser');
const schoolRoutes = require('./routes/school');

const app = express();
app.use(bodyParser.json());
app.use('/', schoolRoutes); 

const PORT = process.env.PORT || 3000; // Uses environment variable if available
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
