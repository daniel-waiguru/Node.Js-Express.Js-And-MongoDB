const express = require('express');
const app = express();

const path = require('path');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/birthdays', (req, res)=>{
    let birthdays = [
        {name : 'Danny', date : '12', month : 'February', year : '1997'},
        {name : 'Ken', date : '24', month : 'January', year : '1999'},
        {name : 'Mercy', date : '19', month : 'September', year : '2002'}
    ];

    res.render('index', {birthdays:birthdays});
});

app.listen(4000, ()=>{
    console.log('Server started at port 4000.');
});