http = require('http');
util = require('util');

server = http.createServer(function(req, resp) {
	time = new Date();
	resp.setHeader("Content-Type", "text/plain");
	resp.end(util.format("Hello World. The time is now: %s", time));
});

server.listen("/home/deploy/var/socket/nginx.socket", 128);
