const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

let bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());

app.use(express.static('server/public'));


const beersObject = [
    { Maker: 'Goose Island', Name: 'Bourbon County Stout', Votes: 2},
    { Maker: 'Anheiser Busch', Name: 'Coors Light', Votes: 1},
    { Maker: 'Indeed', Name: 'Rum King', Votes: 5},
    { Maker: 'Central Waters', Name: 'Vanilla Bean Stout', Votes: 1},
    { Maker: 'Clown Shoes', Name: 'Millionaire', Votes: 1}
];


app.get('/beers', (req, res) => {
    res.send(beersObject)
});


app.post('/beers', (req, res)=>{
    console.log('POST', req.body);
    let newBeer = req.body;
    beersObject.push(newBeer)
    console.log(beersObject);
    res.sendStatus(200)
});


app.listen(PORT, (req, res)=>{
    console.log('app is running on port', PORT)
});