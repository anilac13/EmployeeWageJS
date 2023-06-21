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
    get id() { return this._id; }
    set id(id){
        let idRegex = RegExp('^[0-9]{1,}$');
        if (id>0){
            if (idRegex.test(id))
            this._id = id;   
        }
        else throw "Id is Invlaid";
    }
    get salary() { return this._salary; }
    set salary(salary){
        let salaryRegex = RegExp('^[0-9]{4,}$');
        if (salary>0){
            if (salaryRegex.test(salary))
            this._salary = salary;
        }
        else throw "Salary is Invalid";
    }
    get gender() { return this._gender; }
    set gender(gender){
        let genderRegex = RegExp('^[M?||F?]$');
        if (genderRegex.test(gender))
        this._gender = gender;
        else throw "Gender is Invalid";
    }
    get startDate() { return this._startDate; }
    set startDate(startDate){
        let date = Date.now();
        if (startDate<=date)
        this._startDate = startDate;
        else throw "Date is Invlaid";
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
    let empData = new Employee(4,"Revanth",1000,'m',new Date());
    console.log(empData.toString());
}
catch(error){
    console.error(error);
}