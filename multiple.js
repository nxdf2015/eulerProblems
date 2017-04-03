// Find the sum of all the multiples of 3 or 5 below 1000.

function isMultiple(i,numbers){
   
  return   numbers.some(n => i % n == 0);
}

function * multiple(start,end,...numbers){
    let i = start;
    console.log(numbers);
    while ( i <= end){
        if (isMultiple(i,numbers))
            {console.log(i);
            yield i;}
            i++;
    }
}

function sumMultiple(start,end){
 return  [...multiple(start,end,3,5)].reduce( (c,x) => c + x);
}





