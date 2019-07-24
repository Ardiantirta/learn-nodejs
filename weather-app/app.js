const request = require('request')

const url = 'https://api.darksky.net/forecast/e7193a0ef3cf18723c11aa9319edc830/37.8267,-122.4233'

request({url: url, json: true}, (error, response) => {
  if (error) {
    console.log(`unable to connect to darksky API`)
  } else if (response.body.error) {
    console.log(`unable to find location`)
  } else {
    console.log(`${response.body.daily.data[0].summary}. It is currently ${response.body.currently.temperature} degress out. There is a ${response.body.currently.precipProbability}% chance of rain`)
  }
})

const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYXJkaWFudGlydGEiLCJhIjoiY2p5YTVlN2VkMGJjNzNtcnd0czFteTd6cCJ9.tsjt_8o2bSXx993TR7E4yQ&limit=1'

request({url: geocodeURL, json: true}, (error, response) => {
  if (error) {
    console.log('unable to connect to location services')
  } else {
    console.log(response.body.features[0].center)
  }
})
