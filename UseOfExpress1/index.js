const fs=require('fs');


const index=fs.readFileSync('index.html','utf-8');
const data=fs.readFileSync('data.json','utf-8')

const express=require('express');
const morgan=require('morgan')

const server=express();






// server.get('/',(req,res)=>{
//     // res.json({type:"Get"})
//    // res.send("<h1>hello</h1>")
//    // res.sendFile('C:\Users\satis\Dropbox\PC (2)\Desktop\NodeJs\UseOfExpress1\index.html');
//    //res.json(data)
// //    res.sendStatus(404,()=>{
// //     console.log('Server is not Found')
// //    })
// res.status(201)
//    console.log('Data Send')
// })

//middleware

// server.use((req,res,next)=>{
//     console.log('middleWare')
//     //console.log(req.method,req.ip,new Date,req.query,req.localhost)
// });

//index.html ko send krna ho to

//server.use(express.static('public'));

server.use(express.json())
server.use(morgan('default'))
server.use(express.static('public'))
//authenticate

// const auth=(req,res,next)=>{
//     console.log(req.query)
//     if(req.query.password == '123') //iska use hm password authentication me kr skte h
//     {
//         next();
//     }
//     else{
//         res.send(404)
//     }
// }
// //server.use(auth)

server.get('/',(req,auth,res)=>{
    res.json({type:"GET"})
   // res.send('index.html')
    //res.sendFile(index)
    //res.json(data)
    
})


server.put('/',(req,res)=>{
    res.json({type:"PUT"})
})

server.patch('/',(req,res)=>{
    res.json({type:"PATCH"})
})

server.delete('/',(req,res)=>{
    res.json({type:"DELETE"})
})


server.listen(9000,()=>{
    console.log('Server has been started on Port number 9000')
})