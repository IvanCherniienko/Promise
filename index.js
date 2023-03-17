let promise = new Promise(function(resolve, reject) {
  resolve(1)

  setTimeout(() => resolve(2), 1000)
})

promise.then(alert)

// Выведет 1 //

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

delay(3000).then(() => alert('виконалось через 3 секунди'))

//          //

function ret() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const number = Math.random()
      resolve(number)
      console.log(number)
    }, 2000)
  })
}

//          //

const arr = ['1', '54', '16']

function get(arr) {
  return new Promise((resolve, reject) => {
    const max = Math.max(...arr)
    resolve(max)
  })
}

//          //

