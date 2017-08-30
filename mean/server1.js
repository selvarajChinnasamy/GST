var Hapi = require('hapi');
var server = new Hapi.Server();
var mysql= require('mysql');
var http = require("http");
server.connection({ port: 3005 });
server.route({
    method: 'GET',
        path: '/products',
      handler: (req, res) => {
        var store ='{"products":[';
        var mysql = require('mysql');
        var connection = mysql.createConnection({
            host:'localhost',
            user:'root',
            pass:'',
            database:'gstapp'
        });
        
        connection.connect();
        
        connection.query('SELECT `Name`, `Price`, `Gst`, `Quantity`, `Pcode` FROM `product`;', function (err, rows, fields) {
          if (err) throw err;
          var len=2;
              for(i=0;i<len;i++)
                  {
                  store = store + JSON.stringify({pid:rows[i].Pcode, Name:rows[i].Name, Price: rows[i].Price, Gst: rows[i].Gst,Quantity:rows[i].Quantity});
                  if(i!=len-1)
                      {
                  store=store+',';
                      }
                  }
                  store=store+']}';
                  //store= store + JSON.stringify(objs);
                console.log(store);
                //   res.setHeader("Content-Type", "text/json");
                //   res.setHeader("Access-Control-Allow-Origin", "*");
                //   res.end(store)
                  res(store).header("Content-Type", "text/json")
                  .header("Access-Control-Allow-Origin", "*");
          
        });
        
        connection.end();
}
});

server.start(function(){
    console.log('hapi started');
});

module.exports = server;
