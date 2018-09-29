<?php

$array = array();
$point1 = array('start' => '10:00:00', 'stop'=>'11:15:15');
$point2 = array('start' => '12:00:00', 'stop'=>'12:15:15' );
$monday = array('day'=>'Monday','date'=>'2018-09-15', 'start'=>'09:30:15', 'stop'=>'13:15:20', 'points'=>2, $point1, $point2);



array_push($array, $monday);
echo $array[0]['day'];
echo '<br/>';
print_r($array);
