const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const schoolRoutes = require('./routes/school');


app.use(bodyParser.json());
app.use('/', schoolRoutes); 

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});