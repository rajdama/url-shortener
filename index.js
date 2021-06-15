const express = require('express');
const app = express();
const path = require('path');
const shortUrl = require('node-url-shortener');
let port = 80;

//EXPRESS RELATED STUFF
app.use('/static', express.static('static'));//Serving the static files
app.use(express.urlencoded());

//PUG RELATED STUFF
app.set('view engine', 'pug');// Set the template engine as pug
app.set('views', path.join(__dirname, 'views'));//Set the view/template directory (we could also do this without path module)

//ENDPOINTS
app.get('/myurl', (req, res) => {
    if(!req.query.url){
        return res.send({error:'Enter url'})
    }
    shortUrl.short(req.query.url, function (err, url) {
        console.log(url);
        res.send({url_shortened:url})});
})
app.post('/myurl', (req, res) => {
    if(!req.query.url){
        return res.send({error:'Enter url'})
    }
    shortUrl.short(req.query.url, function (err, url) {
        console.log(url);
        res.send({url_shortened:url})});
})
app.get('/',(req,res)=>{
    res.render('index')
})
//START THE SERVER

app.listen(port, () => {
    console.log(`The application is started successfully on port ${port} click on http://127.0.0.1:${port}`)
})