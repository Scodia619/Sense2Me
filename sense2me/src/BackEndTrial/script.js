import "./index";

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