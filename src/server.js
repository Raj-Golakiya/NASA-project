const express = require("express")
const app = express()
const cors = require("cors")
const { loadPlanetData } = require("./models/PlanetModel")
const morgan = require('morgan')
const { launchRouter } = require("./routes/launch.route")

app.use(cors())
app.use(express.json())
app.use(morgan('combined'))

app.get("/", function (req, res) {
  res.send("Hello World")
})
app.use('/launch' , launchRouter)

let serverListen = async () => {
  await loadPlanetData()
  app.listen(3000 , () => console.log(`server start on port 3000`))
}

serverListen()
