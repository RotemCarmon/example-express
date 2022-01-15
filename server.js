const fs = require('fs');
const express = require('express');
const path = require('path');
const app = express();
const http = require('http').createServer(app);
const session = require('express-session');
const cors = require('cors')

const sessionOptions = {
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}
app.use(session(sessionOptions));
app.use(cors());

let connectionType;

app.get('/', (req, res) => {
  res.send('Hello Node JS updated!')
});

app.post('api/auth/login', (req,res) => {
  req.session.user = {
    name: 'Puki',
    age: 80
  }
  res.send(req.session)
})


const port = 3080
http.listen(port, () => {
  connectionType = 'HTTP'
  console.log('App is listening on port ' + port);
});