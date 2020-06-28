export let a = 1;
export let b = 222;
let c = [document.createEvent('Event').timeStamp, performance.now()]
let d = [new Date().getTime(), new Date().getTime()]
console.log(c);
console.log(d);
setTimeout(()=>{
  a = 2
}, 1000);
