import express from 'express';
var app=express();
app.use(express.static('public'));
app.get('/players/:lang/:name',function(req,res){
    
   
    res.write("name="+req.params.name);
    res.end("lang="+req.params.lang);
    
});
var port=process.env.PORT || 4000;
app.listen(port,function(){
  console.log("server is listening on port:"+ port);
});