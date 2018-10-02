<?php

include "../class/database/list.php";

$db = new lista();
$query = "SELECT * FROM weeks WHERE week =".date('W');
$result = $db->find($query)->fetch_assoc();

$dni = array('Niedziela', 'Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota');
echo $result['json'].'<br/>';
$array = json_decode($result['json']);
print_r($array);
echo '<br/><br/><h2> Ilość zapisanych dni : '.count($array).'</h2>';
echo '<br/>';
echo '<h3>Dzień :  '.$dni[$array[0]->day];
