const result = document.querySelectorAll('p')

result.forEach((text) => {
    if (text.textContent.includes('success')) {
        text.classList.add('success')
    }

    if (text.textContent.includes('error')) {
        text.classList.add('error')
    }
    if (text.textContent.includes('netrual')) {
        text.classList.add('maybe')
    }
})