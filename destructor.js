let student={
    name: "John",
    age:28,
    qualification:"BE",
    Addrs: {
        no:21,
        street: "Raj street",
        City:"Madurai",
        Pin:625016
    }
}
const{name,Addrs}=student;
const{City,Pin}=Addrs;
console.log(City,Pin);
