const express = require('express');
const app = express();
const http = require('http');
const path = require('path');
const socketio = require('socket.io');
const cors = require('cors')

const server = http.createServer(app);
const io = socketio(server, {
    cors: {
      origin: true,
      methods: ['GET', 'POST'],
      allowedHeaders: ['Content-Type'],
      credentials: true,
    },
});

const PORT = process.env.PORT || 8009;

app.use(cors({
    origin: true, 
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
    credentials: true,
  }));
app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

io.on('connection', (socket) => {
  console.log(`New connection: ${socket.id}`);
  socket.on('send-location', (data) => {
    io.emit('receive-location', { id: socket.id, ...data });
  });
  console.log('Connected');

  socket.on('user-selected', (data) => {
    io.emit('selection-updated', data);
  });

  socket.on('disconnect', () => {
    io.emit('user-disconnected', socket.id);
  });
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
