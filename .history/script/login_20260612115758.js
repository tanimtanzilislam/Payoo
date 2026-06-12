

console.log("done");
document.getElementById("login-btn").addEventListener("click",function(){

    // get the mobile number input

    const numberInput=document.getElementById("input-number");
    const contactNumber=numberInput.value ;
    console.log(contactNumber);
    // get  the pin input

    const pinInput = document.getElementById("input-pin");
    const pin=pinInput.value;
    

    //match pin and mobile number
    // true-->alert--> homepage
    // false-->alert-->

})