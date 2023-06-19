const IS_PART_TIME = 2, IS_FULL_TIME = 1, PART_TIME_HRS = 4, FULL_TIME_HRS = 8, WAGE_PER_HR = 20;
let empHrs = 0;
const NUM_OF_WORKINGDAYS = 20;
for (let day = 0; day < NUM_OF_WORKINGDAYS; day++)
{
    let empCheck = Math.floor(Math.random() * 10) % 3;
    empHrs += getEmpHrs(empCheck);
}
function getEmpHrs(empCheck)
{
    switch (empCheck)
    {
        case IS_FULL_TIME:
            console.log("Employee present with Full time");
            return FULL_TIME_HRS;
            break;
        case IS_PART_TIME:
            console.log("Employee present with Part time");
            return PART_TIME_HRS;
            break;
        default:
            console.log("Employee is Absent");
            return 0;
            break;
    }
}
let Emp_Wage = empHrs * WAGE_PER_HR;
console.log("Total Employee wage is: " + Emp_Wage);