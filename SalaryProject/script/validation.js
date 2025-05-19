export class Validation {
  //check if there is employee in the array
  checkEmployeeExisted(employeeArray, checkedName) {
    employeeArray.forEach((employee) => {
      if (employee.name === checkedName) {
        return true;
      }
      return false;
    });
  }

  //find employee by name
  findEmployeeByName(employeeArray) {
    employeeArray.forEach((employee) => {
      if (checkEmployeeExisted(employeeArray, employee.name)) {
        return employee;
      }
    });
  }
}

console.log("hello");
