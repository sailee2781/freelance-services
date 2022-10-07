const express = require("express")
require("./dbs/conn")
const FreelancersInfo = require("./modules/freelancers")
const ProgDomainTechs = require("./modules/progmodel")
var cors = require('cors')

const app = express();
app.use(cors())
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested, Content-Type, Accept Authorization"
  )
  if (req.method === "OPTIONS") {
    res.header(
      "Access-Control-Allow-Methods",
      "POST, PUT, PATCH, GET, DELETE"
    )
    return res.status(200).json({})
  }
  next()
})
const port = process.env.PORT || 5555;
const router = require("./routers/topfreelancers")
const router1 = require("./routers/prog")
const router2 = require("./routers/contact")
app.use(express.json());
app.use(router);
app.use(router1);
app.use(router2);

app.get("/", async (req, res) => {
  res.send("Hello World")
})

app.listen(port, () => {
  console.log(`App running at PORT: ${port}`)
})