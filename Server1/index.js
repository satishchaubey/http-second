const http = require("http");
const fs = require("fs");

const index = fs.readFileSync("index.html", "utf-8");



const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const product=data.products;

const Server = http.createServer((req, res) => {
  console.log("Server Started");
  console.log(req.url);

    if(req.url.startsWith('/product')){
        const id=req.url.split('/')[2];
        const products=product.find(p=>p.id ===(+id));
        console.log(products)
        res.setHeader('Content-Type','text/html');
        const modiIndex=index.replace('**title**',products.title).replace('**thumbnail**',products.thumbnail)
        .replace('**category**',products.category)
        .replace('**p**',products.price)
        .replace('**brand**',products.brand);
        res.end(modiIndex);
        return;
    }

  switch(req.url)
  {
    case '/':
        res.setHeader('Content-Type','text/html');
        res.end(index);
        break;
    case '/api':
        res.setHeader('Content-Type','application/json')
        res.end(JSON.stringify(data));
        break;
    case '/blog':
        // res.setHeader('Content-Type','text/html');
        // const modiIndex=index.replace('**title**',products.title).replace('**thumbnail**',products.thumbnail)
        // .replace('**category**',products.category)
        // .replace('**p**',products.price)
        // .replace('**brand**',products.brand);
        // res.end(modiIndex)
        break;
    default:
        res.writeHead(404);
        res.end();
  }

 
});

Server.listen(9000, () => {
  console.log("Server Connected On Port 9000");
});
