const express = require('express');
const app = express();

/*
An example to handle route parameters of codeproject site for Q&A
https://www.codeproject.com/Articles/43438/Connect-C-to-MySQL
*/

app.get('/Articles/:id/:title/', (req, res)=>{
    res.send('This route handles all the questions');
});


/*
Handles code project members profiles
*/
app.get('/Members/:username', (req, res)=>{
    let user = req.params.username;
    res.send('This route handles codeproject members profile');
});


app.listen(4000, ()=>{
    console.log('Server started at port 4000.');
});
