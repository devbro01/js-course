// json va requistlar
const getTodos = (resurce, callback) => {
  const requist = new XMLHttpRequest();

  requist.addEventListener("readystatechange", () => {
    if (requist.readyState === 4 && requist.status === 200) {
      const data = JSON.parse(requist.responseText);
      callback(undefined, data);
    } else if (requist.readyState === 4) {
      callback("Nimadur hato ketdi!", undefined);
    }
  });

  requist.open("GET", resurce);
  requist.send();
};

// tartibsiz yo`l - callback hell
getTodos("./list.json", (error, data) => {
  console.log(data);
  getTodos("./list.json", (error, data) => {
    console.log(data);
  });
    getTodos("./list.json", (error, data) => {
        console.log(data);
    });
        getTodos("./list.json", (error, data) => {
            console.log(data);
        });
});
