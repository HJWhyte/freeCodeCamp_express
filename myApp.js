let express = require('express');
let app = express();

// #1
console.log("Hello World"); 

// absolutePath = __dirname + '/views/index.html'

//#2
// app.get('/', function(req,res) {
//   res.send('Hello Express')
// })

// #3
app.get('/', function(req,res) {
  res.sendFile (__dirname + '/views/index.html')
});

// #4
app.use('/public', (express.static(__dirname + '/public')));

 // #7
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path} - ${req.ip}`)
  next()
});

// #5 & 6
app.get('/json', function(req,res) {
  if (process.env.MESSAGE_STYLE == 'uppercase') {
    res.json({"message" : "HELLO JSON"}) 
  }
  else {
    res.json({"message" : "Hello json"})
  }
});

// #8 
app.get('/now', function(req,res,next) {
  req.time = new Date().toString();
  next()
}, function(req,res) {
  res.json({time: req.time});
});

// #9
app.get('/:word/echo', function(req,res) {
  console.log(req.params)
  const {word}  = req.params;
  res.json({echo: word});
});

// #10 
app.route('/name').get(function(req,res) {
    let {first, last} = req.query
    res.json({ "name": `${first} ${last}`})
})
  
  
  





























 module.exports = app;































 module.exports = app;
