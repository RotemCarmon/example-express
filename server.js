const express = require('express');
const path = require('path');
const app = express();


app.use(express.static(path.join(__dirname, '../public_html')));

// app.get('/', (req, res) => {
//   res.send('<h1>My Node App</h1>')
// });

app.listen(5000, () => {
  console.log('App is listening on port 5000!');
});