require("dotenv").config();
const express = require("express");
const app = express();
const router = require("./src/routes/index")


app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/api/v1', router);

// app.use((req, res, next) => {
//     res.status(404);
//     res.send({
//         status: "failed",
//         message: "Resource " + req.originalUrl + " not found!" 
//     })
// })

const PORT = 3000;
app.listen(process.env.PORT || PORT, () => console.log(`Server: http://localhost:${PORT}`));