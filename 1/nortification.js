const Getusername = document.getElementById('getusername')
const Btnaction = document.getElementById('btnaction')
const Getpassword = document.getElementById('getpassword')

Btnaction.addEventListener('click',AddEventforfun)

function AddEventforfun(){

    const username = Getusername.value;
    const password = Getpassword.value;

    if (username === 'thailand' && password === '12345678') {
        alert('ข้อมูลถูกต้อง');
        window.location.assign('success.html');

    } else {
        alert('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง');
    }
}