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
    const role = "Employee";
    return role;
  }
}


let f = new Employee ("fred", 22, "jeunko ku")

console.log(f.getRole())

module.exports = Employee