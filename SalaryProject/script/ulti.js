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

//format date
export function formatDate(today) {
  let dateToday = new Date(today);

  let formats = {
    weekday: "long",
    year: "numeric",
    month: "numeric",
    day: "numeric",
  };

  let formattedDate = dateToday.toLocaleDateString("vi-VN", formats);
  return formattedDate;
}
