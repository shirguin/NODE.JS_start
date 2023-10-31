const route = (handle, pathname, response) => {
  console.log(`Собираюсь направить запрос на ${pathname}`);
  if (typeof handle[pathname] === "function") {
    return handle[pathname](response);
  } else {
    console.log(`Не найден обработчик запроса для ${pathname}`);
    response.writeHead(404, { "Content-Type": "text/plain" });
    response.write("404 Not found");
    response.end();
  }
};

exports.route = route;
