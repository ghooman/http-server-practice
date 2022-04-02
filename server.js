const http = require('http'); // 서버를 만드는 모듈 불러옴

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("<h1>Hello from nodejs</h1>")
  } else {
    res.write(`<h1>You have entered this url : ${req.url}</h1>`)
  }
  res.end();
});

server.listen(8080, () => {
  console.log("the server is listening on port 8080");
});