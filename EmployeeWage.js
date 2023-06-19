const IS_PART_TIME = 2, IS_FULL_TIME = 1, PART_TIME_HRS = 4, FULL_TIME_HRS = 8, WAGE_PER_HR = 20;
const NUM_OF_WORKINGDAYS = 20, TOTAL_WORKIG_HRS = 160;
let totlEmpHrs = 0, totalWorkingDays = 0;
while (totlEmpHrs <= TOTAL_WORKIG_HRS && totalWorkingDays < NUM_OF_WORKINGDAYS)
{
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    totlEmpHrs += getEmpHrs(empCheck);
}
function getEmpHrs(empCheck)
{
    switch (empCheck)
    {
        case IS_FULL_TIME:
            return FULL_TIME_HRS;
            break;
        case IS_PART_TIME:
            return PART_TIME_HRS;
            break;
        default:
            return 0;
            break;
    }
}
let Emp_Wage = totlEmpHrs * WAGE_PER_HR;
console.log("Total working days: "+ totalWorkingDays +"\nTotal working Hrs: "+ totlEmpHrs +"\nEmployee wage is: " + Emp_Wage);