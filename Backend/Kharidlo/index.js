const express = require('express')
const app = express();
require('./db/conn')
app.listen(8080,()=>{
    console.log('Server Is Running On Port 8080')
})