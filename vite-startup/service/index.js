const express = require('express');
const app = express();
const cors = require('cors');
const uuid = require('uuid');

app.use(express.json()); // all the data is stored in JSON

// TODO: replace with my variables
let user;

// set up router path for the endpoints
var apiRouter = express.Router();
app.use(`/api`, apiRouter);

const port = process.argv.length > 2 ? process.argv[2] : 3000;

// Serve up the front-end static content hosting
app.use(express.static('public'));

// looking at get scores in Simon and trying to figure out how it works but I have no idea how it's supposed to get a score

// app.get('*', (_req, res) => {
//   res.send({ msg: 'Startup service' });
// });

var attendance = {attending: "Attendance confirmed!"};
apiRouter.get('/attending', (_req, res) => {
    console.log('In test');
    res.send(attendance);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// what do I need endpoints for?
// display entered username--take username from login, store in localstorage, retrieve username and display
// calendar edits (idk if this will be implemented ever)