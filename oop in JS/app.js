let a;

class Person { // class
    /*
        1 - Properties
        2 - Constructor
        3 - Methods
    */
    constructor(firstName, lastName, age, salary) { // constructor method
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.salary = salary;
    }

    showInfo() {
        console.log(
            ` First Name: ${this.firstName} 
              Last Name: ${this.lastName}
              Age: ${this.age}
              Salary: ${this.salary}`
        );
    }
}

const person1 = new Person("Nihal", "Bayraktar", 23, 10000);
const person2 = new Person("Hilal", "Alyakir", 24, 7500);

console.log(person1.firstName);  // Nihal
console.log(person2.firstName);  // Hilal
// person1.showInfo()
// person2.showInfo()
