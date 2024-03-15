const getTodos = (resource) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
    //   console.log(request.readyState,request);
      if (request.readyState === 4 && request.status == 200) {
        const data=JSON.parse(request.responseText)
        resolve(request.responseText);
      }else if(request.readyState===4){
        reject("Could not fech the data")
      }
    });

    request.open("GET", resource);
    request.send()
  });
};

//promise example
getTodos("https://jsonplaceholder.typicode.com/todos/").then((data) => {
  console.log(data);
}).catch(err=>{
    console.log(err)
});
