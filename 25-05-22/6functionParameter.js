function displayName(fullName, lastName) {
    console.log(fullName);
    console.log(lastName);
}
displayName("salman", "g");
displayName("salman");
function displayNameOptional(fullName, lastName) {
    if (lastName === void 0) { lastName = "g"; }
    console.log(fullName);
    console.log(lastName);
}
displayNameOptional("salman", "g");
displayNameOptional("salman");
