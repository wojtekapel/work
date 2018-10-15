loginCheck();


function openNav() {
    document.getElementById("mySidenav").style.width = "80px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}



function startPracy(klient, id){
  id = id.replace('klient','');
  document.getElementById('startPracy').addEventListener('click', function(){
    var ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function(){
      if(this.readyState == 4 && this.status == 200){
          console.log(this.responseText);
      }
    }
    ajax.open('GET', 'units/user/point.php?action=start&point='+klient+'&id='+id, true);
    ajax.send();
  });

  document.getElementById('koniecPracy').addEventListener('click', function(){
    var ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function(){

    }
    ajax.open('GET', 'units/user/point.php?action=stop', true);
    ajax.send();
  });


}

function register(){

  document.getElementById('regBtn').addEventListener('click', function(){
    console.log('register Func');
    var xml = new XMLHttpRequest();
    var user = document.getElementById('regName').value;
    var pass = document.getElementById('regPass').value;
    var repass = document.getElementById('regPass2').value;


    xml.onreadystatechange = function(){
      if (this.readyState == 4 && this.status == 200){
        if(this.responseText == 'ok'){
          window.location.assign('/nt');
        }
        else if(this.responseText == 'pass'){
          document.getElementById('content').innerHTML = 'Hasła nie są identyczne!';
        }
        else{
          document.getElementById('content').innerHTML = 'Błąd podczas rejestracji.<br/>'+this.responseText;
        }
      }
    }
    xml.open('POST', 'units/auth/register.php', true);
    xml.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xml.send('user='+user+'&pass='+pass+'&repass='+repass);
  });


}
