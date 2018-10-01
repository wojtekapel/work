loginCheck();

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
