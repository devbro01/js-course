// objects

// const user = {
//     name: 'Ozodbek',
//     age: 15,
//     email: 'mygame75484@gmail.com',
//     langs: ['uzbek', 'russian', 'english', 'korean'],
//     country: 'Uzbekistan',
//     login: function() {
//         console.log('Siz sayitga ro`yxatdan o`tdingiz!')
//     },
//     logout: function() {
//         console.log('Siz sayitdan chiqib ketdingiz')
//     },
    // speak: function() {
    //     // console.log(this.lang)
    //     console.log("I can speac:")
    //     this.langs.forEach((lang) => {
    //         console.log(lang)
    //     })
    // },
// }

// console.log(user)

// user.age = 18

// console.log(user.age)

// user['age'] = 19

// console.log(user['age'])

// objects - methods

// user.speak()

// this

// user.speak()


// objectlar arrayda

// const movies = [
//     { name: 'Wednesday', likes: 450 },
//     { name: 'HarryPotter', likes: 250 },
//     { name: 'Jacob', likes: 890 },
//     { name: 'Understand_5', likes: 647 },
// ]

// movies.forEach((movie) => {
//     const result = `Kino nomi ${movie.name} va u 🎥 ${movie.likes} ♥ ta layk to'plagan!`
//     console.log(result)
// })

//
//
//

// test - praktika

// const user = {
//     name: 'Ozodbek',
//     age: 15,
//     movies: [
//         { name: 'Wednesday', likes: 450 },
//         { name: 'HarryPotter', likes: 250 },
//         { name: 'Jacob', likes: 890 },
//         { name: 'Understand_5', likes: 647 },
//     ],
//     // beautifull format movies at function
//     listMovies: function() {
//         this.movies.forEach(format => {
//             console.log(`Kino nomi ${format.name} va u 🎥 ${format.likes} ♥ ta layk to'plagan!`)
//         });
//     }
// }

// user.listMovies()