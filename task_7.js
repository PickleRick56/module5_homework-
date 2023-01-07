let arr = [0,1,4, "orange",6, "orange",null,5]
let even =0;
let odd=0;
let  zeroCounter=0;
console.log(typeof NaN);


for(let i=0; arr.length>i;i++){
    if( typeof arr[i]== 'number'     && !isNaN(arr[i])){

        if(arr[i]===0){
            zeroCounter+=1;
        }
        else if(arr[i]%2===0){
            even+=1;
        }
        else{
            odd+=1;
        }


    }
    else{
        continue;
    }
}


console.log(zeroCounter,even,odd);