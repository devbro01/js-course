const requist = new XMLHttpRequest();

requist.addEventListener('readystatechange', () => {
    if (requist.readyState === 1) {
        console.log('Server bilan aloqa o`rnatildi')
    } else if (requist.readyState === 2) {
        console.log('So`rovingiz keldi')
    } else if (requist.readyState === 3) {
        console.log('So`rovingiz tayyorlanmoqda')
    } else if (requist.readyState === 4) {
        console.log('Congrats!!!')
        console.log(requist.responseText)
    }
    // if (requist.readyState === 4) {
    //     console.log(requist.responseText)
    // }
})

// open
requist.open('GET', 'https://jsonplaceholder.typicode.com/todos')

// send
requist.send()

