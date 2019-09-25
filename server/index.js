const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const port = 3003;

/***************************** ROUTES *****************************/
const map_info = require('./routes/mapInformation');



const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());

app.use('/', express.static(path.join(__dirname, '../dist'))); 

app.get('*', (req, res) => {
  res.sendFile(path.resolve('dist', 'index.html'));
});

/***************************** MIDDLEWARES *************************/

app.use('/', [map_info,]);

app.listen(port, () => console.log(`Listening on port: ${port}`));