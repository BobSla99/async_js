const getTodo = (resource) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
      if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        resolve(data);
      }else if(request.readyState===4){
        reject("Could not fecht the data Err");
      }
    });
    request.open("GET", resource);
    request.send();
  });
};

getTodo("roberto.json").then(data=>{
    console.log("promise 1 resolve",data)
    return getTodo("guille.json");
}).then(data=>{
    console.log("promises 2 resolve",data);
    return getTodo("yadira.json");
}).then(data=>{
    console.log("promise 3 resolved",data)
}).catch(err=>{
    console.log(err);
});
