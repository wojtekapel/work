
var geo = navigator.geolocation;
var lat, long;
if (geo){
          console.log('jest ok');
          geo.getCurrentPosition(function(location){
          lat = location.coords.latitude;
          lon = location.coords.longitude;


          lat = Math.floor(lat*1000000);
          lon = Math.floor(lon*1000000);
          console.log(lat);
          console.log(lon);



            loadDoc();
            });
}
else{
console.log('nie ok');
}



function loadDoc() {
  console.log('funkcja loadDoc');
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log('readyState');
            myFunction(this.responseText);
            // alert('ok');
        }
        else console.log('Not ready');
    };
    xhttp.open("GET", "units/geolocation/find_dest.php?lon="+lon+"&lat="+lat, true);
    xhttp.send();
}
function myFunction(text) {

      login = new XMLHttpRequest();
      login.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
          if(this.responseText != 'out'){
            document.getElementById("content").innerHTML = text;
            var link = document.getElementsByClassName('link');
            for (i=0; i < link.length; i++){
              document.getElementById(link[i].id).addEventListener('click', function(){
                // alert ('pipa'+this.id);
                point(this.id);

              });
            }
          }
        }
      }
      login.open('GET', 'units/auth/check.php', true);
      login.send();

}
