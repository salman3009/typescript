var Employee = /** @class */ (function () {
    function Employee(fullName, age) {
        this.salary = 44443;
        this.fullName = fullName;
        this.age = age;
    }
    Employee.prototype.getDetails = function () {
        return this.fullName;
    };
    return Employee;
}());
var salmanObj = new Employee("salman", 33);
console.log(salmanObj);
console.log(salmanObj.getDetails());
console.log(salmanObj.age);
console.log(salmanObj.salary);
