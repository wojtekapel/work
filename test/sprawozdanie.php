<?php

include "../class/database/list.php";

$db = new lista();
echo '<h2>Sprawozdanie</h2><br/><br/>';
$result = $db->getJSON();
$dni = array('Niedziela', 'Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota');
$points = array('point1', 'point2', 'point3', 'point4', 'point5', 'point6', 'point7', 'point8', 'point9');
$array = json_decode($result['json']);

for ($i=0; $i < count($array); $i++) {

  echo '<div style="border:1px solid red;" >
   <span style="margin-left:30px;">'.$dni[$array[$i]->day].'</span>
   <span style="margin-left:30px;">Początek dnia : '.$array[$i]->start.'</span>
   <span style="margin-left:30px;">Koniec dnia : '.$array[$i]->stop.'</span><br/>
   ';
      if($array[$i]->points){
        for ($xx=0; $xx <$array[$i]->points; $xx++) {
          $point = $points[$xx];
          echo '<div style="border:2px solid blue; margin-top:60px;">';
          echo '<div style="border:1px solid green; margin-left:30px;">Klient : '.$array[$i]->point1->klient.'</div>';
          echo '<div style="border:1px solid green; margin-left:30px;">Start : '.$array[$i]->point1->start.'</div>';
          echo '<div style="border:1px solid green; margin-left:30px;">Dojazd : '.$array[$i]->point1->dojazd[0].':'.$array[$i]->point1->dojazd[1].'</div></div>';
        }

      }




   echo '
   </div><br/>';
}

echo '<br/>';
print_r($array);
