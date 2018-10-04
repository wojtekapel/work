
var ff = new XMLHttpRequest();
ff.onreadystatechange = function(){
  if(this.readyState == 4 && this.status == 200){
    // document.getElementById('menu').innerHTML = this.responseText;
    var MBtn = document.getElementsByClassName('menuBtn');
    for(i=0; i<MBtn.length; i++){
      document.getElementById(MBtn[i].id).addEventListener('click', function(){
        menuSelect(this.id);
      });
    }
    var stat = statusCheck();

    //rozpoczęcie dnia

    var startBTN = document.getElementById('StartDay');
    var stopBTN = document.getElementById('StopDay');

    startBTN.addEventListener('click', function(){
        startBTN.classList.add('hiden');
        stopBTN.classList.remove('hiden');
        var set = new XMLHttpRequest();
        set.onreadystatechange = function(){
          if(this.readyState = 4 && this.status == 200){
             closeNav();
             console.log(this.responseText);
          }
        }
        set.open('GET', 'units/user/day.php?action=start', true);
        set.send();

    });

    //zakończenie dnia

    stopBTN.addEventListener('click', function(){
      startBTN.classList.remove('hiden');
      stopBTN.classList.add('hiden');
      var set = new XMLHttpRequest();
      set.onreadystatechange = function(){
        if(this.readyState = 4 && this.status == 200){
           closeNav();
        }
      }
      set.open('GET', 'units/user/day.php?action=stop', true);
      set.send();
    });


  }
}
ff.open('GET', 'views/menu.html', true);
ff.send();

function menuSelect(key){

}
