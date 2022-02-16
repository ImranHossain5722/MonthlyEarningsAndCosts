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
    //console.log(totalExpanse);
    
    //  Balance 
    const afterExpanseBalance =  monthlyIncomeAmount - totalExpanse;
    console.log(afterExpanseBalance);


  // show in ui total exp




})