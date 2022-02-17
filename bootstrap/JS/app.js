function incomeExpenses(allInput){

     // income filed value..
     const monthlyIncomeExpenses = document.getElementById(allInput);
     const monthlyIncomeExpensesText = monthlyIncomeExpenses.value ;
     const monthlyIncomeExpensesAmount = parseFloat(monthlyIncomeExpensesText);
     return monthlyIncomeExpensesAmount;
};

/* function balanceAmount(){

     // show in ui total Expanse
     const expanseBalance = document.getElementById('totalExpenses');
     const expanseBalanceText = expanseBalance.innerText;
     const expanseBalanceAmount = parseFloat(expanseBalanceText);
      expanseBalance.innerText = totalExpanse ;



}
 */

/* income calculate */

document.getElementById('calculate').addEventListener('click', function(){
            // income amount
        const monthlyIncomeAmount = incomeExpenses('incomeInput');
            //food cost function
        const monthlyFoodCostAmount = incomeExpenses('foodInput');
            // rent cost amount
        const monthlyRentCostAmount = incomeExpenses('rentInput'); 

        const clothCostAmount = incomeExpenses('clothesInput');
        // total Total Expenses: 
        const totalExpanse = monthlyFoodCostAmount + monthlyRentCostAmount + clothCostAmount ;  

        
        // show in ui total Expanse
        const expanseBalance = document.getElementById('totalExpenses');
        const expanseBalanceText = expanseBalance.innerText;
        const expanseBalanceAmount = parseFloat(expanseBalanceText);
         expanseBalance.innerText = totalExpanse ;

 
        //  Balance 
        const afterExpanseBalance =  monthlyIncomeAmount - totalExpanse;
      
        //after Expanse Total Balance
        const totalBalance = document.getElementById('afterExpensesBalance');
        const totalBalanceText = totalBalance.innerText;
        const totalBalanceAmount = parseFloat(totalBalanceText);
        totalBalance.innerText = afterExpanseBalance ;

})

function PercentageCalculate(){




}

// save money calculate

document.getElementById('saveButton').addEventListener('click', function(){
/*         const monthlyIncome = document.getElementById('incomeInput');
        const monthlyIncomeText = monthlyIncome.value ;
        const monthlyIncomeAmount = parseFloat(monthlyIncomeText);

 */
        const monthlyIncomeAmount = incomeExpenses('incomeInput');


      //  const monthlyIncomeAmount = PercentageCalculate()
        //Percentage calculate
        const saveMoney = document.getElementById('saveInput');
        const saveMoneyText = saveMoney.value ;
        const saveMoneyAmount = parseFloat(saveMoneyText); 
        const totalSaveMoney =  saveMoney.value /  100 ;
        const PercentageSveMoney = totalSaveMoney * monthlyIncomeAmount ;
 

            //save amount calculate

        const savingMoney = document.getElementById('savingAmount');
        const savingMoneyText = savingMoney.innerText;
        const savingMoneyAmount = parseFloat(savingMoneyText);
            savingMoney.innerText =PercentageSveMoney;

            //aTotal Balance
        const totalBalance = document.getElementById('afterExpensesBalance');
        const totalBalanceText = totalBalance.innerText;
        const totalBalanceAmount = parseFloat(totalBalanceText);
        totalBalance.innerText = totalBalanceAmount ;

        
            
        //remaining balance 
        const remainingBalance = document.getElementById('remainingBalance')  
         const remainingBalanceText = remainingBalance.innerText;
         const remainingBalanceAmount = parseFloat(remainingBalanceText);
         const remainingAmount =  totalBalanceAmount - PercentageSveMoney;
         remainingBalance.innerText = remainingAmount ;



})






    
/*
// income calculate

document.getElementById('calculate').addEventListener('click', function(){
    // income filed value..
const monthlyIncome = document.getElementById('incomeInput');
const monthlyIncomeText = monthlyIncome.value ;
const monthlyIncomeAmount = parseFloat(monthlyIncomeText);

    // food cost input value
const  monthlyFoodCost = document.getElementById('foodInput');
const monthlyFoodTextCost = monthlyFoodCost.value;
const monthlyFoodCostAmount = parseFloat(monthlyFoodTextCost);

    // rent cost input value
const monthlyRentCost = document.getElementById('rentInput');
const monthlyRentTextCost = monthlyRentCost.value ;
const monthlyRentCostAmount = parseFloat(monthlyRentTextCost);

    // cloth cost input filed 
const clothCost = document.getElementById('clothesInput');
const clothTextCost = clothCost.value ;
const clothCostAmount = parseFloat(clothTextCost);

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


        //save amount calculate

    const savingMoney = document.getElementById('savingAmount');
    const savingMoneyText = savingMoney.innerText;
    const savingMoneyAmount = parseFloat(savingMoneyText);
        savingMoney.innerText =PercentageSveMoney;

        //aTotal Balance
    const totalBalance = document.getElementById('afterExpensesBalance');
    const totalBalanceText = totalBalance.innerText;
    const totalBalanceAmount = parseFloat(totalBalanceText);
    totalBalance.innerText = totalBalanceAmount ;

    
        
    //remaining balance 
    const remainingBalance = document.getElementById('remainingBalance')  
     const remainingBalanceText = remainingBalance.innerText;
     const remainingBalanceAmount = parseFloat(remainingBalanceText);
     const remainingAmount =  totalBalanceAmount - PercentageSveMoney;
     remainingBalance.innerText = remainingAmount ;



})


 */

