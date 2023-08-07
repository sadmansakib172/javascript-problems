let date1 = '27-03-2021';
let date2 = '28-04-2021';
function findDays(date1, date2){
    let d1 = new Date(date1);
    let d2 = new Date(date2);
    let difference = d2.getTime() - d1.getTime();
    let output =Math.floor(difference/ (24 * 60 *60 * 1000));
    
    return output;

}

let result = findDays(date1, date2);
console.log(result);