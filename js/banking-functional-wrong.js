//function that double 5:
function doubleIt(num) {
    const result = num * 2;
    return result;
}
const fiveDouble = doubleIt(5);
const sevenDouble = doubleIt(7);

function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    //clear input field 
    inputField.value = '';
    return amountValue;
}

function updateTotalField(totalFieldId, amount) {
    // debugger;
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);

    totalElement.innerText = previousTotal + amount;
}

function updateBalance(depositAmount) {
    const balanceTotal = document.getElementById('balance-total');

    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    balanceTotal.innerText = previousBalanceTotal + depositAmount;
}

document.getElementById('deposit-button').addEventListener('click', function () {
    const depositAmount = getInputValue('deposit-input');

    //get & Update Total deposit 
    /*  const depositTotal = document.getElementById('deposit-total');
     const depositTotalText = depositTotal.innerText;
     const previousDepositTotal = parseFloat(depositTotalText);
 
     depositTotal.innerText = previousDepositTotal + depositAmount; */

    updateTotalField('deposit-total', depositAmount)
    //update balance
    /*  const balanceTotal = document.getElementById('balance-total');
 
     const balanceTotalText = balanceTotal.innerText;
     const previousBalanceTotal = parseFloat(balanceTotalText);
 
     balanceTotal.innerText = previousBalanceTotal + depositAmount; */
    updateTotalField(depositAmount);
});

// handle  withdraw button
document.getElementById('withdraw-button').addEventListener('click', function () {
    /*     const withdrawInput = document.getElementById('withdraw-input');
        const withdrawAmountText = withdrawInput.value;
        const withdrawAmount = parseFloat(withdrawAmountText); */
    const withdrawAmount = getInputValue('withdraw-input')

    //update withdraw total
    /* 
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalText);
    console.log(previousWithdrawTotal); 
    withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount;
    */


    updateTotalField('withdraw-total', withdrawAmount);


    //update balance after Withdraw
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    balanceTotal.innerText = previousBalanceTotal - withdrawAmount;


})