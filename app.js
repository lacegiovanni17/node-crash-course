const express = require('express');

//express app
const app = express();

//register view engine
app.set('view engine', ejs);



app.get('/', (req, res) => {
    res.render('index');
});

app.get('/about', (req, res) => {
    res.render('about');
})

//redirects
app.get('/blogs/create', (req, res) => {
    res.render('create');
})

//404 page
app.use((req, res) => {
    res.status(404).render('404');
});



//listen for requests
app.listen(3000);