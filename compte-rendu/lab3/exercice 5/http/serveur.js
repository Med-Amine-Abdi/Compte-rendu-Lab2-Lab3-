var http = require("http");
var server = http.createServer(function(req, res) {
res.writeHead(200, {"Content-Type": "text/html"});
res.end(`
<!DOCTYPE html>
<html>
<head>
</head>
<body>
<title>HTML Response</title>
<h1>Serving HTML Text</h1>
<p>${req.url}</p>
<p>${req.method}</p>
</html>
</body>
`);
});
server.listen(3000);
console.log("Server listening on port 3000");