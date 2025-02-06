const path = require('path');
require('dotenv').config();
var express = require('express');
var app = express();

// enable CORS
// API is remotely testable by FCC
var cors = require('cors');
const { application } = require('express');
app.use(cors({ optionsSuccessStatus: 200 }));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
res.sendFile(__dirname + '/views/index.html');
});

app.get('/api/hello', function (req, res) {
res.json({ greeting: 'hello API' });
});

app.get('/api/whoami', function (req, res) {
  const ipaddress = req.headers.host
  const software = req.headers['user-agent']
  const language = req.headers['accept-language']

  res.json({
    ipaddress,
    language,
    software
  })
})

// listen for requests :)
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
