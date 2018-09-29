<?php

echo $time = '13:33:22';
$start = '09:01:15';


czas($time, $start);




function czas($time, $start){

  $x = explode(':', $time);
  $xx = explode(":", $start);

  $xxx = array($x[0]-$xx[0], $x[1]-$xx[1] );
  return $xxx;
}
