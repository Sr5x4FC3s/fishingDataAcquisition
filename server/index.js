const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const port = 3003;

/**************************** DATABASE ****************************/
const { connection } = require('../database/connection/index');

/***************************** ROUTES *****************************/
const map_info = require('./routes/mapInformation');
const coordinate_info =  require('./routes/retrieveCoordinateInformation');


const app = express();

//*************** ESTABLISH DATABASE CONNECTION ********************/
connection.connect(err => {
  if (err) {
    console.log(err.stack);
    return;
  }
  console.log(`MySQL initialized and connected as id: ${connection.threadId}`);
});


app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());

app.use('/', express.static(path.join(__dirname, '../dist'))); 

app.get('*', (req, res) => {
  res.sendFile(path.resolve('dist', 'index.html'));
});

/***************************** MIDDLEWARES *************************/

app.use('/', [map_info, coordinate_info]);

app.listen(port, () => console.log(`Listening on port: ${port}`));