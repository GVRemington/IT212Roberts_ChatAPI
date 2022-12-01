var express = require('express');
var router  = express.Router();

var data = [
    {id: 1, channel: "entertainment", user: "author", message: "first post"},
    {id: 2, channel: "stocks",        user: "author", message: "second post"},
    {id: 3, channel: "tech",          user: "author", message: "third post"} 
];

router.get('/:channel/', function(req, resp, next){
    console.log("entertainment");
    resp.send(data.filter((element) => {
        return element.channel == req.params.channel}));
});

router.get('/:channel/:id', function(req,res, next){
    var messages = data.filter((element) => {
        return element.channel == req.params.channel });
    res.send(messages.filter((element) => {
        return element.id == req.params.id})[0]);
});

router.put('/:channel/', function(req,res, next){
    var message = {
        user: req.body.user,
        message: req.body.message,
        id: data.length +1, //bad bad, no no bad dog!
        channel: req.params.channel
    };

    data.push(newMessage);
    res.statusCode = 201;
    res.send(data.filter((element) => {
        return element.channel == req.params.channel}));
});

router.post('/:id', function(req, res, next){
    var message = data.filter((element) => {
        return element.id == req.params.id})[0]; //why is this outside of parenthesis unlike on line 20
    var index = data.findIndex((element) => {
        return element == message});


if (message != undefined) {
    message.user = req.body.user;
    message.id   = req.params.id;
    message.channel = req.body.channel;
    message.message = req.body.message;

    data[index] = message;
}

res.send(message);
});

router.delete('/:id', function(req, res, next){
    var message = data.filter((element) => {
        return element.id == req.params.id})[0];
    
    data = data.filter((element) => {
        return element.id != req.params.id })
    
    res.send(message);
});

module.exports = router;