//HTTP request Metodo antiguo
//creo mi request
const request = new XMLHttpRequest();

//creo un evento para saber cuandeo combia su estado
request.addEventListener("readystatechange", () => {
  //   console.log(request, request.readyState);
  if (request.readyState === 4 && request.status === 200) {
    console.log(request.responseText);
  } else if (request.readyState === 4) {
    console.log("Could not fecht the data ");
  }
});

request.open("GET", "https://jsonplaceholder.typicode.com/todos/");
request.send();
