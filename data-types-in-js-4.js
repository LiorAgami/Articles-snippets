
//? Convert to JSON

let personsObj = { 'Lior Agami':{age:29, role:'Full-stack Web Developer', experience:'3 Years+'} };

JSON.stringify(personsObj); //{"Lior Agami":{"age":29,"role":"Full-stack Web Developer","experience":"3 Years+"}}

//------------------------------------------------------------------------------------------------------------------------------------------------------//

let personsMap = new Map();
personsMap.set('Lior Agami', {age:29, role:'Full-stack Web Developer', experience:'3 Years+'});

JSON.stringify(personsMap); //{}
JSON.stringify(...personsMap); //["Lior Agami",{"age":29,"role":"Full-stack Web Developer","experience":"3 Years+"}]



