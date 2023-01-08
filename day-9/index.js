const express = require('express');
const {connection,Moviemodel}=require('./mongoose');

const app = express();
app.use(express.json());

app.get('/', async(req,res)=>{
    try{
        const movie = await Moviemodel.find();
        console.log("working");
        console.log(movie);
        res.send({"movies":movie});
    }
    catch(err){
        console.log("all movie get request err");
        console.log
        (err);
        res.send({"err":"Something went wrong"})
    }
   
})


app.post('/addmovie',async(req,res)=>{
    const payload = req.body;
    try{
    const movie = new Moviemodel(payload);
   await movie.save() 
   res.send("movie updated");
    }
   catch(err){
    console.log("err from addmovi post request");
    console.log(err);
    res.send("err");
   }
})


app.get('/title',async(req,res)=>{
    try{
const movie =await Moviemodel.find().sort({title:1});
// let data= JSON.parse(mpvie);
console.log(movie);
res.send("done")
    }catch(err){
        console.log("err coming form get req title router");
        console.log(err);
    }
})

app.get('/rating',async(req,res)=>{
    try{

     const movie = await Moviemodel.find().sort({Rating:-1});
    console.log(movie);
    res.send(movie);
    }catch(err){
console.log("err from rating by sorting route");
console.log(err);
res.send({"someting":"wente wrong"});
    }
    
})

app.get('/search',async(req,res)=>{
    const query = req.query;
    const movie =await Moviemodel.find(query);
    console.log(movie);

    console.log(query);
    res.send(movie)
})

console.log("done")
console.log("done")
console.log("done")







app.listen(3001,async(err)=>{
    try{
        await connection;
        console.log("connection is estabilished");
        console.log("port is isning")
    }catch(err){
        console.log("connectivity err")
        console.log(err);
    }
    
})

