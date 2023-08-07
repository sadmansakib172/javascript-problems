let input = [
    { name: "John", age: 21, city: "New York" },
    { name: "Mike", age: 28, city: "Moscow" },
    { name: "Danny", age: 30, city: "London" },
    { name: "Lisa", age: 26, city: "Paris" },
    { name: "Sophie", age: 19, city: "Berlin" },
  ];

  function nameOutput(input){
    let emptyArray = [];
    for(let i = 0; i<input.length; i++){
        let singleInput = input[i];
        let singleName = singleInput['name'];
        emptyArray.push(singleName);

    }
    return emptyArray;
  }
  let output = nameOutput(input);
  console.log(output);