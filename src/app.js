require('dotenv').config();
const nodemailer = require("nodemailer");
const express = require('express')
const cors = require('cors');
const fileUpload = require('express-fileupload');

const bodyParser = require("body-parser");

const { mailer } = require("./mailer");



const app = express()
const port = 3001
const host = "0.0.0.0"
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(fileUpload());
app.use(
    bodyParser.urlencoded({
        // to support URL-encoded bodies
        extended: true,
    })
);
app.use(cors());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const { Venta, Empresa } = require("../app/db");

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/send', async (req, res) => {
    try {
        const email = await mailer(req.body, req.files)
        res.status(200).json(email)

    } catch (error) {
        res.status(422).json({ error })
    }

})


app.listen(port, host, () => {
    console.log(`Example app listening at http://${host}:${port}`)
})
