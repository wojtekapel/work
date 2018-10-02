var i, tt;
var jsonInfo = 'pipka';



function point(tt){
  console.log('Function point ID : '+tt);
  // function idBack(){
  //   return tt;
  // }
  var info = new XMLHttpRequest();
  info.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200){

     jsonInfo = JSON.parse(this.responseText);
     document.getElementById('dane').classList.add('hiden');
     document.getElementById('szukaj').classList.add('hiden');
     document.getElementById('findList').classList.add('hiden');

     var view = new XMLHttpRequest();
     view.onreadystatechange = function(){
       // var temp = jsonInfo;
       // document.getElementById('content').innerHTML = jsonInfo;
       if(this.readyState == 4 && this.status == 200){
         document.getElementById('content').innerHTML = this.responseText;

           document.getElementById('infoName').value = jsonInfo.name;
           document.getElementById('infoKontakt').value = jsonInfo.kontakt;
           document.getElementById('infoTelefon').value = jsonInfo.telefon;
           document.getElementById('infoUser').value = jsonInfo.user;
           document.getElementById('infoGodziny').value = jsonInfo.godziny;
           startPracy(jsonInfo.name, tt);

       }
     }
     view.open('GET', 'views/info.html', true);
     view.send();

    }
  }
  info.open('GET', 'units/klient/find.php?info='+ tt, true);
  info.send();
}
