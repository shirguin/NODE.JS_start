const http = require("http");
const url = require("url");

function start(route) {
  const server = http.createServer((request, response) => {
    let pathname = url.parse(request.url).pathname;
    console.log(`Запрос для ${pathname} получен.`);
    route(pathname);

    response.writeHead(200, { "Content-Type": "text/plain" });
    response.write("Hello World");
    response.end();
  });

  server.listen(8888);
  console.log("Сервер запущен.");
}

exports.start = start;
