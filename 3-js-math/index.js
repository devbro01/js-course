// Math - java script

// Math object - build in object - dastur ichida tayyor kodlangan obyekt

// console.log(Math)
// console.log(Math.PI)
// console.log(Math.E)

const number = 8.7

// Math.round() sonning eng yaqin butun sonni oladi
// console.log(Math.round(number))


// Math.floor() sonning eng yaqin kichik butun sonini oladi
// console.log(Math.floor(number))


// Math.ceil() sonning eng yaqin katta butun qismini oladi
// console.log(Math.ceil(number))


// Math.trunk() sonning faqat butun qismini qaytaradi
// console.log(Math.trunc(number))


// Math.random() 0 va 1 sonlari oralig'ida random son qaytaradi

// const Nrandom = Math.trunc(Math.random() * 10) + 1;
// console.log(Nrandom)

// const filter = number.forEach(number => {
//     console.log(number + 1)
// });







// Amaliy Topshiriq

// const items = [[false, true], [1, 2], 99, 'yaxshi']

// items.forEach((item, i) => {
//     if (typeof item === 'string') {
//         console.log(`String index: ${i}`)
//         }
//     })


// Array ichidagi faqat Array larni ajratib olish

// const numbers = [[1, 2, 3], 'salom', [4, 5, 6], true, false]
// const newNumber = []

// numbers.forEach((item) => {
//     const res = Array.isArray(item)
//     if (res) {
//         item.forEach((num) => {
//             newNumber.push(num)
//         })
//     }
// })

// console.log(newNumber)


// array ichidan malumotlarni ajratib olish
// const checkData = [null, 'false', 0, 99, false, undefined, '', NaN, '0']
// const falsey = []

// checkData.forEach((fall) => {
//     if (!fall) {
//         falsey.push(fall)
//     }
// })

// console.log(falsey)

// Berilayotgan elementni teskari qilib berish
// let result = []

// const word = 'mx'
// const sp = word.split('')
// sp.reverse()
// result.push(sp)

// console.log(result)

