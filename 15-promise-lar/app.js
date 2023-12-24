// simple Promise
// let internet = false;

// const check = () => {
//   return new Promise((resolve, reject) => {
//     if (internet) {
//       resolve("Internet mavjud ; )");
//     } else {
//       reject("Internetni yoqing iltimos!");
//     }
//   });
// };

// check()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((data) => {
//     console.log(data);
//   });

// -------- PROMISE CHAINING --------
const getTodos = (resurce) => {
  return new P((resolve, rejact) => {
    const requist = new XMLHttpRequest();

    requist.addEventListener("readystatechange", () => {
      if (requist.readyState === 4 && requist.status === 200) {
        const data = JSON.parse(requist.responseText);
        resolve(data);
      } else if (requist.readyState === 4) {
        rejact("Ma`lumotlarni olib bo`lmadi!");
      }
    });

    requist.open("GET", resurce);
    requist.send();
  });
};

getTodos("./ahror.json")
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
