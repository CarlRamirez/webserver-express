const express = require('express')
const app = express()
const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;
app.use(express.static(__dirname + '/public'));
//HBS express engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

app.get('/', function(req, res) {
    //     //res.send('hola mundo')
    //     let salida = {
    //         nombre: 'carlos',
    //         edad: 26,
    //         url: req.url
    //     }
    res.render('home', {
        nombre: 'caRlos xd'
    })
});
app.get('/about', function(req, res) {
    res.render('about', {})
});
app.listen(port, () => {
    console.log(`escuchando peticiones en el puerto ${port}`);
});