const employeeData = [
    { name: "Ram", age: 30, salary: 45000, designation: "Software Engineer", city: "New York", department: "Engineering" },
    { name: "Sham", age: 28, salary: 50000, designation: "Marketing Manager", city: "Los Angeles", department: "Marketing" },
    
];

const employeeContainer = document.getElementById("employees");

function createEmployeeCard(employee) {
    const card = document.createElement("div");
    card.classList.add("employee-card");

    const nameHeading = document.createElement("h3");
    nameHeading.textContent = employee.name;
    card.appendChild(nameHeading);

    const detailsList = document.createElement("ul");
    detailsList.classList.add("details-list"); 

    const ageItem = document.createElement("li");
    ageItem.textContent = `Age: ${employee.age}`;
    detailsList.appendChild(ageItem);

    const salaryItem = document.createElement("li");
    salaryItem.textContent = `Salary: $${employee.salary}`;
    detailsList.appendChild(salaryItem);

    const designationItem = document.createElement("li");
    designationItem.textContent = `Designation: ${employee.designation}`;
    detailsList.appendChild(designationItem);

    const cityItem = document.createElement("li");
    cityItem.textContent = `City: ${employee.city}`;
    detailsList.appendChild(cityItem);

    const departmentItem = document.createElement("li");
    departmentItem.textContent = `Department: ${employee.department}`;
    detailsList.appendChild(departmentItem);

    card.appendChild(detailsList);

    return card;
}

employeeData.forEach((employee) => {
    const card = createEmployeeCard(employee);
    employeeContainer.appendChild(card);
});
