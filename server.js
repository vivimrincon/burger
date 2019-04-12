const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

const expresshandlebars = require('express-handlebars');
const controlroutes = require('./controllers/burgers_controller');

/* server.js starts a server and listens on port 8080 for connections. 
The app responds with the html&css in public directory created as handlebars,
then for requests to the root URL(s) ('/burgers') located on the controlroutes module.
For every other path, it will respond with a 404 Not Found.
*/

// Static content... public directory
app.use(express.static(__dirname + 'public'));

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.engine('handlebars', expresshandlebars({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(controlroutes);

app.listen(PORT, ()=> console.log(`Now listening to port http://localhost:${PORT}`));