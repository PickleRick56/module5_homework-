const variable = [];


if (typeof variable == "boolean") {
   console.log( 'логический');

}
else if(typeof variable == "string" ){
    console.log( 'строка');

}
else if(typeof variable == "number" ){

    if(isNaN(variable)){
        console.log('Тип иx не определён');
    }else{
        console.log( 'число'); 
    }

    

}

else{
    console.log('Тип x не определён');
}