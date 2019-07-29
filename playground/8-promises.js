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