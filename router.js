const route = (handle, pathname) => {
  console.log(`Собираюсь направить запрос на ${pathname}`);
  if (typeof handle[pathname] === "function") {
    return handle[pathname]();
  } else {
    console.log(`Не найден обработчик запроса для ${pathname}`);
    return "404 Not Found";
  }
};

exports.route = route;
