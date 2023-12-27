// odl and hard version of requist
const API = "https://restcountries.com/v3.1/all";

const getData = (resurce) => {
  return new Promise((aprove, rejact) => {
    const requist = new XMLHttpRequest();

    requist.addEventListener("readystatechange", () => {
      if (requist.readyState === 4 && requist.status === 200) {
        const data = JSON.parse(requist.responseText);
        aprove(data);
      } else if (requist.readyState === 4) {
        rejact("Hatolik yuz berdi ) ;");
      }
    });

    requist.open("GET", resurce);
    requist.send();
  });
};

// getData(API)
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// -------- yangi va tushunarli qisqa usulimiz : ) --------
fetch(API)
  .then((data) => {
    return data.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
