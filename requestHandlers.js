const exec = require("child_process").exec;

const start = (response) => {
  console.log("Запрос обработан 'start' был вызван.");

  exec("ls -lah", (error, stdout, stderr) => {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.write(stdout);
    response.end();
  });
};

const upload = (response) => {
  console.log("Запрос обработан 'upload' был вызван.");
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello Upload");
  response.end();
};

exports.start = start;
exports.upload = upload;
