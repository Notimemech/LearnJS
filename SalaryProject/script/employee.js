/*
Employee class that have name, start, end, ship
*/
export class Employee {
  id;
  name;
  start;
  end;
  ship;

  constructor(name, start, end, ship, id) {
    this.name = name;
    this.start = start;
    this.end = end;
    this.ship = ship;
    this.id = id;
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

export class EmployeeToday {
  Employee;
  date;

  constructor(employee, date) {
    this.Employee = employee;
    this.date = date;
  }

  static fromJSON(obj) {
    return new EmployeeToday(obj.Employee, obj.date);
  }
}
