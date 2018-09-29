loginCheck();

function startPracy(klient){

  document.getElementById('startPracy').addEventListener('click', function(){
    var ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function(){
      if(this.readyState == 4 && this.status == 200){
          console.log(this.responseText);
      }
    }
    ajax.open('GET', 'units/user/point.php?action=start&point='+klient, true);
    ajax.send();
  });
}
