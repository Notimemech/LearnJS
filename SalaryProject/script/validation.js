export class Validation {
  checkEmployeeExisted(employeeArray, checkedEmployee) {
    employeeArray.forEach((employee) => {
      if (employee.id === checkedEmployee.id) {
        return employee;
      } else return checkedEmployee;
    });
  }
}

console.log("hello");
