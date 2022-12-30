
const http = require('http');
const fs = require('fs')
const server = http.createServer((req,res)=>{

        if(req.url === '/'){
            res.end('done');
        }else if(req.url === '/report'){
          fs.readFile('test.txt',{encoding:'utf-8'},(err,data)=>{
            if(err){
                console.log(err)
            };
            console.log(data);
          })
            res.end('done')
        }

})

server.listen(9100,(err)=>{
console.log('err');
})


// const reader=fs.createReadStream('test.txt');
// // console.log(reader);
// reader.on('data',(chunk)=>{
// console.log(chunk.toString())
// })

const lets=()=>{
    console.log('working')
}
