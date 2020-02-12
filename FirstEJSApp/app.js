const express = require('express');

const app = express();

app.get('/user/:id/:username', (req, res)=>{
    let userid = req.params.id;
    let user = req.params.username; 
    res.render('index.ejs', {id : userid, username : user});
});

app.listen(4000, ()=>{
    console.log('Server started at port 4000.');
});