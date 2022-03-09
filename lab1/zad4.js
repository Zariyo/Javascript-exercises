let tabl = [2,2,3]
let maks = tabl[0]
let rest = 0
if(tabl.length==3){
    for(i=0;i<tabl.length;i=i+1){
        if(tabl[i]>0){
            if(tabl[i]>maks){
                maks=tabl[i]
                rest=(tabl[(i+1)%(tabl.length-1)]+tabl[(i+2)%(tabl.length-1)])
            }
        }else{
            console.log("Liczby sa ujemne")
        }
    }
    if(maks<=rest){
        console.log("Mozna zbudowac trojkat")
    }else{
        console.log("Nie mozna zbudowac trojkatu")
    }
}