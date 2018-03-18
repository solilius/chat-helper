var express = require('express');
var http = require('http');

var app = express();

// config app to use post api
// app.use( bodyParser.json());
// app.use( bodyParser.options());aa
app.use(express.static(__dirname + "/src"));

// app.use(bodyParser.urlencoded({extended: false}));
// app.use(cors());

// create the server
var server = http.createServer(app);

app.use(express.static(__dirname + "/src"));

// listen for requests
server.listen(8080, null, null, function () {
    console.log("Express server listening on port 8080");
});
