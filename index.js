http = require('http');

server = http.createServer(function(req, resp) {
	resp.setHeader("Content-Type", "text/plain");
	resp.end("Hello World\n");
});

server.listen("/tmp/nginx.socket", 128);
