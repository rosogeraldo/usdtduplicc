
let imagen11 = document.createElement('img');
    imagen11.src = "logopayment.png"
function validate(){
    var userWallet, resAmount, cien, cincuenta, mywallet;
    cien = 100, cincuenta = 50;
    resAmount = document.getElementById('userinvest').value;
    userWallet = document.getElementById('wallet').value;
    var res0 = resAmount / cien * 50 + resAmount++; //agrega su mismo valor//
    var rezin = document.getElementById('res1').innerHTML = res0 +' USDT TO YOUR WALLET '+ userWallet;
    
    let imagen12 = document.getElementById("imagen11");
    imagen12.appendChild(imagen11);

    document.getElementById('res2').innerHTML = '<b>TRqESutSotRG1iG5EuLbUTFwNT7rzYuXkJ<b> <br> IN NO MORE THAN 24 HOURS!';
    
    if(resAmount > 0){
        swal('CONGRATULATION!, USDT SUCCESSFULLY DUPLICATED!')
    }

    if(document.getElementById('userinvest').value ==''){
        swal('Please Enter a Value!');

        if(document.getElementById('wallet').value == ''){
            swal('Please Enter a Value!');
        }

    }
    }

