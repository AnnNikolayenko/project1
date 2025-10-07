const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'app.html')); 
});

app.listen(port, () => {
  console.log(`Сервер працює на http://localhost:${port}`);
});