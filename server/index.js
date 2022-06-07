const jsonServer = require('json-server');
const path = require('path');

const server = jsonServer.create(); // json-server 가져옴
const router = jsonServer.router(path.join(__dirname + '/db.json'));
const middlewares = jsonServer.defaults({
  static: path.resolve(__dirname + '/../build/'),
});

const port = process.env.PORT || 8800;

server.use(middlewares);

server.use(jsonServer.bodyParser);

server.use(router);
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
