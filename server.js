const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Data = require('./Data');
const Videos = require('./model');
const data_url = "mongodb+srv://favOz:playton@cluster0.rj2wa.mongodb.net/tiktok?retryWrites=true&w=majority"
// app config
const app = express();

// middleware
app.use("/videos", express.static("./videos"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.json())
// DB URL
mongoose.connect(data_url, { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true})
// api endpoints
app.get('/', (req, res) => {
    res.status(200).send('hello');
});

app.get('/v2/api/vid123/', (req, res) => {
    Videos.find((err, data) => {
        if(err){
            res.status(500).send("error >>", err);
        }else{
            res.status(200).send(data);
        }
    })
});

app.post('/v2/api/vid123/', (req, res) => {
    const newVid = req.body
    
    Videos.create(newVid, (err, data) => {
        if(err){
            res.status(500).send(err);
        }else{
            res.status(201).send(data);    
        }
    })
    
});

const PORT = process.env.PORT || 3200;
app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
});