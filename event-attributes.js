function checkUsername(){
    var elMsg = document.getElementById('feedback');
    var elUsername = document.getElementById('username');
    if (elUsername.valueOf.length < 5){
        elMsg.textContent = 'Username must be 5 characters for more';
    }else {
        elMsg.textContent='';
    }
}