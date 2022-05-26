interface Person{
    firstName:string;
    age:number;
    getAgeDetails:()=>number;
}

let obj:Person={
    firstName:"salman",
    age:33,
    getAgeDetails(){
        return this.age;
    }
}

class Employee implements Person{
    public firstName: string;
    public age: number;
    constructor(firstName:string,age:number){
        this.firstName = firstName;
        this.age = age;
    }
    getAgeDetails(){
        return this.age;
    }
}