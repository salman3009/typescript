var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = /** @class */ (function () {
    function Employee(fullName, age) {
        this.salary = 44443;
        this.randomDetails = true;
        this.fullName = fullName;
        this.age = age;
    }
    Employee.prototype.getDetails = function () {
        return this.fullName;
    };
    Employee.prototype.getSalaryDetails = function () {
        return this.salary;
    };
    Employee.prototype.getDetailsOfPrivacy = function () {
        var result = this.getSalaryDetails();
        return result;
    };
    return Employee;
}());
var Coupon = /** @class */ (function (_super) {
    __extends(Coupon, _super);
    function Coupon(fullName, age, amount) {
        var _this = _super.call(this, fullName, age) || this;
        _this.amount = amount;
        return _this;
    }
    Coupon.prototype.getRandomDetails = function () {
        return this.randomDetails;
    };
    return Coupon;
}(Employee));
var salmanObj = new Coupon("salman", 33, 4444);
console.log(salmanObj.randomDetails);
