const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

let bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended:true }));

app.use(express.static('server/public'));






app.listen(PORT, (req, res)=>{
    console.log('app is running on port', PORT)
});