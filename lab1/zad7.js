let tab = [2, 4, 6, 12, 3, 6, 12, 18, 18, 5, 4, 6]
let counter = {}

for(i=0;i<tab.length;i=i+1){
    if(!counter[tab[i]]){
        counter[tab[i]] = 1
    }else{
        counter[tab[i]] = counter[tab[i]] + 1
    }
}

for(item in counter){
    if(counter[item]===1){
    console.log("Liczba " + item + " występuje " + counter[item] + " raz")
    }else{
        console.log("Liczba " + item + " występuje " + counter[item] + " razy")
    }
}