//!INHERITANCE CONCEPT

// 'this' refers to the current instance

//!keywords introduced with inheritance:
// super: refers to the parent class
// super(): calls the parent class constructor

// base class
class Person {

    constructor(firstName, lastName, salary) {
        // instance properties
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }

    // method to display person info
    writeInfo() {
        console.log(this.firstName, this.lastName, this.salary)
    }
}

// child class that inherits from Person
class Student extends Person {
    
    constructor(firstName, lastName, salary) {
        // Call the parent class constructor
        super(firstName, lastName, salary);
    }

    // override writeInfo but still call parent's version
    writeInfo() {
        super.writeInfo();
    }
}

// another child class that inherits from Person
class Engineer extends Person {
    
    constructor(firstName, lastName, salary) {
        // Call the parent class constructor
        super(firstName, lastName, salary);
    }

    // override writeInfo but still call parent's version
    writeInfo() {
        super.writeInfo();
    }
}

// creating instances of subclasses
const student1 = new Student("Enes", "Bayram", 10000);
const engineer1 = new Engineer("Aysun", "Meral", 14000);

// calling the inherited method
student1.writeInfo();
engineer1.writeInfo();
