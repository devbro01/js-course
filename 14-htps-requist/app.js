const getTodos = (callback) => {
  const requist = new XMLHttpRequest();

  requist.addEventListener("readystatechange", () => {
    if (requist.readyState === 4 && requist.status === 200) {
      console.log(requist.responseText);
    } else if (requist.readyState === 4) {
      console.log("hatolik!");
    }
  });

  requist.open("GET", "https://jsonplaceholder.typicode.com/todos");
  requist.send();
};


