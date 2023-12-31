const IS_PART_TIME = 2, IS_FULL_TIME = 1, PART_TIME_HRS = 4, FULL_TIME_HRS = 8, WAGE_PER_HR = 20;
const NUM_OF_WORKINGDAYS = 20, TOTAL_WORKIG_HRS = 160;
let totlEmpHrs = 0, totalWorkingDays = 0;
let empHrs = 0;
let dayCount = 0;

let EmpWageArray = new Array();
let empDailyWageMap = new Map();
let empDailyHrsMap = new Map();

let empDailyWageAndHrsArray = new Array();

while (totlEmpHrs <= TOTAL_WORKIG_HRS && totalWorkingDays < NUM_OF_WORKINGDAYS)
{
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    totlEmpHrs += getEmpHrs(empCheck);
    empHrs = getEmpHrs(empCheck);
    EmpWageArray.push(calculateWage(empHrs));

    empDailyHrsMap.set(totalWorkingDays, empHrs);
    empDailyWageMap.set(totalWorkingDays, calculateWage(empHrs));

    empDailyWageAndHrsArray.push({
        dayNum: totalWorkingDays,
        dailyHours: empHrs,
        dailyWage: calculateWage(empHrs),
        toString(){
            return "\nDay "+this.dayNum + " => working hours is: "+this.dailyHours+" and Wage earned is: "+this.dailyWage;
        }
    });
}
console.log("Showing daily hrs worked and wage earned \n------------------------------------"+empDailyWageAndHrsArray);

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
// function totalWages(totalWage, dailyWage)
// {
//     return totalWage + dailyWage;
// }

console.log("========================================");
console.log("Employee daily wage array:");
console.log("========================================");
console.log(EmpWageArray);
console.log("========================================");
console.log("Employee daily Hrs Map:");
console.log("========================================");
console.log(empDailyHrsMap);
console.log("========================================");
console.log("Employee daily wage Map");
console.log("========================================");
console.log(empDailyWageMap);

// console.log("=========================================");
// console.log("Total employee wage using Map");
// console.log("------------------------------------------");
//console.log(Array.from(empDailyWageMap.values()).reduce(totalWages, 0));

let Emp_Wage = totlEmpHrs * WAGE_PER_HR;
console.log("\nTotal working days: "+ totalWorkingDays +"\nTotal working Hrs: "+ totlEmpHrs +"\nTotal employee wage is: " + Emp_Wage);
//console.log(EmpWageArray);

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


//Using Arrow Functions
let totalWage = (totalWage, dailyWage) => (totalWage + dailyWage);
let totalHours = Array.from(empDailyHrsMap.values()).reduce(totalWage, 0);
let totalSalary = EmpWageArray.filter(dailyWage=>dailyWage>0).reduce(totalWage, 0);
console.log("=========================================");
console.log("Emp total wage and total hrs using Arrow function");
console.log("-------------------------------------------");
console.log("Total Hrs: "+totalHours+"\tTotal Wage: "+totalSalary);

let nonWorkingDays = new Array();
let fullWorkingDays = new Array();
let halfWorkingDays = new Array();

empDailyHrsMap.forEach((values, key)=> {
    if (values == 8) fullWorkingDays.push(key);
    else if (values == 4) halfWorkingDays.push(key);
    else nonWorkingDays.push(key);
});

console.log("===================================================");
console.log("Full working days array");
console.log("----------------------------------------------------");
console.log(fullWorkingDays);
console.log("===================================================");
console.log("Half working days array");
console.log("----------------------------------------------------");
console.log(halfWorkingDays);
console.log("===================================================");
console.log("No working days array");
console.log("----------------------------------------------------");
console.log(nonWorkingDays);

//UC11
let totalWages = empDailyWageAndHrsArray.filter(dailyHrsandWage=>dailyHrsandWage.dailyWage>0)
.reduce((totalWage, dailyHrsandWage)=> totalWage += dailyHrsandWage.dailyWage, 0);

let totalHrs = empDailyWageAndHrsArray.filter(dailyHrsandWage=>dailyHrsandWage.dailyWage>0)
.reduce((totalHours, dailyHrsandWage) => totalHours += dailyHrsandWage.dailyHours, 0);

console.log("Total wages: "+totalWages+"\tTotal hours: "+totalHrs);

process.stdout.write("\nLogging full work days");
empDailyWageAndHrsArray.filter(dailyHrsandWage => dailyHrsandWage.dailyHours == 8).forEach(dailyHrsandWage => process.stdout.write(dailyHrsandWage.toString()));

let partWorkingDayStrArr = empDailyWageAndHrsArray.filter(dailyHrsandWage=>dailyHrsandWage.dailyHours == 4)
                            .map(dailyHrsandWage=>dailyHrsandWage.toString());
console.log("\nPart working day strings: "+partWorkingDayStrArr);

let nonWorkingDayNums = empDailyWageAndHrsArray.filter(dailyHrsandWage=>dailyHrsandWage.dayNum);
console.log("\nNon working day Nums: "+nonWorkingDayNums);