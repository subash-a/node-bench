var smtp = require("smtp-server");
var fs = require("fs");
var smtpOptions = {
	secure: true,
	banner: "Hello and Welcome to Subhash's Mail Server",
	onAuth: (e) => console.log(e),
	onConnect: (v) => console.log(v),
	onData: (d) => console.log(d),
	key: fs.readFileSync("private.key"),
	cert: fs.readFileSync("server.cert")
};

var server = new smtp.SMTPServer(smtpOptions).listen(465);
