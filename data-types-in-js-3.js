
//? Get the size/length

let personsMap = new Map();
personsMap.set('Lior Agami', {age:29, role:'Full-stack Web Developer', experience:'3 Years+'});

personsMap.size; // 1

//------------------------------------------------------------------------------------------------------------------------------------------------------//

let personsObj = { 'Lior Agami':{age:29, role:'Full-stack Web Developer', experience:'3 Years+'} };

personsObj.length; // undefined
Object.values(personsObj).length // 1
Object.entries(personsObj).length // 1
