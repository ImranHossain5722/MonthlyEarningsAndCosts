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
    
    console.log(monthlyFoodCostAmount);
        // rent cost input value
    const monthlyRentCost = document.getElementById('rentInput');
    const monthlyRentTextCost = monthlyRentCost.value ;
    const monthlyRentCostAmount = parseFloat(monthlyRentTextCost);
    console.log(monthlyRentCostAmount);









})