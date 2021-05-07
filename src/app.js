const express = require('express');
const dotenv = require('dotenv');
const app = express();
const router= require('./Route');
const morgan = require('morgan');
const path = require('path')
const hbs = require('express-handlebars')

//database
require('./DataBase')
//settings handlebars
app.set('views', path.join(__dirname, 'views'))

app.engine('.hbs', hbs({
    defaultLayout: 'main',
    layoutsDir:path.join(app.get('views'),'layouts'),
    partialsDir:path.join(app.get('views'),'partials'),
    extname: '.hbs'
}))

app.set('view engine', '.hbs')
//middlewares
app.use(morgan('dev'))
app.use(express.json())
//Route and Controllers
app.use(router)


app.listen(3000, ()=> console.log('Server running in port 3000'));

//app.listen(3000, () => console.log('Server running in port 3000'));