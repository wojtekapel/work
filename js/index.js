


function loginCheck(){
var log = new XMLHttpRequest();

log.onreadystatechange = function(){

  if(this.readyState == 4 && this.status == 200){
     if(this.responseText == 'out'){
        console.log('Niezalogowany');
        login();

     }
     else {
       console.log('Zalogowany');

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
   else{

   }
}
x.open('GET', 'views/auth/login.html', true);
x.send();
}

function zaloguj(){
  var btn = document.getElementById('zaloguj');
  var Name = document.getElementById('login_name');
  var pass = document.getElementById('login_pass');

  document.getElementById('regForm').addEventListener('click', function(){
    console.log('reg');
    xml = new XMLHttpRequest();
    xml.onreadystatechange = function(){
      if(this.readyState == 4 && this.status == 200){
        document.getElementById('content').innerHTML = this.responseText;
        register();
      }
    }
    xml.open('GET', 'views/auth/register.html', true);
    xml.send();
  });


  btn.addEventListener('click', function(){

  login = new XMLHttpRequest();
  login.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
      if(this.responseText){
        window.location.assign('/nt');
      }
      else{
        document.getElementById('content').innerHTML = 'Błąd logowania.<br/>Spróbuj jeszcze raz.';
        // document.getElementById('content').innerHTML = this.responseText;
      }
    }

  }
  login.open('GET', 'units/auth/login.php?name='+Name.value+'&pass='+pass.value, true);
  login.send();

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
      closeNav();
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
      closeNav();
      add();
      document.getElementById('addBtn').addEventListener('click', function(){
        var Iname = document.getElementById('infoName');
        var Ikontakt = document.getElementById('infoKontakt');
        var Itelefon = document.getElementById('infoTelefon');
        var Igodziny = document.getElementById('infoGodziny');
        var xml = new XMLHttpRequest();
        xml.open('POST', 'units/klient/add.php', true);
        xml.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xml.send('name='+Iname.value+'&kontakt='+Ikontakt.value+'&telefon='+Itelefon.value+'&godziny='+Igodziny.value);
      });
    }
  }
  xml.open('GET', 'views/add.html', true);
  xml.send();
});

document.getElementById('search').addEventListener('click', function(){
  closeNav();
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
  xml.open('GET', 'views/find.html', true);
  xml.send();
});


//Zestawienie godziny

document.getElementById('tab_').addEventListener('click', function(){

  var xml = new XMLHttpRequest();
  xml.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
      document.getElementById('content').innerHTML = this.responseText;
    }
  }
  xml.open('GET', 'test/weeks.php', true);
  xml.send();
});

document.getElementById('infoPage').addEventListener('click', function(){

  var xml = new XMLHttpRequest();
  xml.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
      document.getElementById('content').innerHTML = this.responseText;
    }
  }
  xml.open('GET', 'views/infoPage.html', true);
  xml.send();
});

document.getElementById('err').addEventListener('click', function(){

  var xml = new XMLHttpRequest();
  xml.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
      document.getElementById('content').innerHTML = this.responseText;

          var elist = new XMLHttpRequest();
          elist.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
              document.getElementById('errorsList').innerHTML = this.responseText;
            }
          }
          elist.open('GET', 'units/errors/errors.php', true);
          elist.send();


                  document.getElementById('errAddBtn').addEventListener('click', function(){
                    console.log('Errors menu');
                    var xxml = new XMLHttpRequest();
                    xxml.onreadystatechange = function(){
                      if(this.readyState == 4 && this.status == 200){
                        document.getElementById('content').innerHTML = this.responseText;
                        document.getElementById('errorSave').addEventListener('click', function(){
                          console.log('Zapisz błąd.');
                          var truck = document.getElementById('newErrorTruck').value;
                          var errorNum = document.getElementById('newErrorNumber').value;
                          var errorIndex = document.getElementById('newErrorIndex').value;
                          var errorPost = document.getElementById('newErrorContent').value;
                          var errorStatus = document.getElementById('newErrorStatus').value;

                          var Exml = new XMLHttpRequest();
                          Exml.onreadystatechange = function(){
                            if(this.readyState == 4 && this.status == 200){
                              console.log(this.responseText);
                            }
                          }
                          Exml.open('POST', 'units/errorsLogbook/errorSave.php', true);
                          Exml.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                          Exml.send('truck='+truck+'&num='+errorNum+'&index='+errorIndex+'&post='+errorPost+'&status='+errorStatus);
                        });
                      }
                    }
                    xxml.open('GET', 'views/newerror.html', true);
                    xxml.send();
                  });


    }
  }
  xml.open('GET', 'views/error.html', true);
  xml.send();
});

// geolocalization();
