var path = require("path")
var express = require("express")
var ejs = require("ejs")

var app = express()

app.use(express.static( path.join(__dirname, 'dist') ));

app.engine('.html', require('ejs').__express);
app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'dist'));


app.get('/', (req, res)=>{
  res.render('index')
})

app.listen(3000)