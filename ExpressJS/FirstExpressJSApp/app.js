const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    res.send('<a href="/contact">Contact Us</a>');
})
app.get('/services', (req, res)=>{
    res.send('<h1>Services We Offer Include:</h1>')
})
app.get('/aboutus', (req, res)=>{
    res.send('<h1>About Us Page:</h1>')
})

app.get('/contact', (req, res)=>{
    res.send('<h1>Contact Us Page</h1>');
})

app.listen(4000, ()=>{
    console.log('Server started on port 4000.')
})