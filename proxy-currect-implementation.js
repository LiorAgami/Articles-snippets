	//LETS SOLVE THIS PROBLEM WITH A PROXY
	let skills = {};

	// It is much simple to declare a setter that will manage all proxies properties!
	// We have an extra method for prop deletion which is amazing and provides us more control.
	// This lengthHandler operations will cost us O(1) instead of O(N) -> Object.Values(skills).length
	const lengthHandler = {
		set(target, prop, value) {
			if(target[prop]) return target[prop] = value;

			target.length = !target.length ? 1 : ++target.length;
			return target[prop] = value;
		},
		deleteProperty(target, prop) {
			if(!target[prop]) throw new Error("Property doesn't exist!");

			delete target[prop];
			--target.length;
		}
	};

	const skillsProxy = new Proxy(skills, lengthHandler); // initiate the proxy with our handler & object

	skillsProxy.angular = 'Expert'; // skillsProxy - {length: 1, angular: "Expert"}
	skillsProxy.react = 'Intermediate'; // skillsProxy - {length: 2,  angular: "Expert", react: "Intermediate"}
	skillsProxy.vanillaJS = 'Amazing'; // skillsProxy - {length: 3, angular: "Expert", react: "Intermediate", vanillaJS: "Amazing"}

	delete skillsProxy.angular; // skillsProxy - {length: 2, react: "Intermediate", vanillaJS: "Amazing"}
	delete skillsProxy.react; // skillsProxy - {length: 1, vanillaJS: "Amazing"}
	delete skillsProxy.vanillaJS; // skillsProxy - {length: 0}

	delete skillsProxy.vanillaJS; // Error - Property doesn't exist!
