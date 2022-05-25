let licznik = 0
let intervals = []
function startCounter(){
    intervals.push(setInterval(() => {licznik++;console.log(licznik)}, 1000))
    
}

function stopCounter(){
    clearInterval(intervals[0])
    intervals.shift()
}

function clearCounter(){
    licznik = 0
}