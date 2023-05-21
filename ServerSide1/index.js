const http=require('http');
const fs=require('fs');

const index=fs.readFileSync('index.html','utf-8');
const data=JSON.parse(fs.readFileSync('data.json','utf-8'));
const comment=data.comments;
const Server=http.createServer((req,res)=>{
    console.log("Server has been Starts");
    console.log(req.url)
    if(req.url.startsWith('/comments'))
    {
       const id= req.url.split('/')[2];
       const comments=comment.find(p => p.id === (+id));
      
       const modiIndex=index.replace('**name**',comments.name).replace('**email**',comments.email).replace('**body**',comments.body);
       console.log(modiIndex)
       res.end(modiIndex)
       return;
    }
   
})


Server.listen(8000,()=>{
    console.log("Server Has been Started On Port 8000");
})