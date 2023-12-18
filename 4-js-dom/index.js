// DOM - DOCUMENT OBJECT MODEL

// html dagi elementlarni tagname` orqali olish
// const out = document.getElementsByTagName('li')

// console.log(out.length)

// html dagi Elementlarni classi orqali olish
// const result = document.getElementsByClassName('list-name')

// console.log(result)

// html dagi biror` bir elementni ID si orqali olish 
// const result = document.getElementById('click-btn')

// console.log(result)

// html dagi biror elementni tanlashni universal va kop qollaniladigan usuli

// agar class orqali oladigan bolsak
// let withClass = document.querySelector('.list-name')
// agar ID si oqali oladigan bo`lsak
// let withID = document.querySelector('#click-btn')
// agar html dagi bironta TAG bo'lsa 
// let withTag = document.querySelector('li')

// console.log(withTag)

// queryselectorall bir hil bolgan barchasini oladi

// elementlarning contentini ozgartirish

// const title = document.getElementById('hello')
// innerHtml
// title.textContent += 'salom'

// LS larni ohiriga darslari so`zini qoshamiz Masalan: html darslari Js darslari

// const result = document.querySelectorAll('.list-name')

// result.forEach((item) => {
//     item.textContent += ' darslari'
//     console.log(item)
// })

// const title = document.getElementById('hello')
// title.innerHTML = "<i>Salom</i>"

// innerHTML

// textContent

// const names = ['Ahror', 'Sardor', 'Doniyor']
// const ol = document.querySelector('ol')

// names.forEach((item) => {
//     ol.innerHTML += `<li>${item}</li>`
// })

// Parent, Children & Sibling elementlar

// children

// const article = document.querySelector('article')

// console.log(article.children)
// array qilib chiqarish

// Array.from(article.children).forEach((item) => {
//     item.classList.add('article-child')
// })

// parent ushlash
const title = document.querySelector('h2')
// parent children
console.log(title.parentElement)
console.log(title.parentElement.parentElement)
console.log(title.children)
// ElementSibling
console.log(title.nextElementSibling)
console.log(title.previousElementSibling)
