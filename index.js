//import express
const express = require('express');
const app = express();

//HTTP Methods

app.get('/', (req , res) => { // jika client mengakses root 
    res.send('Hello World !!!'); //responya adalah 'hello world'
});

app.get('/api/courses', (req,res)=>{
    res.send([1,2,3]);
});

app.get('/api/courses/:id', (req, res)=>{
res.send(req.params.id);
});

//PORT - Environtment Variable
const port = process.env.PORT || 3001; //jika port disediakan gunakan port yang ada atau gunakan 3001
app.listen(port, () => console.log("Server berjalan di port:" + port + "..."));
//sintaks lain dengan hasil yang sama
// app.listen(port, () => console.log(`Server berjalan di port: ${port}...`));