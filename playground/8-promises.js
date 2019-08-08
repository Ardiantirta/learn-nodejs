const workwithPromises = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve([1, 4, 7])
    reject('Things went wrong')
  }, 2000);
})

workwithPromises.then((response) => {
  console.log(`success ${response}`)
}).catch((err) => {
  console.log(`error ${err}`)
})

const add = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b)
    }, 2000)
  })
}

// add(1, 2).then((sum) => {
//   console.log(sum)

//   add(sum, 5).then((sum2) => {
//     console.log(sum2)
//   }).catch((e) => {
//     console.log(e)
//   })
// }).catch((e) => {
//   console.log(e)
// })

add(1, 2).then((sum) => {
  console.log(sum)
  return add(sum, 5)
}).then((sum2) => {
  console.log(sum2)
}).catch((e) => {
  console.log(e)
})