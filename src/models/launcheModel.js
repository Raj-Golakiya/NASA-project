const launches = new Map()

let latestflightNumber = 100

const launch = {
  flightNumber: 100,
  mission: "Kepler Exploreation X",
  rocket: "Explorer IS1",
  launchDate: new Date("December 27, 2030"),
  destination: "Kepler-442 b",
  customer: ["ZTM", "NASA"],
  upcoming: true,
  success: true,
}

launches.set(launch.flightNumber, launch)
function newLaunch(launch){
    latestflightNumber++
    launches.set(
      launch.flightNumber,
      Object.assign(launch, {
        upcoming: true,
        success: true,
        customer : ['zero to Mastery' , 'NASA'],
        flightNumber : latestflightNumber
      })
    );
}

module.exports = {
  launches,
  newLaunch,
};
