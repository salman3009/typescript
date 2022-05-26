class Employee{

    public fullName:string;
    public age:number;
    private salary:number = 44443;
    constructor(fullName:string,age:number){
        this.fullName = fullName;
        this.age = age;
    }

    getDetails():string{
        return this.fullName;
    }
    
    private getSalaryDetails():number{
        return this.salary;
    }

    getDetailsOfPrivacy():number{
     let result = this.getSalaryDetails();
     return result;
    }

    
}

let salmanObj = new Employee("salman",33);
console.log(salmanObj);
console.log(salmanObj.getDetails());
console.log(salmanObj.age);
console.log(salmanObj.getDetails());