// const square = function (x) {
//   return x * x
// }

// const square = (x) => {
//   return x * x
// }

// const square = (x) => x * x

// console.log(square(5))

const event = {
  name: 'Birthday Party',
  guestList: ['Ardian', 'Jen', 'Mike'],
  printGuestList: function () { // ini jangan pake arrow function, karna tidak bisa access ke keyword this.
    console.log(`Guest list for ${this.name}`) // this disini mengarah ke object event.

    this.guestList.forEach((guest) => { // disini pakai arrow function karna dia tidak binding ke object. jadi value this.name-nya masih diambil dari yang atas.
      console.log(`${guest} is attending ${this.name}`)
    })
  }
}

event.printGuestList()
