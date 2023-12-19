const express = require("express");
const app = express();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const users = [];
app.get('/', async (request, response) => {
    const user = await prisma.Signin.findMany();
    response.json(user);
});

app.post('/postUser', async (request, response) => {
    try
    {
        // let salt = await bcrypt.genSalt()
        // const hashedPassword = await bcrypt.hash(request.body.password, salt);
        // console.log(salt);
        // console.log(hashedPassword);
        const newUser = await prisma.Signin.create({
            data: {
                name: request.body.name,
                email: request.body.email,
                password: request.body.password
            }
        });
        console.log(newUser);
        // let user = {
        //     name: request.body.name,
        //     password: request.body.password
        // }
        // users.push(user);
        // response.status(201).json(user);
    }
    catch
    {
        response.status(500).send("Error");
    }
});

app.put('/update/:id', async(request, response, next) => {
    const { id } = request.params;
    const updateData = await prisma.Signin.update({
        where: { id: Number(id)},
        data: { name: request.body.name}
    })
        .catch((error) => next(error));
    console.log(updateData);
});

app.delete('/delete/:id', async(request, response, next) => {
    const { id } = request.params;
    const deleteData = await prisma.Signin.delete({
        where:{
            id: Number(id),
        },
    }).catch((error) => next(error));
    response.json(Signin);
});

app.post('/login', async(request, response) => {
    const {email, password} = request.body;
    const lg = await prisma.Signin.findMany();
    const val = lg.find((res)=> res.email === email)
    if(val)
    {
        if(val.password === password)
        {
            response.json("Success");
        }
        else
        {
            response.json("No");
        }
    }
    else
    {
        response.json("Error");
    }
    
})


module.exports = app;