const http = require("http");
const fs = require("fs");

const index = fs.readFileSync("index.html", "utf-8");
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const album = data.albums;

const Server = http.createServer((req, res) => {
  console.log("Server start to working.....");
  console.log(req.url);

    if(req.url.startsWith('/displays')){
        const id =req.url.split('/')[2]
        const albums=album.find(p => p.id === (+id))
        console.log(albums)
        const modiAlbum=index.replace('**title**',albums.title).replace('**url**',albums.url)
        res.end(modiAlbum);
        return;
    }


  switch (req.url) {
    case "/":
      res.setHeader("Content-Type", "text/html");
      res.end(index);
      break;
    case "/api":
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(data));
      break;
    case "/display":
      res.setHeader("Content-Type", "text/html");
    //   const modiAlbum=index.replace('**title**',albums.title).replace('**url**',albums.url)
    //   res.end(modiAlbum);
      break;
    default:
        res.writeHead(404)
        res.end();
  }
});

Server.listen(9000, () => {
  console.log("Server Has Been Started On Port 9000");
});
