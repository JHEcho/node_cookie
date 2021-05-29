var http = require('http');
var cookie = require('cookie');
http.createServer(function (request, response) {
	console.log(request.headers.cookie);
	var cookies = {};
	if (request.headers.cookies != undefined) {
		cookies = cookie.parse(request.headers.cookie);
	}
	console.log(cookies.yummy_cookie)
	response.writeHead(200, {
		'Set-Cookie': [
			'yummy_cookie=choco',
			'tasty_cookie=strawberry'
			`Permanent=cookies; Max-Age=${60 * 60 * 24 * 30}`, // 설정한 날짜까지 지속
			'Secure=Secure; Secure', //https 일때만 전송한다.
			'HttpOnly=HttpOnly; HttpOnly' // javescript 에서는 접근할수 없다
		]
	});

	response.end('Cookie!!');
}).listen(3000);