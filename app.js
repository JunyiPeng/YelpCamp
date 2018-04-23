var express = require('express');
var app = express();
var bodyParser = require("body-parser");
app.set("view engine", "ejs");
app.get("/", function(req, res) {
    res.render("landing");
});
app.use(bodyParser.urlencoded({extended: true}));

var campgrounds = [
    {name: "Beach lifeguard", image: "http://images2.pics4learning.com/catalog/s/thumb_big/saltcreekdaycamp_thumb_big.jpg"},
    {name: "Army camp officer's row", image: "http://images2.pics4learning.com/catalog/b/thumb_big/bb011_thumb_big.jpg"},
    {name: "Camp Fire", image: "http://images2.pics4learning.com/catalog/2/thumb_big/2009flames_thumb_big.jpg"},
    {name: "Roaring Camp Railroad", image: "http://images2.pics4learning.com/catalog/r/thumb_big/rcrr031_thumb_big.jpg"},
    {name: "Beach lifeguard", image: "http://images2.pics4learning.com/catalog/s/thumb_big/saltcreekdaycamp_thumb_big.jpg"},
    {name: "Army camp officer's row", image: "http://images2.pics4learning.com/catalog/b/thumb_big/bb011_thumb_big.jpg"},
    {name: "Camp Fire", image: "http://images2.pics4learning.com/catalog/2/thumb_big/2009flames_thumb_big.jpg"},
    {name: "Roaring Camp Railroad", image: "http://images2.pics4learning.com/catalog/r/thumb_big/rcrr031_thumb_big.jpg"},
    {name: "Beach lifeguard", image: "http://images2.pics4learning.com/catalog/s/thumb_big/saltcreekdaycamp_thumb_big.jpg"},
    {name: "Army camp officer's row", image: "http://images2.pics4learning.com/catalog/b/thumb_big/bb011_thumb_big.jpg"},
    {name: "Camp Fire", image: "http://images2.pics4learning.com/catalog/2/thumb_big/2009flames_thumb_big.jpg"},
    {name: "Roaring Camp Railroad", image: "http://images2.pics4learning.com/catalog/r/thumb_big/rcrr031_thumb_big.jpg"},
    {name: "Beach lifeguard", image: "http://images2.pics4learning.com/catalog/s/thumb_big/saltcreekdaycamp_thumb_big.jpg"},
    {name: "Army camp officer's row", image: "http://images2.pics4learning.com/catalog/b/thumb_big/bb011_thumb_big.jpg"},
    {name: "Camp Fire", image: "http://images2.pics4learning.com/catalog/2/thumb_big/2009flames_thumb_big.jpg"},
    {name: "Roaring Camp Railroad", image: "http://images2.pics4learning.com/catalog/r/thumb_big/rcrr031_thumb_big.jpg"}

];

app.get("/campgrounds", function(req, res) {
    res.render("campgrounds", {campgrounds: campgrounds});
});

app.post("/campgrounds", function(req,res) {
    //adding new camp to database
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image};
    campgrounds.push(newCampground);
    //redirecting to campgrounds
    res.redirect("/campgrounds");
});

app.get("/campgrounds/addNewCampGround", function (req, res) {
    res.render("addNewCampGround");
});
app.listen(8000, function() {
    console.log("YelpCamp Server Has Started!!!");
})