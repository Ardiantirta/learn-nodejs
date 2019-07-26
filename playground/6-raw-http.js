const https = require('https')

let url = `https://api.darksky.net/forecast/e7193a0ef3cf18723c11aa9319edc830/40,-75?units=si`

const request = https.request(url, (response) => {
  let data = ''
  response.on('data', (chunk) => {
    data = data + chunk.toString()
  })

  response.on('end', () => {
    const body = JSON.parse(data)
    console.log(body)
  })
})

request.on('error', (error) => {
  console.log('An error', error)
})

request.end()
