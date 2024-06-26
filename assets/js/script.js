// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector("#add-employees-btn");

// Collect employee data
const collectEmployees = function () {
  // Empty array to store employee objects
  const employees = [];

  // Loop to collect employee data
  while (confirm("Would you like to add an employee?")) {
    const firstName = prompt("Please enter the employees first name:");
    const lastName = prompt("Please enter the employees last name:");
    const salary = prompt("Please enter the salary of the employee:");

    // Create employee object and add to array
    const employee = {
      firstName: firstName,
      lastName: lastName,
      salary: parseFloat(salary),
    };
    employees.push(employee);
  }

  // Sort employees by last name
  return employees.sort(function (a, b) {
    return a.lastName.localeCompare(b.lastName);
  });
};

// Display the average salary
const displayAverageSalary = function (employeesArray) {
  let totalSalary = 0;

  // loop through employees to calculate total salary
  for (let i = 0; i < employeesArray.length; i++) {
    let salary = employeesArray[i].salary;
    totalSalary = totalSalary + salary;
  }

  // Calculate average salary
  const averageSalary = totalSalary / employeesArray.length;

  // Display average salary of employees in console
  return console.log(
    `The average employee salary between our ${employeesArray.length} employee(s) is ${averageSalary}`
  );
};

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  // Selects a random employee from the employees array
  const randomEmployee =
    employeesArray[Math.floor(Math.random() * employeesArray.length)];

  // Display random drawing winner in console
  return console.log(
    `Congratulations to ${randomEmployee.firstName} ${randomEmployee.lastName}, our random drawing winner!`
  );
};

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector("#employee-table");

  // Clear the employee table
  employeeTable.innerHTML = "";

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
};

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log("==============================");

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
};

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener("click", trackEmployeeData);
