const expres = require('express');
const fs = require('fs')
const app = expres();
app.use(expres.json())

app.get('/',(req,res)=>{
    res.send("hello word");
});

// --------for getting a data-------


app.get('/getdata',(req,res)=>{
const data = fs.readFileSync('db.json','utf-8');
const d1= JSON.parse(data);
res.send(d1.student);


})

// --------for adding a student details-----

app.post('/addstudent',(req,res)=>{
    const student = req.body;
    const data = fs.readFileSync('db.json',"utf-8");
    const parse_data = JSON.parse(data);
    const student_data=parse_data.student
    student_data.push(student);
    fs.writeFileSync('db.json',JSON.stringify(parse_data,'utf-8'));
    res.send("thank")
    
})

// ---------------------for deleting a student details-----

app.post('/deletestudent',(req,res)=>{
    const id=req.body.id;
    const data = fs.readFileSync('db.json','utf-8');
    const d1 = JSON.parse(data);
    let student = d1.student;
   const da= student.filter((ele)=>{
            return ele.id !=id; 
    });
    
    
    
    d1.student=da;
    fs.writeFileSync('db.json',JSON.stringify(d1,'utf-8'))
    res.send('thanks')
})

// ----update data ---------


app.post('/patch',(req,res)=>{
    const id=req.body;
    const data = fs.readFileSync('db.json','utf-8');
    const parse_data = JSON.parse(data);
    const student = parse_data.student;
    student.forEach((ele)=>{
            if(ele.id == id.id){
                ele.name=id.name;
                ele.age=id.age;
            }
    });
    fs.writeFileSync('db.json',JSON.stringify(parse_data),'utf-8');
    
    
    res.send('thanks')
})

app.listen(7000,()=>{

})
