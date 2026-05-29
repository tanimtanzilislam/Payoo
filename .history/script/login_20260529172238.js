console.log('Login clicked')

document.getElementById('login-btn').addEventListener('click',function(){
    // console.log('clicked')
    // 1-get the mobile number input
    const numberInput = document.getElementById('input-number');
    const contactNum= numberInput.value;
    console.log(contactNum);
    // 2-get the pin
    const pinInput= document.getElementById('input-pin');
    const pinNum=pinInput.value;
    console.log(pinNum)
     //3- match the pin & mobile numb

     if(contactNum=='01978449064' && pinNum=='1234'){
        alert('login successful');

        // if i use .replace , the history will be removed from browser
        // window.replace('/home.html');

        // if i use .assign, the history will not removed
        window.TaskSignal()
     } else{
        alert('login failed');
        return;
     }
// 3-1 true->alert->homepage
// 3-2 false-> alert-> try again



})