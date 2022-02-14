const app = require('express')();
const cors = require('cors');
const http = require('http').createServer(app);

const io = require('socket.io')(http, {
  origin: 'http://localhost:3001',
  methods: ['POST', 'GET'],
});

app.use(cors());

io.on('connection', (socket) => {
  socket.on('click',({ state }) => { console.log( state )
  
    io.emit('jogou', state);
  });

});

const PORT = 3002

http.listen(PORT, () => console.log(`Example app listening on PORT ${PORT}!`))