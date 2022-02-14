const app = require('express')();
const cors = require('cors');
const http = require('http').createServer(app);

const io = require('socket.io')(http, {
  origin: 'http://localhost:3000',
  methods: ['POST', 'GET'],
});

app.use(cors());

io.on('connection', (socket) => {
  soket.on('click',() => {

  });
});

const PORT = 3001

http.listen(PORT, () => console.log(`Example app listening on PORT ${PORT}!`))