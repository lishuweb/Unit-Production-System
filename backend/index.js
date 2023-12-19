const express = require("express");
const app = express();
const cors = require('cors');
// const bcrypt = require("bcrypt");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const userControllers = require("./controllers/user");
const productControllers = require("./controllers/createProduct");

const {
    noHandlers,
    requestLogger,
} = require("./utils/middleware");
  
app.use(cors());
app.use(express.json());

// app.use(requestLogger);

app.use("/api/user", userControllers);
app.use("/api/products", productControllers);

app.use(noHandlers);

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});