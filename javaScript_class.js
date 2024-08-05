
// class Employee{
//     name = "sankar";
// }

// let emp_1 = new Employee();

// emp_1.name = "kumar";

// console.log(emp_1.name)

// let emp_2 = new Employee();

// emp_2.name = "sankar";

// console.log(emp_2.name)

class Employee{
    emp_name(){
        console.log(this.employee_name);
    }
}

let employee = new Employee();

employee.emp_name_1 = "sankar";

employee.emp_name_1();

