const express = require("express");
const app = express();
// const bcrypt = require("bcrypt");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

app.use(express.json());

const users = [];
app.get('/users', async (request, response) => {
    const user = await prisma.Signin.findMany();
    response.json(user);
});

app.post('/users', async (request, response) => {
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
                password: request.body.password,
                profile: request.body.profile
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

app.put('/users/:id', async(request, response) => {
    const { id } = request.params;
    const updateData = await prisma.Signin.update({
        where: { id: Number(id)},
        data: { profile: request.body.profile}
    });
    console.log(updateData);
});

app.delete('/users/:id', async(request, response) => {
    const { id } = request.params;
    const deleteData = await prisma.Signin.delete({
        where:{
            id: Number(id),
        },
    });
    response.json(Signin);
});

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});