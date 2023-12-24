// json va requistlar
const getTodos = (resurce) => {
  return new Promise((resolve, rejact) => {
    const requist = new XMLHttpRequest();

    requist.addEventListener("readystatechange", () => {
      if (requist.readyState === 4 && requist.status === 200) {
        const data = JSON.parse(requist.responseText);
        resolve(data);
      } else if (requist.readyState === 4) {
        rejact("Nimadur hato ketdi!");
      }
    });

    requist.open("GET", resurce);
    requist.send();
  });
};

getTodos("./list.json")
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

// tartibsiz yo`l - callback hell
// getTodos("./list.json", (error, data) => {
//   console.log(data);
//   getTodos("./list.json", (error, data) => {
//     console.log(data);
//   });
//   getTodos("./list.json", (error, data) => {
//     console.log(data);
//   });
//   getTodos("./list.json", (error, data) => {
//     console.log(data);
//   });
// });

// const internet = false;

// const getData = () => {
//   return new Promise((resolve, reject) => {
//     // serverga so'rob jonatamiz
//     if (internet) {
//       console.log("Internet yoniq");
//     } else {
//       console.log("Internetingiz o`chiq");
//     }
//   });
// };

// getData().then((data) => {
//   console.log(data)
// }).catch((data) => {
//   console.log(data)
// })
