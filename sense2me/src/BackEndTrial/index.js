const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require("mongoose")
const axios = require('axios');

const mongoDB = 'mongodb+srv://Scodia619:VQZgZoaEI7CGEM6u@sense2me.hu2nwde.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const productSchema = new mongoose.Schema({
    name: String,
    price: String,
    description: String
})

const Products = mongoose.model('Product', productSchema)

const app = express()
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const port = 4567

const dogs = [
    {name: "Jimbob", breed: "Husky"},
    {name: "Sam", breed: "Labrador"},
]

app.get("/", (req, res) => {
    Products.find((err, products) => {
        console.log("Products: ", products)
        res.json(products)
    })
})

app.get("/products/:id", (req, res) => {
    Products.findById(req.params.id, (err, products) => {
        res.json(products)
    })
})

app.post("/products", (req, res) => {
    const product = new Products({
        name: req.body.name,
        price: req.body.price,
        description: req.body.description
    })

    product.save((err) => {
        res.json(product)
    })
})

app.put("/dogs/:id", (req, res) => {
    console.log(req.params.id)
    console.log(req.body)
    res.json({message: `updating dog ${req.params.id}`})
})

app.delete("/dogs/:id", (req, res) => {
    console.log(req.params.id)
    res.json({message: `deleting dog ${req.params.id}`})
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})

//CRUD = create, read, update, delete
//HTTP ==> POST, GET, PUT/PATCH, DELETE

function clickMe(){
    
    console.log("Hello")

    axios.post('mongodb+srv://Scodia619:VQZgZoaEI7CGEM6u@sense2me.hu2nwde.mongodb.net/?retryWrites=true&w=majority', {
        name: "Wooden Fidget Toy",
        price: "3.00",
        description: "An Anxiety Toy"
    })
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error(error);
    });

}