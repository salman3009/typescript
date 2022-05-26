class Employee{
    public readonly empCode:number;
    constructor(empCode){
        this.empCode = empCode;
    }

}

let obj = new Employee(33);
obj.empCode = 33;
