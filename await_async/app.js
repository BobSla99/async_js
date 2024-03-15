//Async Await

//ce anade async delante de la funcion,cuando se llama a una funcion asinc devuelve una promesa se pueden encadenar todas las promesas  que se quiera facilmente .con el retuern se devuelve el dato que se va a abteenr en el .then ,Tambienhay que capturar el error con el .catch
const getTodos = async () => {
  //el codigo se detiene hasta que se complete el fech
  const response = await fetch("roberto.json");

  //no es necesario throw un error pero se puede hacer si se quiere
  if (response.status !== 200) {
    throw new Error("Cannot fech the data");
  }
  const data = await response.json();

  return data;
};

//para acceder a la data de getTodo se utiliza el .then
getTodos()
  .then((data) => console.log("resolve", data))
  .catch((err) => console.log("rejected", err));
