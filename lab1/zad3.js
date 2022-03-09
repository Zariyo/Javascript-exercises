let tab = [15, -12, 17, 6, 5, 6, -4, -6, 4, 8]
let min = tab[0]
let max = tab[0]
for(i=0;i<=tab.length-1;i=i+1){
    console.log(tab[i])
    if(tab[i]<min){
        min=tab[i]
    }
    if(tab[i]>max){
        max=tab[i]
    }
}
console.log(max)
console.log(min)
let newtab = []
for(i=tab.length-1;i>=0;i=i-1){
    newtab.push(tab[i])
}
tab = newtab
console.log(tab)