class Employee{
    //property
    id;
    salary;

    //constructor
    constructor(id,name,salary){
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    //getter and setter method
    get id() { return this._id; }
    set id(value){
        this._id = value;
    }

    get name() { return this._name; }
    set name(name) { 
        this._name = name; 
    }

    //method
    toString(){
        return "id = "+this.id+", name = "+this.name+", salary = "+this.salary;
    }
}
let employee = new Employee(1,"Rajeev",2000);
console.log(employee.toString());
employee.id = 2;
employee.name = "James";
employee.salary = 3000;
console.log(employee.toString());