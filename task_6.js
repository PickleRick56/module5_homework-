let arr = ["orange", "orange", "orange"];


function compare(array){



    for(let i=1; arr.length>i; i++){

        if (arr[i]!==arr[i-1]){
            
        return false;
        }
        }
return true;
}


console.log(compare(arr));