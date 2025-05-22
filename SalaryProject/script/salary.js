import { Validation } from "./ulti.js";
import { Employee } from "./employee.js";
import { EmployeeToday } from "./employee.js";
import { formatDate } from "./ulti.js";
import "./ulti.js";

// Save data to local storage

let EmployeeArray = [];

const rawData = localStorage.getItem("employeeArray");

if (rawData) {
  const parsed = JSON.parse(rawData);
  if (Array.isArray(parsed) && parsed.length > 0) {
    EmployeeArray = parsed.map(EmployeeToday.fromJSON);
  }
}

//get the input in html
let addButton = document.querySelector(".js-submit-button");
let nameInput = document.querySelector(".js-name-input");
let startInput = document.querySelector(".js-start-input");
let endInput = document.querySelector(".js-end-input");
let shipInput = document.querySelector(".js-ship-input");
let dateInput = document.querySelector(".js-date-input");

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

//print out the employee list
const printEmp = function () {
  EmployeeArray.forEach((employee) => {
    let today = formatDate(employee.date);
    console.log(employee);
    let html = `
        <tr class = "table-row">
          <td class="date">${today}</td>
          <td class="name">${employee.Employee.name}</td>
          <td>${employee.Employee.start}</td>
          <td>${employee.Employee.end}</td>
          <td>${employee.Employee.end - employee.Employee.start}</td>
          <td>${(employee.Employee.end - employee.Employee.start) * 20000}</td>
          <td>${employee.Employee.ship}</td>
          <td>${employee.Employee.ship * 6000}</td>
          <td>${
            (employee.Employee.end - employee.Employee.start) * 20000 +
            employee.Employee.ship * 6000
          }</td>
          <td><button class="js-delete-button delete-button">Delete</button></td>
        </tr>
        `;

    employeeHTML += html;
  });

  document.querySelector(".table").innerHTML = employeeHTML;

  dateInput.value = "";
  nameInput.value = "";
  startInput.value = "";
  endInput.value = "";
  shipInput.value = "";
};

//print out local input
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

//on click event of submit button
addButton.addEventListener("click", () => {
  if (
    dateInput.value === "" ||
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
      shipInput.value,
      undefined
    );

    let today = new Date(dateInput.value);

    let empToday = new EmployeeToday(emp, today);

    EmployeeArray.push(empToday);
    empToday.Employee.id = EmployeeArray.indexOf(empToday);
    console.log(empToday.Employee);
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
    console.log(EmployeeArray);
    localStorage.setItem("employeeArray", JSON.stringify(EmployeeArray));
  }
});

//onclick event for reset button
const resetButton = document.querySelector(".js-reset-button");

resetButton.addEventListener("click", () => {
  EmployeeArray = [];
  localStorage.removeItem("employeeArray");
  printEmp();
  console.log(EmployeeArray);
  document.querySelector(".table").innerHTML = employeeHTML;
});

let deleteButton = document.querySelector(".js-delete-button");

// deleteButton.addEventListener("click", () => {});
