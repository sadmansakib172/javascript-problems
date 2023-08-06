function paperRequirements(firstBook, secondBook, thirdBook){
    let firstBookRequiredPage = firstBook * 100;
    let secondBookRequiredPage = secondBook *200;
    let thirdBookRequiredPage = thirdBook * 300;
    let totalPage = firstBookRequiredPage + secondBookRequiredPage + thirdBookRequiredPage;
    return totalPage;
}

let totalpageRequired = paperRequirements(1, 3, 6);
console.log(totalpageRequired);