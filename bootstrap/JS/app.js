function incomeExpenses(allInput){

     // income filed value.

        const monthlyIncomeExpenses = document.getElementById(allInput);
        const monthlyIncomeExpensesText = monthlyIncomeExpenses.value ;
        const monthlyIncomeExpensesAmount = parseFloat(monthlyIncomeExpensesText);

        return monthlyIncomeExpensesAmount ;
          
};
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
        
    });



// save money calculate

document.getElementById('saveButton').addEventListener('click', function(){
       
        const monthlyIncomeAmount = incomeExpenses('incomeInput');

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


