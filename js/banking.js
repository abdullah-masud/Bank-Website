/* --------------
    banking.html 
----------------*/

/* ------------------------------
event handled for deposit button 
--------------------------------*/
document.getElementById('deposit-button').addEventListener('click', function() {
    /* --------------------
    Update account deposit 
    ----------------------*/
    const depositInput = document.getElementById('deposit-input');

    // taking new deposit amount from input field
    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText);

    const depositTotalField = document.getElementById('deposit-total')

    // taking previous deposit amount from deposit total field
    const previousDepositAmountText = depositTotalField.innerText;
    const previousDepositAmount = parseFloat(previousDepositAmountText)

    // adding both previous and new amount
    const newDepositTotal = previousDepositAmount + newDepositAmount

    depositTotalField.innerText = newDepositTotal;

    /* --------------------
    Update account balance 
    ----------------------*/
    const balanceTotal = document.getElementById('balance-total');

    // taking previous balance total
    const previousBalanceTotalText = balanceTotal.innerText
    const previousBalanceTotal = parseFloat(previousBalanceTotalText)

    // adding previous and new amount
    const newBalanceTotal = previousBalanceTotal + newDepositAmount

    balanceTotal.innerText = newBalanceTotal

    // clearing input field
    depositInput.value = ''
})


/* ------------------------------
event handled for withdraw button 
--------------------------------*/
document.getElementById('withdraw-button').addEventListener('click', function() {
    /* --------------------
    Update deposit account  
    ----------------------*/
    const withdrawInput = document.getElementById('withdraw-input');
    // taking new withdraw amount from input field
    const newWithdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountText);

    const withdrawTotalField = document.getElementById('withdraw-total');
    // taking previous withdraw amount from withdraw total field
    const previousWithdrawTotalText = withdrawTotalField.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalText);
    // adding previous and new amount in withdraw field
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount

    withdrawTotalField.innerText = newWithdrawTotal


    /* --------------------
    Update account balance 
    ----------------------*/
    const balanceTotal = document.getElementById('balance-total');
    // taking previous balance total
    const previousBalanceTotalText = balanceTotal.innerText
    const previousBalanceTotal = parseFloat(previousBalanceTotalText)
        // adding previous and new amount
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount
    balanceTotal.innerText = newBalanceTotal

    withdrawInput.value = ''
})