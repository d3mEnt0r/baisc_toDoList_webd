const express = require("express");
const bodyParser = require("body-parser");

let items = [];
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static("public"));

app.get("/", function(req, res){

    let today = new Date();
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long",
        // year: "numeric"
    };
    let day = today.toLocaleDateString("en-IN", options);

    res.render("list", {bnm: day, newListItems: items});
});

app.post("/", function(req, res){
    let item = req.body.newItem;
    if(item!==""){
        items.push(item);
    }
    
    res.redirect("/");
});

app.listen(3000, function(){
    console.log("Dementor Reporting");
});