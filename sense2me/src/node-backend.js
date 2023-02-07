const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require("mongoose")

const mongoDB = 'mongodb+srv://Scodia619:VQZgZoaEI7CGEM6u@sense2me.hu2nwde.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const productSchema = new mongoose.Schema({
    name: String,
    price: String,
    description: String,
    image: String
})

const Products = mongoose.model('Product', productSchema)

const app = express()
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const port = 4567

app.get("/", (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', true);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    
    res.send([{name: "Wooden Fidget", price: "3.00", description: "a wooden fidget toy", image: "https://i.ibb.co/N3sw2ZY/double-beaded-roller.jpg"},
    {name: "Fidget Spinner", price: "9.00", description: "A spinner Fidget", image: "https://i.ibb.co/TYTmBX9/cory-Gp-K9r-IM2-EIA-unsplash.jpg"},
    {name: "Sensory Pack", price: "13.00", description: "a wooden fidget toy", image: "https://i.ibb.co/FqNHQ9v/hello-i-m-nik-Qjo-M-O33-NVk-unsplash.jpg"},
    {name: "SquishMellow", price: "7.96", description: "a wooden fidget toy", image: "https://i.ibb.co/PWzSBG1/joice-kelly-r-Xr-My7m-XUEs-unsplash.jpg"},
    {name: "Metal Fidget", price: "3.75", description: "a wooden fidget toy", image: "https://i.ibb.co/gJv93tQ/charles-lamb-n-Yz-SYb1-YSPg-unsplash.jpg"},
    {name: "Anxiety Bracelet", price: "4.00", description: "a wooden fidget toy", image: "https://i.ibb.co/Yp1nBQX/octavio-fossatti-Bbhq-Dutq-Jew-unsplash.jpg"},])

    /* Products.find((err, products) => {
        console.log("Products: ", products)
        res.json(products)
    }) */
})

// app.get("/products/:id", (req, res) => {
//     Products.findById(req.params.id, (err, products) => {
//         res.json(products)
//     })
// })

app.post("/", (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', true);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    console.log(req.body);
    // Do something with the data sent in the request body
    res.send("Data received");
  });

//     product.save((err) => {
//         res.json(product)
//     })
// })

// app.put("/dogs/:id", (req, res) => {
//     console.log(req.params.id)
//     console.log(req.body)
//     res.json({message: `updating dog ${req.params.id}`})
// })

// app.delete("/dogs/:id", (req, res) => {
//     console.log(req.params.id)
//     res.json({message: `deleting dog ${req.params.id}`})
// })

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})

//CRUD = create, read, update, delete
//HTTP ==> POST, GET, PUT/PATCH, DELETE