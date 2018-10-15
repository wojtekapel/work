var i, tt;
var jsonInfo = 'pipka';



function point(tt){
  console.log('Function point ID : '+tt);

  var info = new XMLHttpRequest();
  info.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200){

     jsonInfo = JSON.parse(this.responseText);
     document.getElementById('dane').classList.add('hiden');
     var view = new XMLHttpRequest();
     view.onreadystatechange = function(){

       if(this.readyState == 4 && this.status == 200){
         document.getElementById('content').innerHTML = this.responseText;

           document.getElementById('infoName').innerHTML = jsonInfo.name;
           document.getElementById('infoKontakt').innerHTML = jsonInfo.kontakt;
           document.getElementById('infoTelefon').innerHTML = jsonInfo.telefon;
           document.getElementById('infoUser').innerHTML = jsonInfo.user;
           document.getElementById('infoGodziny').innerHTML = jsonInfo.godziny;
           startPracy(jsonInfo.name, tt);

       }
     }
     view.open('GET', 'views/data.html', true);
     view.send();

    }
  }
  info.open('GET', 'units/klient/find.php?info='+ tt, true);
  info.send();
}
