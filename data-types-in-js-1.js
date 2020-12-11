
//? Declaring, Setting & Getting properties/keys

let personObj1 = {}; // Empty
let personObj2 = new Object(); // By constructor - Empty
let personObj3 = new Object; // Same result as personObj2 declaration
let personObj4 = {name: 'Lior Agami'}; // With 1 key (name)

personObj1['name'] = 'Lior Agami';
personObj1.name // 'Lior Agami'
personObj1.hasOwnProperty('name') // true

let personMap1 = new Map();

//! This is the WRONG way to set a Map's props
//! That way of setting a property does not interact with the Map data structure.
//! It uses the generic object features.
personMap1['name'] = 'Lior Agami';
personMap1.has('name') // false
personMap1.delete('name') // false

//* This is the CORRECT way to set a Map's props
personMap1.set('name', 'Lior Agami');
personMap1.get('name') // 'Lior Agami'
personMap1.has('name') // true
personMap1.delete('name') // true

let someKeyFunc = () => {}
personMap1.set(someKeyFunc, 'The value of someKeyFunc');
personMap1.get(someKeyFunc); // 'The value of someKeyFunc'
personMap1.has(someKeyFunc) // true
personMap1.delete(someKeyFunc) // true

