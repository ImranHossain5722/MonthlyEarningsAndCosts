/* income calculate */

document.getElementById('calculate').addEventListener('click', function(){
        // income filed value..
    const monthlyIncome = document.getElementById('incomeInput');
    const monthlyIncomeText = monthlyIncome.value ;
    const monthlyIncomeAmount = parseFloat(monthlyIncomeText);

        // food cost input value
    const  monthlyFoodCost = document.getElementById('foodInput');
    const monthlyFoodTextCost = monthlyFoodCost.value;
    const monthlyFoodCostAmount = parseFloat(monthlyFoodTextCost);
    
    // console.log(monthlyFoodCostAmount);
        // rent cost input value
    const monthlyRentCost = document.getElementById('rentInput');
    const monthlyRentTextCost = monthlyRentCost.value ;
    const monthlyRentCostAmount = parseFloat(monthlyRentTextCost);
    // console.log(monthlyRentCostAmount);

        // cloth cost input filed 
    const clothCost = document.getElementById('clothesInput');
    const clothTextCost = clothCost.value ;
    const clothCostAmount = parseFloat(clothTextCost);

    // console.log(clothCostAmount);

    // total Total Expenses: 
    const totalExpanse = monthlyFoodCostAmount + monthlyRentCostAmount + clothCostAmount ;  
    // show in ui total Expanse
    const expanseBalance = document.getElementById('totalExpenses');
    const expanseBalanceText = expanseBalance.innerText;
    const expanseBalanceAmount = parseFloat(expanseBalanceText);
    expanseBalance.innerText = totalExpanse ;


    //  Balance 
    const afterExpanseBalance =  monthlyIncomeAmount - totalExpanse;
   // console.log(afterExpanseBalance);
    
    //after Expanse Total Balance
    const totalBalance = document.getElementById('afterExpensesBalance');
    const totalBalanceText = totalBalance.innerText;
    const totalBalanceAmount = parseFloat(totalBalanceText);
    totalBalance.innerText = afterExpanseBalance ;

})

// save money calculate

document.getElementById('saveButton').addEventListener('click', function(){
    const monthlyIncome = document.getElementById('incomeInput');
    const monthlyIncomeText = monthlyIncome.value ;
    const monthlyIncomeAmount = parseFloat(monthlyIncomeText);

        //Percentage calculate
const saveMoney = document.getElementById('saveInput');
const saveMoneyText = saveMoney.value ;
const saveMoneyAmount = parseFloat(saveMoneyText); 

const totalSaveMoney =  saveMoney.value /  100 ;
const PercentageSveMoney = totalSaveMoney * monthlyIncomeAmount ;
 
   console.log(PercentageSveMoney);
  
        const savingMoney = document.getElementById('savingAmount');
        const savingMoneyText = savingMoney.innerText;
        const savingMoneyAmount = parseFloat(savingMoneyText);
            savingMoney.innerText =PercentageSveMoney;


})