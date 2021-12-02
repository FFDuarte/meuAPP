const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const routes = require('./api/routes');

const app = express();
const port = process.env.PORT || 5000;

mongoose.connect('mongodb://localhost/meuapp', {
    useNewUrlParser: true,
    useUnifiedTopology:true,
},function(err){
    if(err){
        console.log(err)
    }else{
        console.log("Conectado com sucesso")
    }
});

//quais dominios poder usar 
app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.use(routes);

app.listen(port,function(){
    console.log(`serve runig on port ${port}`)
});