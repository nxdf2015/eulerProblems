// return sum  even number less than max of the fibonacci sequence  

function * fibonacci(max,first,second){
    let i = second;
    let j = first;
    while (i < max ){
        [i,j]=[i+j,i];
        if ( i % 2 == 0)
           yield i;
        }
}

function sumEven(max,first,second){
    return [first,second].concat([...fibonacci(max,first,second)]).reduce((c,x) => c + x);
}



