let result = prompt("введите число");

if(result.match(/[a-zA-Z]/)){
    console.log( "Упс, кажется, вы ошиблись");
}
else if(typeof +result == 'number') {
    if (isNaN(result)) {
        console.log("Упс, кажется-NaN");
        
    }
    else{
        if(result%2===0){
            console.log('четное');
        }
        else{
            console.log('нечетное');
        }
    }

} else{
    console.log("Упс, кажется-NaN");
}








// if (typeof result === 'number') {
//     if (isNaN(result)) {
//         console.log("Упс, кажется-NaN");
        
//     }
//     else{
//         if(result%2===0){
//             console.log('четное');
//         }
//         else{
//             console.log('нечетное');
//         }
//     }

// }
// else{
//     console.log('Упс, кажется, вы ошиблись');
// }




// console.log(typeof result, result);