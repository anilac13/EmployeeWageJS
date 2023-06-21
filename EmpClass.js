class Employee{
    id;
    salary;
    gender;
    startDate;

    constructor(...parms){
        this.id = parms[0];
        this.name = parms[1];
        this.salary = parms[2];
        this.gender = parms[3];
        this.startDate = parms[4];
    }

    get name() { return this._name; }
    set name(name){
        let nameRegex = RegExp('^[A-Z][a-zA-Z]{2,}$');
        if (nameRegex.test(name))
        this._name = name;
        else throw "Name is Invalid";
    }

    toString(){
        const option = { year: "numeric", month: "long", day: "numeric" }
        const empDate = this.startDate === undefined ? "undefined" : this.startDate.toLocaleDateString("en-US", option);
        return "Id = "+this.id+", Name = "+this.name+", Salary = "+this.salary+", Gender = "+this.gender+", StartDate = "+empDate;
    }
}

let employee = new Employee(1, "Amaron", 3000);
console.log(employee.toString());
employee.id = 2;
employee.name = "James";
employee.salary = 1000;
console.log(employee.toString());

let employee1 = new Employee(3,"Ramya",2000,'F',new Date());
console.log(employee1.toString());

try{
    employee1.id = 4
    employee1.name = "Deamon";
    employee1.salary = 4000;
    employee1.gender = 'M';
    employee1.startDate = new Date();
    console.log(employee1.toString());
}
catch(error){
    console.error(error);
}