const doWork = async () => {
  const sum = await add(0, -2)
  const sum2 = await add(sum, 3)
  const sum3 = await add(sum2, 10)
  return sum3
}

const add = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(a < 0 || b < 0)
        return reject(`Numbers must be positive`)
      resolve(a + b)
    }, 1000);
  })
}

doWork()
  .then((result) => {
    console.log('result', result)
  }).catch((e) => {
    console.log(e)
  })