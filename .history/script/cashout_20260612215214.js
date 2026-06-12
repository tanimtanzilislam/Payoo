

document.getElementById('cashout-btn').addEventListener('click',function(){
    //1 get the agent number & validate

const cashoutNumberInput = document.getElementById('cashout-number');
const cashoutNumber=cashoutNumberInput.value;
console.log(cashoutNumber);


    // 2 get the amount validate and convrt to number 

    const cashoutAmountInput =  document.getElementById('cashout-amount');
    const cashoutAmount = cashoutAmountInput.value;
    console.log(cashoutAmount);





    //3 get the Current balancr  validate and convrt to number 


    const balanceElement= document.getElementById('balance');
    const balance=balanceElement.innerText;
    console.log(balance);




    //4 calculate new balance 

    const newBalance =Number(balance)-Number(cashoutAmount);


    if(newBalance<0){
        alert("In")
    }
    //console.log('newBalance',newBalance);



    //5 get the pin and verify


    // true-> show an alert and set the balance




    // false->




})