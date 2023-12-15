
async function test(){
    console.log("hello world!");
}

console.log("start");
setTimeout(() => {
  console.log("log 1");
}, 0);

await test();
Promise.resolve().then(() => {
  console.log("log 2");
}).catch((error) => {
  console.error("Error:", error);
});


console.log("log 3");