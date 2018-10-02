<?php

include "../../class/database/list.php";
require_once "../../lib/day_lib.php";
$db = new lista();
$json = json_decode($db->getJSON()['json']);

if(isset($_GET['action'])){
  if($_GET['action'] == 'start'){

    $array = array('start'=>date('H:i:s'), 'klient'=> $_GET['point']);

    for ($i=0; $i < count($json); $i++) {
      if($json[$i]->day == date('w')) {
        // code...
        $point = ( $json[$i]->points)+1;
        $x = 'point'.$point;
         if($point == 1){
           $array['dojazd'] = czas($array['start'], $json[$i]->start);
         }
         elseif ($point >1){
           $lastPoint = 'point'.$json[$i]->points;
           $array['dojazd'] = czas($array['start'], $json[$i]->$lastPoint->stop);
         }
        $json[$i]->$x = $array;
        $json[$i]->points = ($json[$i]->points)+1 ;


      }
    }
    $db->setJSON(json_encode($json));
  }
  elseif($_GET['action'] == 'stop'){

    for ($i=0; $i < count($json); $i++) {
      if($json[$i]->day == date('w')) {
        // code...
        $point =  $json[$i]->points;
        $x = 'point'.$point;
        $json[$i]->$x->stop = date('H:i:s');
        $json[$i]->$x->time = countTime($json[$i]->$x->start, $json[$i]->$x->stop);
      }
    }
    $db->setJSON(json_encode($json));//Zapis danych do json
  }



}
