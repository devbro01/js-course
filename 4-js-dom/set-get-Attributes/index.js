// ********** Lesson - 45 **************

// const link = document.querySelector('a')
// console.log(link.getAttribute('href'))
// yangi metodlar getAttribute() setAttribute()

// link.setAttribute('href', 'https://yandex.ru')
// link.textContent = 'Go to yandex`s main page'

// const text = document.querySelector('p')
// console.log(text.getAttribute('class'))
// text.setAttribute('class', 'omadli')
// 
// text.setAttribute('style', 'color: red')
// text.setAttribute('id', 'salom')

// java script orqali css ga style qoshish
// const header = document.querySelector('h1')
// qoshib beradi
// header.style.margin = '20px'
// header.style.fontSize = '35px'
// header.style.border = 'solid black 2px'
// // butunlay ozgartiradi
// header.setAttribute('style', 'color: blue')

// console.log(header.style)

// style qoshishning ossonroq usullari va add remove class

// const content = document.querySelector('p')
// class qo`shish
// content.classList.add('success')
// class olib tashlash
// content.classList.remove('success')

// content.classList.add('error')

// console.log(content)

// const result = document.querySelectorAll('p')

// result.forEach((text) => {
//     if (text.textContent.includes('success')) {
//         text.classList.add('success')
//     }

//     if (text.textContent.includes('error')) {
//         text.classList.add('error')
//     }
// })

// toggle - yoq bolsa qoshadi bor bolsa olib tashlaydi!

// const header = document.querySelector('h1')
// qoshyapti
// header.classList.toggle('success')
// ayiryapti
// header.classList.toggle('success')
