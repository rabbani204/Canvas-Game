var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
       console.log('Request Has Submitted: ' + req.url);

        if( req.url ==='/home' || req.url==='/'){
           res.writeHead(200, {'content-type': 'text/html'});
           fs.createReadStream(__dirname + '/index.html').pipe(res);
        }

        else if (req.url ==='/Contact') {
            res.writeHead(200, {'Content-Type': 'text/html'});
            fs.createReadStream(__dirname + '/contact.html').pipe(res);
        }


        else if(  req.url ==='/api/ninja'){
          res.writeHead(200, {'content-type': 'aplication/json'});
          var myObj = [{
            Name : "Rabbani",
            Profession : "Student",
            Age : 23
          },
          {
            Name: "Rashed",
            Profession: "Muchi",
            Age :23
          }
        ];

          res.end(JSON.stringify(myObj));
        }


        else{
          res.writeHead(404, {'Content-Type': 'text/html'});
          fs.createReadStream(__dirname + '/404.html').pipe(res);
        }

});


server.listen('3000', '127.0.0.1');
console.log('the server is running on port 3000');