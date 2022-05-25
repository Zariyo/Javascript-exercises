// setTimeout uruchamia wyrażenie jednokrotnie po danym czasie
// setInterval uruchamia wyrażenie kilkukrotnie co dany interwał

setTimeout(() => console.log("Timeout"), 200)

let interval = setInterval(() => console.log("Interval"), 200)

setTimeout(() => { clearInterval(interval); console.log("Interval Stop") }, 5000);
