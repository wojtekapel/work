<?php

// include "../class/database/database.php";


function day_array(){

  $date = date('Y-m-d');
  $time = date('H:i:s');
  $day = date('w');
  $array = array('day'=>$day, 'date'=>$date, 'start'=>$time, 'stop'=>$time, 'points'=>0);
  return $array;
}


function day_json($row){

  if($row['json'] == 'empty'){
    $array = array() ;
    array_push($array, day_array());
    return $temp =  $array;
  }
  else{
    $tempArray = json_decode($row['json']);
    array_push($tempArray, day_array());
    return $temp = $tempArray;
  }
}

function add_day($row){

}

function czas($time, $start){

  $poczatekPracy = explode(':', $time);
  $startDnia = explode(":", $start);
   $h = $poczatekPracy[0]-$startDnia[0];
   if($poczatekPracy[1] < $startDnia[1]){
     $m = (60 - $startDnia[1]) + $poczatekPracy[1];
     $h = $h - 1;
   }
   else{
     $m = $poczatekPracy[1] - $startDnia[1];
   }
  $przejazd = array($h, $m);
  return $przejazd;
}

function countTime($start, $stop){

  $poczatekPracy = explode(':', $start);
  $koniecPracy = explode(':', $stop);
  $h = $koniecPracy[0] - $poczatekPracy[0];
  if($koniecPracy[1] < $poczatekPracy[1]){
    $m = (60 - $poczatekPracy[1]) + $koniecPracy[1];
    $h = $h - 1;
  }
  else{
    $m = $koniecPracy[1] - $poczatekPracy[1];
  }
  $czasPracy = array($h, $m);
  return $czasPracy;
}

function lastpoint($dojazd, $endpoint, $endday){
   $powrot = czas($endday, $endpoint);
   $sumaH = $dojazd[0]+$powrot[0];
   $sumaM = $dojazd[1]+$powrot[1];
     if($sumaM > 59){
       $sumaM = $sumaM - 60;
       $sumaH = $sumaH + 1;
     }
   return $suma = array($sumaH, $sumaM);

}
