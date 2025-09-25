const myJson = `{
  "company": "TechCorp Inc.",
  "departments": [
    {
      "id": 1,
      "name": "Engineering",
      "budget": 500000,
      "employees": [
        { "id": 101, "name": "Alice Johnson", "salary": 85000, "yearsAtCompany": 4, "projects": [1, 3] },
        { "id": 102, "name": "Bob Smith", "salary": 92000, "yearsAtCompany": 2, "projects": [1, 2, 4] },
        { "id": 103, "name": "Carol Davis", "salary": 78000, "yearsAtCompany": 5, "projects": [3] },
        { "id": 104, "name": "David Wilson", "salary": 95000, "yearsAtCompany": 3, "projects": [2, 4] }
      ]
    },
    {
      "id": 2,
      "name": "Marketing",
      "budget": 300000,
      "employees": [
        { "id": 201, "name": "Eva Brown", "salary": 65000, "yearsAtCompany": 1, "projects": [5] },
        { "id": 202, "name": "Frank Miller", "salary": 72000, "yearsAtCompany": 4, "projects": [5, 6] },
        { "id": 203, "name": "Grace Lee", "salary": 68000, "yearsAtCompany": 2, "projects": [6, 7] }
      ]
    },
    {
      "id": 3,
      "name": "Sales",
      "budget": 450000,
      "employees": [
        { "id": 301, "name": "Henry Clark", "salary": 70000, "yearsAtCompany": 3, "projects": [8, 9] },
        { "id": 302, "name": "Ivy Garcia", "salary": 75000, "yearsAtCompany": 6, "projects": [8, 9, 10] },
        { "id": 303, "name": "Jack Martinez", "salary": 68000, "yearsAtCompany": 2, "projects": [10] },
        { "id": 304, "name": "Karen Taylor", "salary": 82000, "yearsAtCompany": 4, "projects": [8] },
        { "id": 305, "name": "Leo Anderson", "salary": 79000, "yearsAtCompany": 1, "projects": [9, 10] }
      ]
    }
  ],
  "projects": [
    { "id": 1, "name": "Website Redesign", "budget": 50000, "departmentId": 1 },
    { "id": 2, "name": "Mobile App", "budget": 75000, "departmentId": 1 },
    { "id": 3, "name": "Database Optimization", "budget": 30000, "departmentId": 1 },
    { "id": 4, "name": "API Development", "budget": 45000, "departmentId": 1 },
    { "id": 5, "name": "Social Media Campaign", "budget": 25000, "departmentId": 2 },
    { "id": 6, "name": "Product Launch", "budget": 40000, "departmentId": 2 },
    { "id": 7, "name": "Market Research", "budget": 20000, "departmentId": 2 },
    { "id": 8, "name": "Client Portal", "budget": 35000, "departmentId": 3 },
    { "id": 9, "name": "Sales Training", "budget": 15000, "departmentId": 3 },
    { "id": 10, "name": "CRM Implementation", "budget": 60000, "departmentId": 3 }
  ]
}`;

const myObj = JSON.parse(myJson);

// ==============================
// 🔹 Average Salary (formatted)
// ==============================
const totalSalary = myObj.departments
  .flatMap(dept => dept.employees)
  .reduce((sum, emp) => sum + emp.salary, 0);

const averageSalaryPerDpt = Math.round(totalSalary / myObj.departments.length);

const pesoFormat = new Intl.NumberFormat("en-PH", {
  style: "currency",
  currency: "PHP"
}).format(averageSalaryPerDpt);

// ==============================
// 🔹 Employees with 2+ Projects
// ==============================
const has2OrMoreProjects = myObj.departments
  .flatMap(dept => dept.employees)
  .filter(emp => emp.projects.length >= 2)
  .map(emp => emp.name);

// ==============================
// 🔹 Departments Above Avg Size
// ==============================
const totalEmployees = myObj.departments.reduce(
  (acc, dept) => acc + dept.employees.length,
  0
);

const averageEmployeesPerDpt = totalEmployees / myObj.departments.length;

const aboveAveEmployeesDpt = myObj.departments
  .filter(dept => dept.employees.length > averageEmployeesPerDpt)
  .map(dept => dept.name);

// ==============================
// 🔹 Budget Per Department
// ==============================
let budgetPerDpt = "<strong>Budget per Department</strong>\n";

for (let i = 0; i < myObj.departments.length; i++) {
  budgetPerDpt += `${myObj.departments[i].name}: ${
    new Intl.NumberFormat("en-PH", {
      style: "currency",
      currency: "PHP"
    }).format(myObj.departments[i].budget)
  }\n`;
}

// ==============================
// 🔹 Employees for Promotion
// ==============================
const employeesForPromotion = myObj.departments
  .flatMap(dept => dept.employees)
  .filter(emp => emp.yearsAtCompany > 3)
  .map(emp => emp.name);

// ==============================
// 🔹 Console Output
// ==============================
console.log("Average salary per department: " + pesoFormat);
console.log("Employees with 2 or more projects: " + has2OrMoreProjects.join(", "));
console.log("Department(s) with above average employees: " + aboveAveEmployeesDpt.join(", "));
console.log(budgetPerDpt);
console.log("Employees qualified for promotion: " + employeesForPromotion.join(", "));