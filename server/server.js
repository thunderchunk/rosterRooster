// REQUIRE DEPENDENCIES
// ============================================================
var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var massive = require('massive');
var config = require('./config');
// INITILIZE APPS
// ============================================================
var app = module.exports = express();

// MASSIVE //
var massiveUri = config.MASSIVE_URI;
var massiveServer = massive.connectSync({
	connectionString: massiveUri
});
app.set('db', massiveServer);
var db = app.get('db');

// CONTROLLERS
// ============================================================
var ucontrol = require('./controllers/ucontrol');


// INITILIZE DEPENDENCIES
// ============================================================
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(__dirname + './../public'));



// ENDPOINTS
// ============================================================
// MODEL ENDPOINTS
// 
app.get('/user', ucontrol.userGetter);
app.post('/user', ucontrol.userPoster);
app.put('/user', ucontrol.userPutter);
app.delete('/user', ucontrol.userDeleter);

app.get('/status', ucontrol.statusGetter);
app.post('/status', ucontrol.statusPoster);
app.put('/status', ucontrol.statusPutter);
app.delete('/status', ucontrol.statusDeleter);

app.get('/employers', ucontrol.employersGetter);
app.post('/employers', ucontrol.employersPoster);
app.put('/employers', ucontrol.employersPutter);
app.delete('/employers', ucontrol.employersDeleter);

app.get('/employees', ucontrol.employeesGetter);
app.post('/employees', ucontrol.employeesPoster);
app.put('/employees', ucontrol.employeesPutter);
app.delete('/employees', ucontrol.employeesDeleter);

app.get('/availability', ucontrol.availabilityGetter);
app.post('/availability', ucontrol.availabilityPoster);
app.put('/availability', ucontrol.availabilityPutter);
app.delete('/availability', ucontrol.availabilityDeleter);

app.get('/assigned', ucontrol.assignedGetter);
app.post('/assigned', ucontrol.assignedPoster);
app.put('/assigned', ucontrol.assignedPutter);
app.delete('/assigned', ucontrol.assignedDeleter);



// LISTEN
// ============================================================
var port = config.PORT;
app.listen(port, function() {
  console.log('listening on port ', port);
});