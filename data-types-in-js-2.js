
//? ITERATING

let personsMap = new Map();
personsMap.set('Lior Agami', {age:29, role:'Full-stack Web Developer', experience:'3 Years+'});

for([key, value] of personsMap){
	console.log(key,value); //Lior Agami {age: 29, role: "Full-stack Web Developer", experience: "3 Years+"}
}

personsMap.forEach((value, key) => console.log(key,value)); //Lior Agami {age: 29, role: "Full-stack Web Developer", experience: "3 Years+"}

//------------------------------------------------------------------------------------------------------------------------------------------------------//

let personsObj = { 'Lior Agami':{age:29, role:'Full-stack Web Developer', experience:'3 Years+'} };

for (const [key, value] of Object.entries(personsObj)) { //Lior Agami {age: 29, role: "Full-stack Web Developer", experience: "3 Years+"}
	console.log(key,value);
}

personsObj.forEach((value, key) => console.log(key,value)); //Uncaught TypeError: personsObj.forEach is not a function

Object.entries(personsObj).forEach((value, key) => console.log(key,value));
//["Lior Agami", {age: 29, role: "Full-stack Web Developer", experience: "3 Years+"}]
