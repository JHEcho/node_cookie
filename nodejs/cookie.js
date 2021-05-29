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
			'HttpOnly=HttpOnly; HttpOnly', // javescript 에서는 접근할수 없다
			'Path=Path; Path=/cookie', //디렉토리와 그 아래에서만 기능한다
			'Doamin=Domain; Domain=o2.org', // 서브도메인까지 사용할수 있다
		]
	});

	response.end('Cookie!!');
}).listen(3000);