const {Router}= require('express');
const route = Router();

const productoArray = require('./productos.json');
console.log(productoArray);
route.get('/', (req, res)=> {
   // const array = {"nombre": "Natalia", "edad": "22"}
    res.json(productoArray);

});
route.post('/', (req, res) =>{

});

module.exports = route;