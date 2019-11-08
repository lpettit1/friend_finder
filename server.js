var express = require ('express');
var path = require ('path');
var bodyParser = ('bodyParser');

var app = express();
var PORT = process.env.PORT || 491;
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(bodyParser.text());

require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);


app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
})