//HTTP request Metodo antiguo
//creo mi request

function getTodos(callback) {
  const request = new XMLHttpRequest();

  //creo un evento para saber cuandeo combia su estado

  request.addEventListener("readystatechange", () => {

    if (request.readyState === 4 && request.status === 200) {
        callback(undefined,request.responseText);
    } else if (request.readyState === 4) {
        callback("could not fech data",undefined);
    }
  });

//   request.open("GET", "https://jsonplaceholder.typicode.com/todos/");
  request.open("GET", "/cap3_callback/my_todos.json");
  request.send();
}

getTodos((err,dataJSON) => {
    if(err){
        console.log(err)
    }else{
        const data=JSON.parse(dataJSON)
        console.log(data);
    }

});
