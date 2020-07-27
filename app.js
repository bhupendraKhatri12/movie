
var express = require('express');
var app = express();
var request = require('request');
app.set('view engine', 'ejs');


app.get('/',function(req,res){

res.render("search");


});


app.get('/request',function(req,res){



     var query =req.query.search;
     var year = req.query.year;
      var url = 'http://www.omdbapi.com/?apikey=af061190&s=' + query +'&y=' + year;

    request(url,function(error,response,body){
    
    
    if(!error && response.statusCode == 200)
    {
    
    
    
        var frank =JSON.parse(body);
        res.render("results", {frank : frank});    
    }
     
    
    });
    

});


app.listen('3000',function(){

    console.log('Server Started');
});

