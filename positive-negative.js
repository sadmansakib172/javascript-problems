let numbers = [1, 3, 5, 0, -7, -8, 5, 9];
function positiveNumbers(numbers){
    let positiveArray =[];
    for (let i = 0; i<numbers.length; i ++){
        let number = numbers[i];
        if(number < 0){
             break;
        }
        else{
           positiveArray.push(number);
        }
    }
    return positiveArray;
}

let result = positiveNumbers(numbers);
console.log(result);