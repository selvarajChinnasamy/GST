const express = require('express');
const router = express.Router();
var mysql= require('mysql');
var http = require("http");

// Connect
var con = mysql.createConnection({
    host:'localhost',
    user:'root',
    pass:'',
    database:'gstapp'
   });
   

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
router.post('/usersadd', (req, res) => {

    var name=req.body.name;
    var prize=req.body.prize;
    var code=req.body.code;
    var pgst=req.body.gst;


    console.log(name);
    console.log(prize);
    console.log(code);
    console.log(pgst);


    /*var store ='{"employees":[';
    con.connect(function(err){
        if(err)throw err;
         console.log("Connected");
         con.query("SELECT `Name`, `pid`,`count` FROM `sales` order by `count` desc;",function(err,rows,fields){
        if(err)throw err;
       // console.log(rows[0].id);
        var len=6;
        for(i=0;i<len;i++)
            {
            store = store + JSON.stringify({pid:rows[i].pid, Name:rows[i].Name,Quandity:rows[i].count});
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
        });*/

});

module.exports = router;
