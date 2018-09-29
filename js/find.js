var i, tt;
var jsonInfo = 'pipka';
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
          tt = this.id;
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
                 document.getElementById('list').innerHTML = this.responseText;

                   document.getElementById('infoName').value = jsonInfo.name;
                   document.getElementById('infoKontakt').value = jsonInfo.kontakt;
                   document.getElementById('infoTelefon').value = jsonInfo.telefon;
                   document.getElementById('infoUser').value = jsonInfo.user;
                   startPracy(jsonInfo.name);
               }
             }
             view.open('GET', 'views/info.html', true);
             view.send();

            }
          }
          info.open('GET', 'units/klient/find.php?info='+ tt, true);
          info.send();




        });
      }
    }

  }
  listView.open('GET', 'units/klient/find.php?key='+find.value, true);
  listView.send();
});
