/* 

// OBSERVABLES //

// Basic static view model
var staticVM = {
	personName: 'Bob',
	personAge: 123
};

// Activate KO gloabably
// ko.applyBindings(staticVM);

// Activate KO tageted
var header = document.getElementById('header');
ko.applyBindings(staticVM, header); // 1. Veiw Model 2. Target Data Bind

*/

/*

// Observable VM
var observableVM = {
	personName: ko.observable('Bob'),
	personAge: ko.observable(123)	
};

ko.applyBindings(observableVM);

// Reading observables
var somePerson = observableVM.personName(); // Call like a function, no param returns value
console.log(somePerson);

// Writing observables
observableVM.personName('Poop'); // Call with param updates value
somePerson = observableVM.personName();
console.log(somePerson);

*/

/*

// Observable Arrays
var myObservableArray = ko.observableArray();    // Initially an empty array
myObservableArray.push('Some value'); 			 // Adds value

// Indexof Array (most array methods work the same as vanila JS)
var valueAtIndex = myObservableArray.indexOf('Some value');
console.log(valueAtIndex);

// This observable array initially contains three objects
var anotherObservableArray = ko.observableArray([
    { name: "Bungle", type: "Bear" },
    { name: "George", type: "Hippo" },
    { name: "Zippy", type: "Unknown" }
]);

// Reading observable array
var arrayLength = anotherObservableArray().length;
console.log(arrayLength);

var arrayItemAt = anotherObservableArray()[0];
console.log(arrayItemAt);

*/

/*

// COMPUTED OBSERVABLES //

// VM Class
function AppViewModel() {
	var self = this; // Protect 'this' from being accedentally hijaked

	self.firstName = ko.observable('Bobert');
	self.lastName = ko.observable('Maget');

	self.fullName = ko.computed(function() {
    	return self.firstName() + " " + self.lastName();
    }, self);
};

// Activate KO
ko.applyBindings(AppViewModel);

*/

console.log("Is this thing on?");