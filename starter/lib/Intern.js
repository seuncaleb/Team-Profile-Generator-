// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, school) {

    super(name, id, email);
    this.school = school;
  }

  getSchool() {
    console.log(`${this.school}`);
    return this.school;
  }

  getRole() {
    const role = "Intern";
    return role;
  }
}

let intern = new Intern("tobi", "23", "asdfsfsf", "asdfafsdf");

intern.getSchool()

module.exports  = Intern