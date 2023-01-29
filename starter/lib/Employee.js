// TODO: Write code to define and export the Employee class
class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    console.log(`${this.email}`);
    return this.email;
  }

  getRole() {
    return Employee;
  }
}

const tobi = new Employee("tobi", 10, "calebibejigba@gmail.com");

tobi.getEmail();


module.exports = Employee