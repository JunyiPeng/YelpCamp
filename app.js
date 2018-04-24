var express = require('express');
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/yelp_camp");
app.set("view engine", "ejs");
app.get("/", function(req, res) {
    res.render("landing");
});
app.use(bodyParser.urlencoded({extended: true}));

var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

// INDEX - show all campgrounds
app.get("/campgrounds", function(req, res) {
    Campground.find({}, function (err, allCampgrounds) {
        if (err) {
            console.log("ERROR TO FIND CAMPGROUND");
        } else {
            res.render("index", {campgrounds: allCampgrounds});
        }
    })
});

//CREATE - add new campground to DB
app.post("/campgrounds", function(req,res) {
    //adding new camp to database
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description;
    var newCampground = {name: name, image: image, description: desc};
    Campground.create(newCampground, function(err, newcampground) {
        if (err) {
            console.log("ERROR TO CREATE A CAMPGROUND");
        } else {
            console.log(newcampground);
            //redirecting to campgrounds
            res.redirect("/campgrounds");
        }
    })

});

//NEW - show form to create new campground
app.get("/campgrounds/add", function (req, res) {
    res.render("new");
});

//SHOW - shows more infor about one campground
app.get("/campgrounds/:id", function(req, res) {
    Campground.findById(req.params.id, function(err, foundCampground) {
        if (err) {
            console.log("ERROR, Cant find more information");
        } else {
            res.render("show", {campground: foundCampground});
        }
    })
})


app.listen(8000, function() {
    console.log("YelpCamp Server Has Started!!!");
})