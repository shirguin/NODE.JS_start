const start = () => {
  console.log("Запрос обработан 'start' был вызван.");
  return "Hello Start";
};

const upload = () => {
  console.log("Запрос обработан 'upload' был вызван.");
  return "Hello Upload";
};

exports.start = start;
exports.upload = upload;
