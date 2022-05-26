class Circle{
    static PI:number = 3.14;
    static circumference(r){
        return 2*Circle.PI*r;
    }
}
console.log(Circle.PI);
console.log(Circle.circumference(33));