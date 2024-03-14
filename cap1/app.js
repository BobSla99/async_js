// asinc code vs synchronus code

console.log(1);
console.log(2);
setTimeout(() => {
  console.log("tarea extra ejecutada");
}, 2000);
console.log(3);
console.log(4);
