
class Employee{

    public fullName:string;
    public age:number;
    private salary:number = 44443;
    protected randomDetails:boolean = true;
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

class Coupon extends Employee{

    public amount:number;

    constructor(fullName:string,age:number,amount:number){
        super(fullName,age);
        this.amount = amount;
    }

    getRandomDetails(){
        return this.randomDetails;
    }

}

let salmanObj = new Coupon("salman",33,4444);
// console.log(salmanObj.randomDetails);

