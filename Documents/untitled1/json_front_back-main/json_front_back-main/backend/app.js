const express = require("express");
const Quote = require('inspirational-quotes');
const PORT = 5000;
const app = express();

app.use(express.static('public'))
app.use(express.json())

app.get('/info/:dynamic', (req, res) => {

    const {dynamic} = req.params
    const {key} = req.query

    console.log(dynamic, key)
    res.status(200).json({
        info:'Andreyka super'
    });
})

app.post('/', (req, res) => {
    const {parcel} = req.body
    console.log(parcel)
    if (!parcel) {
        return res.status(400).send({status: 'failed'})
    }
    res.status(200).send({status: 'received'})
})

app.listen(PORT, function() {
    console.log("Server started successfully");
});
