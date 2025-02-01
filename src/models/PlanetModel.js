const fs = require("fs")
const path = require('path')
const { parse } = require("csv-parse")

let result = []

function isHabitat(data) {
  return (
    data["koi_disposition"] === "CONFIRMED" &&
    data["koi_insol"] > 0.36 &&
    data["koi_insol"] < 1.11 &&
    data["koi_prad"] < 1.6
  );
}

function loadPlanetData() {
  return new Promise((resolve, reject) => {
    fs.createReadStream(path.join(__dirname, "..",'..', "data", "kepler_data.csv"))
      .pipe(
        parse({
          comment: "#",
          columns: true,
        })
      )
      .on("data", (data) => {
        if (isHabitat(data)) {
          result.push(data);
        }
      })
      .on("error", (err) => reject(err))
      .on("end", () => {
        console.log(result.length)
        resolve()
      });
  });
}

module.exports = {
  loadPlanetData,
  planets: result
}
