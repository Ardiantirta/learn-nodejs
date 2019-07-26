// Object property shorthand

const name = 'Ardian'
const age = 23

const user = {
  name,
  age,
  location: 'Jakarta'
}

console.log(user)

// Object destructuring

const product = {
  label: 'Red notebook',
  price: 3,
  stock: 201,
  salePrice: undefined,
  rating: 4.2
}

// const label = product.label
// const stock = product.stock

// kalo rating deklarasi, rating = undefined
// kalo rating di kasih default, hasilny = default
// kalo rating ada value, hasilny value, bukan default.
const {label: productLabel, stock, rating = 5} = product
console.log(productLabel)
console.log(stock)
console.log(rating)

const transaction = (type, { label, stock }) => {
  console.log(type, label, stock)
}

transaction('order', product)
