const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const port = process.env.PORT || 4001;
//const index = require("./routes/index");
const cors = require('cors');
const app = express();
//app.use(index);
const server = http.createServer(app);

// server-side
const io = socketIo(server, {
  cors: {
      origins: port
  }
});

//temp object
const response = {
  time: (Math.random() * 9).toFixed(0) +'m',
  expdate: convertDate(new Date()),
  atm: (Math.random() * 100).toFixed(2),
  drr25: (Math.random() * 1000).toFixed(2),
  drr10: (Math.random() * 1000).toFixed(2),
  dbf25: (Math.random() * 1000).toFixed(2),
  dbf10: (Math.random() * 1000).toFixed(2),
};

let interval;

io.on("connection", (socket) => {
  console.log("New client connected");
  if (interval) {
    clearInterval(interval);
  }
  interval = setInterval(() => getApiAndEmit(socket), 1000);
  socket.on("disconnect", () => {
    console.log("Client disconnected");
    clearInterval(interval);
  });
});

function convertDate(inputFormat) {
  function pad(s) {
    return s < 10 ? '0' + s : s
  }
  var d = new Date(inputFormat)
  return [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear()].join(
    '-'
  )
}
const getApiAndEmit = (socket) => {

  // Emitting a new message. Will be consumed by the client
  socket.emit('rrbf', response);
};



server.listen(port, () => console.log(`Listening on port ${port}`));