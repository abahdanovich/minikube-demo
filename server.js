var http = require('http');

const hostname = '0.0.0.0';
const port = 8080;

var handleRequest = function(request, response) {
  console.log('Received request for URL: ' + request.url);
  response.writeHead(200);
  response.end('Hello World!');
};

var www = http.createServer(handleRequest);
www.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
  console.log(`This process is pid ${process.pid}`);
});

process.on('SIGTERM', () => {
  console.info('SIGTERM signal received.');
  www.close(() => {
    console.log('Process terminated')
  })
});

process.on('SIGINT', () => {
  console.info('SIGINT signal received.');
  www.close(() => {
    console.log('Process terminated')
  })
});
