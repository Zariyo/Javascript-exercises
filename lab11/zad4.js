function counter(x, y){
    const fun = (i=1) => {
        if(i!=x){
        console.log(i)
        setTimeout(()=> fun(i+=1),y)
        }
        else{
            console.log(i);
        }
    }
    return fun
}

fun = counter(10, 400)
fun()