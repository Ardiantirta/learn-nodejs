setTimeout(() => {
  console.log(`2 seconds are up`)
}, 2000)

const names = ['ardian', 'tirta', 'hopey', 'pey']

const shortNames = names.filter((name) => {
  return name.length <= 5
})

console.log(shortNames)

const geocode = (address, callback) => {
  setTimeout(() => {
    let data = {
      latitude: 0,
      longitude: 0
    }

    callback({address, data})
  }, 2000)
}

geocode('jakarta', (data) => {
  console.log(data)
});

const add = (x, y, callback) => {
  setTimeout(() => {
    callback(x + y)
  }, 2000)
}

add(1, 4, (result) => {
  console.log(result)
})