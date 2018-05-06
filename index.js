var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var RiveScript = require("rivescript");
var bot = new RiveScript();

bot.loadDirectory("brain");

app.use(express.static('assets'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
  socket.on('chat message', function (msg) {
    bot.sortReplies();

    // And now we're free to get a reply from the brain!
    console.log("Input received: " + msg);
    var reply = bot.reply("local-user", msg);
    io.emit('chat message', reply);
    console.log("Bot response: " + reply);
  });
});

http.listen(3000, function () {
  console.log('Started listening on *:3000');
});