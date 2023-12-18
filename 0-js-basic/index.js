// let son = "100"

// let natija = Number(son)

// console.log(natija + 1)


// let ism = prompt("Ismingizni kiriting:")

// let birinchiHarf = ism.charAt().toUpperCase()
// let davomi = ism.slice(1).toLowerCase()

// let natija = birinchiHarf + davomi

// alert(`Salom ${natija}`)

// for & loop

// for (i = 0; i < 10; i++) {
//     console.log(i)
// }

// const names = ['Ahror','Abror','Sarvar','Farhod','Davron']

// for (let i = 0; i < names.length; i++) {
//     console.log(names[i])
// }


// IF ELSE

// yosh = 5

// if (yosh < 20) {
//     console.log('Mumkinmas')
// } else {
//     console.log('Mumkin')
// }

// mehmonlar
// joylar = 4

// const mehmonlar = ['Bobur','Aziz','Farhod','Kamol','Davron','Laylo','Karim']

// if (mehmonlar.length > joylar) {
//     console.log('Mehmonlar sig`ishmaydi!')
// } else {
//     console.log('Mehmonlar sig`ishadi')
// }

// let jami = mehmonlar.length
// console.log(`jami ${jami} ta mehmon kelar ekan `)
// console.log(`Joylarimiz esa ${joylar} ta`)

// parol kuchliligi
// let password = prompt("Parolingizni yozing:")

// if (password.length >= 12){
//     alert('Parolingiz judayam uzun!')
// } else if (password.length >= 8) {
//     alert('Gap yo`q parolingiz kuchli!')
// } else {
//     alert('o, yoq kuchliroq parol kiriting')
// }

// Breack va Countune
// const natijalar = [30, 45, 50, 55, 60, 65, 70, 100, 150, 250]
// for (let i = 0; i < natijalar.length; i++) {
//     console.log(`Sizning natijangiz ${natijalar[i]}`)
 
//     if (natijalar[i] === 50) {
//         console.log("siz yuqori natijani To`plagansiz!")
//         break
//     }
// }


// switch case
// const baho = 'D'

// switch(baho) {
//     case 'A':
//         console.log('Barakalla!')
//         break
//     case 'B':
//         console.log('Qoniqarli!')
//         break
//     case 'C':
//         console.log('Yaxshimas!')
//         break
//     case 'D':
//         console.log('Juda Yomon!')
//         break
//     default:
//         console.log('Siz Yiqildingiz!')
// }


// BLOCK & SCOPE

// const yosh = 50

// if(true) {
//     const yosh = 20
//     console.log(`Ichki  ${yosh}`)
// }

// console.log(`Tashqi ${yosh}`)

// Amaliyot

// const ism = prompt('Ismingizni kiriting:')
// const yosh = +prompt('Yoshingizni kiriting:')

// let tugilganYil = 2023 - yosh
// let oy = yosh * 12
// let hafta = (((yosh * 365) / 7)).toFixed(0)
// let kun = yosh * 365
// let soat = yosh * 365 * 24
// let daqiqa = yosh * 365 * 24 * 60
// let soniya = yosh * 365 * 24 * 60 * 60

// const result = `Qadirli ${ism}, siz ${tugilganYil} yilda tug'ilgansiz. Va siz ${oy} oy, ${hafta} hafta, ${kun} kun, ${soat} soat, ${daqiqa} daqiqa, ${soniya} soniya yashagansiz!`

// alert(result);

// ISM BORMI YOQMI

// let input = prompt(`Kerakli ismni yozing:`)

// const names = ['Abdulloh','Jamshid','Ozodbek','Davron','Farhod','Sherzod','Bobur','Alish']

// if (names.includes(input)) {
//     alert('Tabriklayman ro`yxatda so`ralgan ism bor!')
// } else {
//     alert('Afsus bu ism ro`yxatda mavjudmas')
// }

// const ismlar = ['Abdulloh','Jamshid','Ozod','Davron','Farhod','Sherzod','Bobur','Alish']

// for (let i = 0; i < ismlar.length; i++) {
//     let result = ismlar[i] + 'bek'
//     console.log(result)
// }

// while

// i = 0

// while (i < ismlar.length) {
//     let result = ismlar[i] + 'bek'
//     console.log(result)
//     i++
// }

// viloyat da aholi soni

// const input = prompt(`Viloyat nominii kiriting:`)

// switch(input) {
//     case 'Toshkent':
//         alert(`${input}da aholi soni 16mingta`)
//         break
//     case 'Namangan':
//         alert(`${input}da aholi soni 20mingta`)
//         break
//     case 'Samarqand':
//         alert(`${input}da aholi soni 48mingta`)
//         break
//     default:
//         alert(`Uzur ${input} viloyat ro'yxatda yo'q!`)
// }      

// limit son oshish kamayish

// const input = prompt('kartangiz raqamini kiriting')

// const limit = 16

// if (input.length > limit) {
//     alert('Kiritilgan karta raqami nato`g`ri!')
// } else if (input.length < limit) {
//     alert('Kartani nato`g`ri kiritdingiz, qaytadan uruning!')
// } else {
//     alert('Muvaffaqiyatli!!!')
// }


// karra jadvali

const karraSon = 6

// for (let i = 0; i <= 10; i++){
//     const natija = i * karraSon
//     console.log(`${i} * ${karraSon} = ${natija}`)
// }
