let string ='javascript';
function output(string){
    let emptyString = '';
for(let i = string.length-1; i>=0; i--){
    let char = string[i];
    emptyString = emptyString + char;

}
return emptyString;

}

let gettingOutput = output(string);
console.log(gettingOutput);