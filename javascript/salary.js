//count to create unchangable id
let idCount = 0;

/*
Employee class that have id, name, start, end, ship
*/
class Employee {
  id;
  name;
  start;
  end;
  ship;

  constructor(name, start, end, ship) {
    this.name = name;
    this.start = start;
    this.end = end;
    this.ship = ship;
    this.id = idCount++;
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
}

// Employee array as sample database
const EmployeeArray = [
  new Employee("Phương Linh", 3, 9, 0),
  new Employee("Quang Anh", 3, 9, 0),
];

//get the input in html
let addButton = document.querySelector(".js-submit-button");
let nameInput = document.querySelector(".js-name-input");
let startInput = document.querySelector(".js-start-input");
let endInput = document.querySelector(".js-end-input");
let shipInput = document.querySelector(".js-ship-input");

let employeeHTML = `
    <tr>
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
const print = function () {
  EmployeeArray.forEach((employee) => {
    let html = `
        <tr>
          <td class="name">${employee.name}</td>
          <td>${employee.start}</td>
          <td>${employee.end}</td>
          <td>${employee.getSumHour()}</td>
          <td>${employee.getTotalHour()}</td>
          <td>${employee.ship}</td>
          <td>${employee.getTotalShip()}</td>
          <td>${employee.getTotal()}</td>
        </tr>
        `;

    employeeHTML += html;
    console.log(employee.id);
  });

  document.querySelector(".table").innerHTML = employeeHTML;
};

//on click event of submit button
addButton.addEventListener("click", () => {
  let emp = new Employee(
    nameInput.value,
    startInput.value,
    endInput.value,
    shipInput.value
  );

  EmployeeArray.push(emp);
  print(emp);
  employeeHTML = `
    <tr>
        <th class="name">Name</th>
        <th>Start</th>
        <th>End</th>
        <th>Sum Hour</th>
        <th>Total of Hour</th>
        <th>Ship</th>
        <th>Total of Ship</th>
        <th>Total Money</th>
      </tr>`;
});
