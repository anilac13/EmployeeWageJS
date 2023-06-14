const IS_PART_TIME = 2, IS_FULL_TIME = 1, PART_TIME_HRS = 4, FULL_TIME_HRS = 8, WAGE_PER_HR = 20;
let empHrs = 0;
let empCheck = Math.floor(Math.random() * 10) % 3;
switch (empCheck)
{
    case IS_FULL_TIME:
        empHrs = FULL_TIME_HRS;
        console.log("Employee present with Full time");
        break;
    case IS_PART_TIME:
        empHrs = PART_TIME_HRS;
        console.log("Employee present with Part time");
        break;
    default:
        empHrs = 0;
        console.log("Employee is Absent");
        break;
}
let Daily_Wage = empHrs * WAGE_PER_HR;
console.log("Daily Employee wage is: " + Daily_Wage)