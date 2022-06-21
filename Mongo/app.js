const express = require("express")
require("./dbs/conn")
const FreelancersInfo = require("./modules/freelancers")
const ProgDomainTechs = require("./modules/progmodel")
var cors = require('cors')

const app = express();
const port = process.env.PORT || 5555;
const router = require("./routers/topfreelancers")
const router1 = require("./routers/prog")
const router2 = require("./routers/contact")
app.use(express.json());
app.use(cors())
app.use(router);
app.use(router1);
app.use(router2);

app.get("/",async (req,res) => {
  res.send("Hello World")
})

app.listen(port , () => {
  console.log(`Example app listening at http://localhost:${port}`)
})