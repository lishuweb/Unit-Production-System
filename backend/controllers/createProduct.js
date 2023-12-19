const express = require("express").Router;
const app = express();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const product = [];
app.get('/', async(request, response) => {
    const productDetails = await prisma.Product.findMany();
    response.json(productDetails);
});

app.get('/getOne', async(request, response) => {
    const getVal = await prisma.Product.findMany({
        orderBy:{
            id: 'desc',
        },
        take:1
    });
    response.json(getVal);
})
app.post('/pro', async (request, response) => {
    const {productName, fabric, color, size} = request.body;
    const weight = parseFloat(request.body.weight);
    const meterSquare = parseFloat(request.body.meterSquare);
    console.log(size);
    const unitSize = await prisma.Hoodie.findMany({});
    const temp = {}
    for(let val of unitSize){
        if(size.includes(val.size)){
            temp[val.size] = val.meterSquare 
        }
    }
    function getVal(weight, size) {
        if (!size) return weight;
    
        const sum = size.reduce((sum, val) => sum + (+temp[val]), 0);
        return weight / sum;
    }    
    console.log(getVal(100,size))
    const postProduct = await prisma.Product.create({
        data: {
            productName,
            fabric,
            weight,
            meterSquare,
            color, 
            size,
            perSize: getVal(weight, size)
            
        },
    });
    if(postProduct)
    {
        response.json("Success");
    }
    console.log(postProduct);
    response.json(postProduct);
});


module.exports = app;