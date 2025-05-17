const xhr = new XMLHttpRequest();

xhr.addEventListener("load", () => {
  console.log(xhr.respone);
});

xhr.open("GET", "http://127.0.0.1:5500/oop.html");
xhr.send();
