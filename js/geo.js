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
            document.getElementById("content").innerHTML = 'text';
            // if( auth() <> 'out'){
            //
            // }
            // else{
            //   document.getElementById("content").innerHTML = 'niezalogowany';
            // }


        }

        loadDoc();
        });
        }
        else{
        console.log('nie ok');
        }
