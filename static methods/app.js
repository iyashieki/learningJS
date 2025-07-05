//! STATIC METHOD

//!If a function or property is static, it belongs to the CLASS
//!If not, it belongs to the OBJECT (instance)

class StringUtil {
  //* static method — belongs to the class
  static isNull() {

  }

  //* static method — belongs to the class
  static getCharacterLength() {

  }
}

// class Human {

        //*static property — shared by the class
//     static languagesCount = 10;

//     constructor(firstName, lastName, salary) {
        //* properties specific to each object (instance)
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.salary = salary;
//     }

//     writeInfo() {
        //* displays instance properties and tries to access static property incorrectly
//         console.log(this.firstName, this.lastName,
//             this.salary, this.languagesCount)
         //* this.languagesCount will be undefined because it's static and should be accessed via class
//     }
// }

 // const human1 = new Human("Enes", "Bayram", "10000");
 // human1.writeInfo(); // Calls the instance method

 //* correct way to access static property
console.log(Human.languagesCount);


// class Math {

    // *static method — accessed via class name
//     static add(a, b) {
//         console.log(a + b)
//     }

     //* instance method — accessed via object
//     subtract(a, b) {
//         console.log(a - b)
//     }

     //*static method — accessed via class name
//     static multiply(a, b) {
//         console.log(a * b)
//     }

     //*instance method — accessed via object
//     divide(a, b) {
//         console.log(a / b)
//     }
    
// }
//?TypeScript-style usage

// const math = new Math();
// math.add(10, 5);    //  add is static, should be called using Math.add
// math.multiply(5, 7) //  multiply is static, should be called using Math.multiply

//!If it's not defined as static, it is accessed via OBJECT
//!If it is defined as static, it is accessed via CLASS NAME


//! const stringUtil = new StringUtil(); // not needed for static methods
