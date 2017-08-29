const express = require('express');
const router = express.Router();
var mysql= require('mysql');
var http = require("http");

// Connect

   

// Error handling
const sendError = (err, res) => {
    response.status = 501;
    response.message = typeof err == 'object' ? err.message : err;
    res.status(501).json(response);
};

// Response handling
let response = {
    status: 200,
    data: [],
    message: null
};


// Get users
router.get('/products', (req, res) => {
    var store ='{"products":[';
    var mysql = require('mysql');
    var connection = mysql.createConnection({
        host:'localhost',
        user:'root',
        pass:'',
        database:'gstapp'
    });
    
    connection.connect();
    
    connection.query('SELECT `Name`, `Prize`, `Gst`, `Quandity`, `Pcode` FROM `product`;', function (err, rows, fields) {
      if (err) throw err;
      var len=6;
          for(i=0;i<len;i++)
              {
              store = store + JSON.stringify({pid:rows[i].Pcode, Name:rows[i].Name, Prize: rows[i].Prize, Gst: rows[i].Gst,Quantity:rows[i].Quandity});
              if(i!=len-1)
                  {
              store=store+',';
                  }
              }
              store=store+']}';
              //store= store + JSON.stringify(objs);
            console.log(store);
              res.setHeader("Content-Type", "text/json");
              res.setHeader("Access-Control-Allow-Origin", "*");
              res.end(store)
      
    });
    
    connection.end();
    
});

router.post('/update', (req, res) => {
    console.log('asdfgh');
    var name='';
    var price='';
    var quantity='';
    var gst='';
    var code='';
    var mysql = require('mysql');
    var connection = mysql.createConnection({
        host:'localhost',
        user:'root',
        pass:'',
        database:'gstapp'
    });
    connection.connect();
    var sql="UPDATE `product` SET `Name`="+name+",`Prize`="+price+",`Gst`="+gst+",`Quandity`="+quantity+" WHERE `Pcode`="+code;
    connection.query(sql, function (err, rows, fields) {
      if (err) throw err;   
      res.send('Success');   
    });
    connection.end();   
});
    
module.exports = router;
