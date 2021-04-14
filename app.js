const express   = require('express');
const app       = express();
const http      = require('http');
const server    = http.createServer(app);
const io        = require('socket.io')(server);

const LISTENING_PORT = 8080;

server.listen(LISTENING_PORT);

app.use(express.static(__dirname + '/public'));

console.log('Listening on port: ' + LISTENING_PORT);


//our routes
app.get( '/', function( req, res ){ 
    res.sendFile( __dirname + '/public/index.html' );
});


app.get( '/', function( req, res ){ 
    res.sendFile( __dirname + '/public/Room1.html' );
});

app.get( '/', function( req, res ){ 
    res.sendFile( __dirname + '/public/Room2.html' );
});

app.get( '/', function( req, res ){ 
    res.sendFile( __dirname + '/public/Room3.html' );
});

app.get( '/', function( req, res ){ 
    res.sendFile( __dirname + '/public/Room4.html' );
});

app.get( '/', function( req, res ){ 
    res.sendFile( __dirname + '/public/Intro.html' );
});

app.get( '/', function( req, res ){ 
    res.sendFile( __dirname + '/public/Outro.html' );
});

const rooms = {};

//socket.io stuff
io.on('connection', (socket) => {

    console.log( socket.id + " connected" );
    console.log("user connected", socket.id);

    socket.on('disconnect', () => {
        console.log( socket.id + " disconnected" );
    });


    socket.on("add-ui", (data) => {
        console.log( "add ui for letter clue" );
        io.sockets.emit("ui_added");
    });

    socket.on("clue1-spin", (data) => {
        console.log( "clue 1 is spinning" );
        io.sockets.emit("clue1_spinning");
    });

    socket.on("add-ui2", (data) => {
        console.log( "add ui for second clue" );
        io.sockets.emit("ui2_added");
    });

    socket.on("clue2-spin", (data) => {
        console.log( "clue 2 is spinning" );
        io.sockets.emit("clue2_spinning");
    });
 
    socket.on("add-ui3", (data) => {
        console.log( "add ui for third clue" );
        io.sockets.emit("ui3_added");
    });

    socket.on("clue3-spin", (data) => {
        console.log( "clue 3 is spinning" );
        io.sockets.emit("clue3_spinning");
    });

    socket.on("add-ui4", (data) => {
        console.log( "add ui for fourth clue" );
        io.sockets.emit("ui4_added");
    });

    socket.on("clue4-spin", (data) => {
        console.log( "clue 4 is spinning" );
        io.sockets.emit("clue4_spinning");
    });

    socket.on("false-clue", (data) => {
        console.log( "false clue 1 picked up" );
        io.sockets.emit("falseclue1_picked");
    });

    socket.on("false-clue2", (data) => {
        console.log( "false clue 2 picked up" );
        io.sockets.emit("falseclue2_picked");
    });

    socket.on("false-clue3", (data) => {
        console.log( "false clue 3 picked up" );
        io.sockets.emit("falseclue3_picked");
    });

    socket.on("false-clue4", (data) => {
        console.log( "false clue 4 picked up" );
        io.sockets.emit("falseclue4_picked");
    });

    socket.on("false-clue5", (data) => {
        console.log( "false clue 5 picked up" );
        io.sockets.emit("falseclue5_picked");
    });

    socket.on("false-clue6", (data) => {
        console.log( "false clue 6 picked up" );
        io.sockets.emit("falseclue6_picked");
    });

    socket.on("false-clue7", (data) => {
        console.log( "false clue 7 picked up" );
        io.sockets.emit("falseclue7_picked");
    });

    socket.on("false-clue8", (data) => {
        console.log( "false clue 8 picked up" );
        io.sockets.emit("falseclue8_picked");
    });

    socket.on("question-btn", (data) => {
        console.log( "show question button" );
        io.sockets.emit("question_show");
    });

    socket.on("next", (data) => {
        console.log( "go to question 2" );
        io.sockets.emit("next_question");
    });

    socket.on("next2", (data) => {
        console.log( "go to question 3" );
        io.sockets.emit("next_question2");
    });

    socket.on("next3", (data) => {
        console.log( "go to question 4" );
        io.sockets.emit("next_question3");
    });

    socket.on("correct", (data) => {
        console.log( "question 1 right asnwer selected" );
        io.sockets.emit("question1_correct");
    });

    socket.on("correct2", (data) => {
        console.log( "question 2 right asnwer selected" );
        io.sockets.emit("question2_correct");
    });

    socket.on("correct3", (data) => {
        console.log( "question 3 right asnwer selected" );
        io.sockets.emit("question3_correct");
    });

    socket.on("correct4", (data) => {
        console.log( "question 4 right asnwer selected" );
        io.sockets.emit("question4_correct");
    });

    socket.on("transition1", (data) => {
        console.log( "transition page 1" );
        io.sockets.emit("transition_room");
    });

    socket.on("room2", (data) => {
        console.log( "transition to room 2" );
        io.sockets.emit("room2_transition");
    });

    socket.on("wrong", (data) => {
        console.log( "question answered incorrectly" );
        io.sockets.emit("wrong_answer");
    });

    console.log("user connected", socket.id);

  let curRoom = null;

  socket.on("joinRoom", data => {
    const { room } = data;

    if (!rooms[room]) {
      rooms[room] = {
        name: room,
        occupants: {},
      };
    }

    const joinedTime = Date.now();
    rooms[room].occupants[socket.id] = joinedTime;
    curRoom = room;

    console.log(`${socket.id} joined room ${room}`);
    socket.join(room);

    socket.emit("connectSuccess", { joinedTime });
    const occupants = rooms[room].occupants;
    io.in(curRoom).emit("occupantsChanged", { occupants });
  });

  socket.on("send", data => {
    io.to(data.to).emit("send", data);
  });

  socket.on("broadcast", data => {
    socket.to(curRoom).emit("broadcast", data);
  });

  socket.on("disconnect", () => {
    console.log('disconnected: ', socket.id, curRoom);
    if (rooms[curRoom]) {
      console.log("user disconnected", socket.id);

      delete rooms[curRoom].occupants[socket.id];
      const occupants = rooms[curRoom].occupants;
      socket.to(curRoom).emit("occupantsChanged", { occupants });

      if (occupants == {}) {
        console.log("everybody left room");
        delete rooms[curRoom];
      }
    }
  });


});