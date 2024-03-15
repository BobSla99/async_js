//fech Api

//buscamos la url
fetch("roberto.json")
  .then((response) => {
    //esto devuelve response
    console.log("resolved", response);
    return response.json();//usamos el metodo .json devuekve una promesa
  })
  .then((data) => {//capturamos el dato del json
    console.log(data);
  })
  .catch((err) => {
    console.log("rejected", err);
  });


//forma abreviada
fetch("roberto.json")
  .then((response) => response.json())
  .then((json) => console.log(json));
