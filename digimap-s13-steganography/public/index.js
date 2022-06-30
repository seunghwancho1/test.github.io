// IMPORTS
const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const handlebars = require('handlebars');
const session = require('express-session');
const { envPort, sessionKey } = require('./config');

// EXPRESS APP
const app = express();
const port = envPort || 3000;

app.set('views', path.join(__dirname, 'views'));

// ENGINE SET-UP
app.engine( 'hbs', exphbs({
    extname: 'hbs',
    defaultView: 'main',
    layoutsDir: path.join(__dirname, '/views/layouts'),
    helpers: {
        incremented: function(index) {
            index++;
            return index;
        }
    }
  }));

  app.set('view engine', 'hbs');


// STATIC FILES  
app.use(express.static('public'));

// HOMEPAGE = HIDING IMAGES PAGE
app.get('/', function(req, res) {
    res.render('index', {
    // for HidingImages.hbs
        tab_title: "Hiding Images"
    });
});

// UNHIDING IMAGES PAGE
app.get('/unhiding-images', function(req, res) {
    res.render('index', {
    // for UnhidingImages.hbs
        tab_title: "Unhiding Images"
    });
});

// LISTENER
app.listen(process.env.PORT, function() {
    console.log('App listening at port '  + process.env.PORT);
  });