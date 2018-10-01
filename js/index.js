


function loginCheck(){
var log = new XMLHttpRequest();
log.onreadystatechange = function(){
  if(this.readyState == 4 && this.status == 200){
     if(this.responseText == 'out'){
        login();

     }
     else {

        document.getElementById('content').innerHTML = '<span id="logout" >Wyloguj '+this.responseText +' !</span><br/>';
        var logout = document.getElementById('logout');
        logout.classList.add('blue', 'cursor');
        logout.addEventListener('click', function(){
          ajax = new XMLHttpRequest();
          ajax.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
              window.location.assign('/work');
            }
          }
          ajax.open('GET', 'units/auth/logout.php', true);
          ajax.send();
        });

      // var list = new XMLHttpRequest();
      // list.onreadystatechange = function(){
      //     if(this.readyState == 4 && this.status == 200){
      //       document.getElementById('list').innerHTML = this.responseText;
      //       document.getElementById('listSelect').addEventListener('change', function(){
      //
      //         document.getElementById('dane').innerHTML = this.value;
      //       });
      //     }
      //
      // }
      // list.open('GET', 'units/klient/list.php', true);
      // list.send();
     }
  }
}

log.open('GET', 'units/auth/check.php', true);
log.send();
}




function login(){
  var x = new XMLHttpRequest();
x.onreadystatechange = function(){
   if(this.readyState == 4 && this.status == 200){
     document.getElementById('content').innerHTML = this.responseText;
     zaloguj();
   }
}
x.open('GET', 'views/auth/login.html', true);
x.send();
}

function zaloguj(){
  var btn = document.getElementById('zaloguj');
  var Name = document.getElementById('login_name');
  var pass = document.getElementById('login_pass');
  btn.addEventListener('click', function(){

  login = new XMLHttpRequest();
  login.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
      if(this.responseText){
        window.location.assign('/work');
      }
      else{
        document.getElementById('content').innerHTML = 'Błąd logowania.<br/>Spróbuj jeszcze raz.';
        // document.getElementById('content').innerHTML = this.responseText;
      }
    }

  }
  login.open('GET', 'units/auth/login.php?name='+Name.value+'&pass='+pass.value, true);
  login.send();

    // alert('Twój login to : '+Name.value+' , twoje hasło to : '+pass.value);
  // alert(btn.value);
   });
}

function statusCheck(){
  var resp = false;
  var stat = new XMLHttpRequest();
  stat.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200){

      if(this.responseText == 'active'){
        document.getElementById('StopDay').classList.remove('hiden');
        console.log('stat ON');
      }
      else{
        document.getElementById('StartDay').classList.remove('hiden');
        console.log('stat OFF');
      }
    }
    else{
      console.log('Bład, brak informacji o statusie.');
    }
  }
  stat.open('GET', 'units/user/status.php', true);
  stat.send();

}

document.getElementById('tab').addEventListener('click', function(){
  var xml = new XMLHttpRequest();
  xml.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
      document.getElementById('content').innerHTML = this.responseText;
    }
  }
  xml.open('GET', 'test/sprawozdanie.php', true);
  xml.send();
});

document.getElementById('dodajKlienta').addEventListener('click', function(){
  var xml = new XMLHttpRequest();
  xml.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
      document.getElementById('content').innerHTML = this.responseText;
    }
  }
  xml.open('GET', 'views/add.html', true);
  xml.send();
});

document.getElementById('search').addEventListener('click', function(){
  var xml = new XMLHttpRequest();
  xml.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
      document.getElementById('content').innerHTML = this.responseText;

            var find = document.getElementById('findInput');
            find.addEventListener('keydown', function(){
              var listView = new XMLHttpRequest();
              listView.onreadystatechange = function(){
                if (this.readyState == 4 && this.status == 200){
                  document.getElementById('findList').innerHTML = this.responseText;
                  var link = document.getElementsByClassName('link');
                  for (i=0; i < link.length; i++){
                    document.getElementById(link[i].id).addEventListener('click', function(){
                      // alert ('pipa'+this.id);
                      point(this.id);

                    });
                  }
                }

              }
              listView.open('GET', 'units/klient/find.php?key='+find.value, true);
              listView.send();
            });
    }
  }
  xml.open('GET', 'Views/find.html', true);
  xml.send();
});
