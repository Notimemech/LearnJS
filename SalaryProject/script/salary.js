import { Validation } from "./validation.js";

//import from validation class
let val = new Validation();

/*
Employee class that have name, start, end, ship
*/
class Employee {
  name;
  start;
  end;
  ship;

  constructor(name, start, end, ship) {
    this.name = name;
    this.start = start;
    this.end = end;
    this.ship = ship;
  }

  getSumHour() {
    return this.end - this.start;
  }

  getTotalHour() {
    return this.getSumHour() * 20000;
  }

  getTotalShip() {
    return this.ship * 6000;
  }

  getTotal() {
    return this.getTotalHour() + this.getTotalShip();
  }

  static fromJSON(obj) {
    return new Employee(obj.name, obj.start, obj.end, obj.ship);
  }
}

// Save data to local storage

let EmployeeArray = [];

const rawData = localStorage.getItem("employeeArray");

if (rawData) {
  const parsed = JSON.parse(rawData);
  if (Array.isArray(parsed) && parsed.length > 0) {
    EmployeeArray = parsed.map(Employee.fromJSON);
  }
}

//get the input in html
let addButton = document.querySelector(".js-submit-button");
let nameInput = document.querySelector(".js-name-input");
let startInput = document.querySelector(".js-start-input");
let endInput = document.querySelector(".js-end-input");
let shipInput = document.querySelector(".js-ship-input");

let employeeHTML = `
    <tr>
        <th class="date">Date</th>
        <th class="name">Name</th>
        <th>Start</th>
        <th>End</th>
        <th>Sum Hour</th>
        <th>Total of Hour</th>
        <th>Ship</th>
        <th>Total of Ship</th>
        <th>Total Money</th>
      </tr>`;

//print out the new input
const printEmp = function () {
  EmployeeArray.forEach((employee) => {
    console.log(employee);
    let html = `
        <tr>
          <td class="date">Date</td>
          <td class="name">${employee.name}</td>
          <td>${employee.start}</td>
          <td>${employee.end}</td>
          <td>${employee.end - employee.start}</td>
          <td>${(employee.end - employee.start) * 20000}</td>
          <td>${employee.ship}</td>
          <td>${employee.ship * 6000}</td>
          <td>${
            (employee.end - employee.start) * 20000 + employee.ship * 6000
          }</td>
        </tr>
        `;

    employeeHTML += html;
  });

  document.querySelector(".table").innerHTML = employeeHTML;

  nameInput.value = "";
  startInput.value = "";
  endInput.value = "";
  shipInput.value = "";
};

//print out local input
printEmp();

//on click event of submit button
addButton.addEventListener("click", () => {
  if (
    nameInput.value === "" ||
    startInput.value === "" ||
    endInput.value === "" ||
    shipInput.value === ""
  ) {
    alert("You must fill all the part");
  } else {
    let emp = new Employee(
      nameInput.value,
      startInput.value,
      endInput.value,
      shipInput.value
    );

    EmployeeArray.push(emp);
    printEmp();
    employeeHTML = `
    <tr>
        <th class="date">Date</th>
        <th class="name">Name</th>
        <th>Start</th>
        <th>End</th>
        <th>Sum Hour</th>
        <th>Total of Hour</th>
        <th>Ship</th>
        <th>Total of Ship</th>
        <th>Total Money</th>
      </tr>`;
    localStorage.setItem("employeeArray", JSON.stringify(EmployeeArray));
  }
});

//onclick event for reset button
const resetButton = document.querySelector(".js-reset-button");

resetButton.addEventListener("click", () => {
  EmployeeArray = [];
  localStorage.removeItem("employeeArray");
  console.log(EmployeeArray);
  document.querySelector(".table").innerHTML = employeeHTML;
});
