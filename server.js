const http = require("http");
const url = require("url");

function start(route, handle) {
  const server = http.createServer((request, response) => {
    let pathname = url.parse(request.url).pathname;
    console.log(`Запрос для ${pathname} получен.`);

    route(handle, pathname, response);
  });

  server.listen(8888);
  console.log("Сервер запущен.");
}

exports.start = start;
