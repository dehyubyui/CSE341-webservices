const express = require('express');
const bodyParser = require('body-parser');


const mongodb = require('./database/contact');
const app = express();


// Use body-parser middleware
app.use(bodyParser.json());


const port = process.env.PORT || 3000;

// Use the router from ./routes
app.use('/', require('./routes'));

mongodb.initDb((err) => {
  if(err) {
    console.log(err);
  }
  else {
    app.listen(port, () => {console.log(`Database is listening and node Running on port ${port}`)});
  }
});