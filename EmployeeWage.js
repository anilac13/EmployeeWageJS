const IS_PART_TIME = 2, IS_FULL_TIME = 1, PART_TIME_HRS = 4, FULL_TIME_HRS = 8, WAGE_PER_HR = 20;
const NUM_OF_WORKINGDAYS = 20, TOTAL_WORKIG_HRS = 160;
let totlEmpHrs = 0, totalWorkingDays = 0;
let empHrs = 0;
let EmpWageArray = new Array();
let dayCount = 0;
while (totlEmpHrs <= TOTAL_WORKIG_HRS && totalWorkingDays < NUM_OF_WORKINGDAYS)
{
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    totlEmpHrs += getEmpHrs(empCheck);
    empHrs = getEmpHrs(empCheck);
    EmpWageArray.push(calculateWage(empHrs));
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
function calculateWage(empHrs)
{
    return empHrs * WAGE_PER_HR;
}
function mapDayWithWage(calculateWage)
{
    dayCount++;
    return "Day "+ dayCount + " = "+ calculateWage;
}
function fullTimeWage(calculateWage)
{
    return calculateWage.includes("160");
}
function partTimeWage(calculateWage)
{
    return calculateWage.includes("80");
}
function findNumOfDays(noOfDays, calculateWage)
{
    if (calculateWage > 0) return noOfDays+1;
    return noOfDays;
}

let Emp_Wage = totlEmpHrs * WAGE_PER_HR;
console.log("Total working days: "+ totalWorkingDays +"\nTotal working Hrs: "+ totlEmpHrs +"\nTotal employee wage is: " + Emp_Wage);
console.log(EmpWageArray);

console.log("=============================================");
const reducedArray = EmpWageArray.reduce((total, current) => (total + current));
console.log("Total wage using Reduce method: " + reducedArray+"\n===========================================");

console.log("Day with Wage: \n-----------------------------------------");
let mapArray = EmpWageArray.map(mapDayWithWage);
console.log(mapArray);

console.log("\n================================================\nFull day Wage: \n-------------------------------------");
let fullDayWageArray = mapArray.filter(fullTimeWage);
console.log(fullDayWageArray);

console.log("================================================\nFirst occurence of full day wage: "+ fullDayWageArray.find(fullTimeWage));

console.log("================================================\nIs every element of full time wage is holding truly full day wage?: "+ fullDayWageArray.every(fullTimeWage));

console.log("\n==============================================\nPart time wage with days: \n----------------------------------------");
let partTimeWageArray = mapArray.filter(partTimeWage);
console.log(partTimeWageArray);

console.log("================================================\nNumber of days Employee worked: " + EmpWageArray.reduce(findNumOfDays, 0));