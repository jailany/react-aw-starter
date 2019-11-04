import 'ignore-styles';
const express = require('express');
const device = require('express-device');
const path = require('path');
const fs = require('fs');

const port = 3000;
const app = express();

app.use(device.capture());
app.use(express.static('./build', { maxAge: 345600000 }));


app.get('*', (req, res, next) => {
  const htmlPath = path.resolve(__dirname, '../../build/main.html');
  fs.readFile(htmlPath, 'utf8', (err, data) => {
    res.send(data);
  })
});

app.listen(port, () => {
  console.log(`express server running on port - ${port}`);
});