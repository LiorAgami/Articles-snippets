	//LETS START BY TRYING TO SOLVE THIS PROBLEM WITH AN OBJECT
	let skills = {};

	manageLength = (obj) => {
		// increments the `length` property of a given obj - we want to decrement on (delete obj.something)!
		obj.length = !obj.length ? 1 : ++obj.length;
	}

	addAngularSkill = (obj) => { // add angular skill to a given object and increment `length` prop
		obj.angular = 'Expert';
		manageLength(obj);

		// Object.seal(obj);

		// note that we can seal a given object in order to prevent props deletion
		// BUT when you go Object.seal -> YOU can never unseal.
		// so we want to protect the object in another similar way to getters/setters
		// BUT is it possible?
	}

	addAngularSkill(skills); //OUTPUT - {angular: "Expert", length: 1}


	// we can also define a setter for each property to manage this proccess
	// but I find it not very useful especially when objects props will change on runtime
	Object.defineProperty(skills, 'setReact', {
		set: function(val) {
			manageLength(this);
			return this.react = val;
		},

		// **** THERE IS NO METHOD FOR HANDLING DELETION.****
		// **** WE NEED IT IN ORDER TO DECREMET LENGTH PROPERTY WHEN DELETENG A KEY.****
	});

	skills.setReact = 'Intermediate'; //OUTPUT - {angular: "Expert", length: 2, react: "Intermediate"}