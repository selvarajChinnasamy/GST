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
    var code=req.body.id;
    var pgst=req.body.gst;
    var quantity=req.body.quandity;


    console.log(name);
    console.log(prize);
    console.log(code);
    console.log(pgst);
    console.log(quantity);

 con.connect(function (err) {
 if(err) throw err;
 var sql="INSERT INTO `product`(`Name`, `Prize`, `Gst`, `Quandity`, `Pcode`) VALUES ('"+name+"','"+prize+"','"+pgst+"','"+quantity+"','"+code+"')";
 con.query(sql,function (err,result) {
 if(err) throw  err;
 //res.send(result);
 console.log(result);
});
});

});

module.exports = router;
