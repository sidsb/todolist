//jshint esversion:6
const express=require('express');
const bodyParser=require('body-parser');


const app=express();
var today=new Date();
var items=['Buy Food'];

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.set('view engine','ejs');
var currentDay=today.getDay();


app.get("/",function(req,res){
  var options={
    weekday:"long",
    day:"numeric",
    month:"long"
  };
  var day=today.toLocaleDateString("en-US",options);
  res.render("index",{Day: day,newlisItems:items});
});

app.post("/",function(req,res){
  console.log(req.body.newItem);
  var item=req.body.newItem;
  items.push(item);

  res.redirect("/");
})


app.listen(3000,function(){
  console.log('server at 3000');
});
