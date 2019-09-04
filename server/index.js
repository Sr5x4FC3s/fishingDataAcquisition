const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const port = 3003;

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());

app.use('/', express.static(path.join(__dirname, '../dist'))); 

app.get('*', (req, res) => {
  res.sendFile(path.resolve('dist', 'index.html'));
});

app.listen(port, () => console.log(`Listening on port: ${port}`));