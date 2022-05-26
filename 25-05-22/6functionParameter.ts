function displayName(fullName:string,lastName?:string):void{
           console.log(fullName);
           console.log(lastName);
}

displayName("salman","g");
displayName("salman");


function displayNameOptional(fullName:string,lastName:string="g"):void{
    console.log(fullName);
    console.log(lastName);
}

displayNameOptional("salman","g");
displayNameOptional("salman");