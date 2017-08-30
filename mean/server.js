const express = require('express');
const bodyParser = require('body-parser');
const path = require ('path');
const http = require ('http');
const app = express();

//Interacting with mongo DB
const mongapi = require('./server/routes/api');

// const mongapi1 = require('./server/routes/api1');


// const mongapi2 = require('./server/routes/api2');

//Parsers

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Angular DIST output folder
app.use(express.static(path.join(__dirname, 'dist')));

// API location
// app.use('/api2', mongapi2);

//app.use('/api1', mongapi1);

app.use('/api', mongapi);
http://localhost:3000/api
// Send all other requests to the Angular app
app.get('index', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

//Set Port
const port = process.env.PORT || '3001';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`Running on localhost:${port}`));


//hapi
// const express = require('express');
// const bodyParser = require('body-parser');
// const Path=require('path');
// var Hapi = require('hapi');
// var server = new Hapi.Server();
// var mysql= require('mysql');
// var http = require("http");
// server.connection({ port: 3001 });
// const app = express();
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: false}));

// // // Angular DIST output folder
// app.use(express.static(path.join(__dirname, 'dist')));


// app.get('index', (req, res) => {
//         res.sendFile(path.join(__dirname, 'dist/index.html'));
//     });

// const port = process.env.PORT || '3001';
// app.set('port', port);

// const mainserver = http.createServer(app);

// mainserver.listen(port, () => console.log(`Running on localhost:${port}`));

// server.route({
//     method: 'GET',
//     path: '/products',
//     handler: function (req, res){
    
//     var store ='{"products":[';
//     var mysql = require('mysql');
//     var connection = mysql.createConnection({
//         host:'localhost',
//         user:'root',
//         pass:'',
//         database:'gstapp'
//     });
    
//     connection.connect();
    
//     connection.query('SELECT `Name`, `Prize`, `Gst`, `Quandity`, `Pcode` FROM `product`;', function (err, rows, fields) {
//       if (err) throw err;
//       var len=6;
//           for(i=0;i<len;i++)
//               {
//               store = store + JSON.stringify({pid:rows[i].Pcode, Name:rows[i].Name, Prize: rows[i].Prize, Gst: rows[i].Gst,Quandity:rows[i].Quandity});
//               if(i!=len-1)
//                   {
//               store=store+',';
//                   }
//               }
//               store=store+']}';
//               //store= store + JSON.stringify(objs);
//             console.log(store);
//               /*res.setHeader("Content-Type", "text/json");
//               res.setHeader("Access-Control-Allow-Origin", "*");
//               res.end(store)*/
//               res(store);
      
//     });
    
//     connection.end();
// }
// });


// server.start(function(){
//     console.log('hapi started');
// });

// module.exports = server;
