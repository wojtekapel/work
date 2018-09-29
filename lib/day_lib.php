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
    return null;


  }
}

function czas($time, $start){

  $x = explode(':', $time);
  $xx = explode(":", $start);

  $xxx = array($x[0]-$xx[0], $x[1]-$xx[1] );
  return $xxx;
}
