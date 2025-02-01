const { launches, newLaunch } = require("../models/launcheModel")

function getInfoController(req, res) {
  res.status(200).json(Array.from(launches.values()));
}

function addNewData(req, res) {
  let launches = req.body;

  if (!launches.mission || !launches.rocket || !launches.launchDate || !launches.launchDate) {
    return res.status(400).json({
      error: "something is missing",
    });
  }
  launches.launchDate = new Date(launches.launchDate);

  if (isNaN(launches.launchDate)) {
    return res.status(400).json({
      error: "invalid date enter"
    })
  }
  newLaunch(launches);
  res.status(201).json(launches)
}

module.exports = {
  getInfoController,
  addNewData,
}

