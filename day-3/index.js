const arument = process.argv[2];
const para1 = process.argv[3];
const para2 = process.argv[4];

const fs= require('fs');
// if(arument=='f'){
//     fs.writeFile(para1,para2,{encoding:'utf-8'},(err)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log('finished');
//     })
// }
// const data=fs.writeFile('test.txt',"/n this is new test file",{encoding:'utf-8'},(err)=>{
//     if(err){
//         console.log("error is",err);
//     }
    
// });


// fs.readFile('test.txt',{encoding:'utf-8'},(err,data1)=>{
//     if(err){
//         console.log(err);
//     }
// console.log(data1);
    
// })

// const checkEven = require('is-even');
// let d = checkEven(6);
// // console.log(d);

const dns = require('dns');
// const fs= require('fs');
// console.log(dns)
// const getIp=(name)=>{
//     dns.lookup(name,(err,address)=>{
//         if(err){
//             console.log(err);
//         }
//         console.log(name," is ",address)
//     })
// }


// console.log(arument,para1,para2);
if(arument=='a'){
    getIp(para1);
}


// const fs = require('fs');
// // fs.rm('test.txt',(err)=>{
// // if(err){
// //     console.log(err)
// // }
// // });

// fs.writeFile('test.txt','content',(err)=>{
// if(err){
//     console.log(err)
// }
// })

const readFile=(para1)=>{
    fs.readFile(para1,{encoding:'utf-8'},(err,data)=>{
if(err){
    console.log(err);
}
console.log(data);
    })
}


// to read file......
if(arument=='s'){
    readFile(para1);
}

const deletefile=(para1)=>{
    fs.rm(para1,(err)=>{
if(err){
    console.log(err);
}
    })
}

if(arument=='rm'){
    deletefile(para1);
}


const obj ={
    'name':"chand babu",
    "age":"22"
}

console.log(obj);// it simply print data
console.dir(obj);// it will print additional information
// about my data in dont notation
