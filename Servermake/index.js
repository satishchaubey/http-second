const http = require("http");
const fs = require("fs");

const index = fs.readFileSync("index.html", "utf-8");
const dat = fs.readFileSync("data.json", "utf-8");

const data = { name: "satish" };

const Server = http.createServer((req, res) => {
  console.log(req.url);
//   console.log("Server Has Been Created ");
//   //   res.setHeader("Dummy", "Dummy header");
//   //   //res.setHeader("Content-Type","application/json")
//   //   res.setHeader("Content-Type", "application/html");
//   //   // res.end(JSON.stringify(data));
//   //   //res.end("<h1>Hello This is satish</h1>");
  res.end(index)
//   res.setHeader("Content-Type","application/json")  
//   res.end(dat);


});

Server.listen(9000, () => {
  console.log("Server Has been started on port number 9000");
});
