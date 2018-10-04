<?php

include "../class/database/list.php";
session_start();
$db = new lista();
$rows = $db->getWEEKS($_SESSION['login']);

while($row = $rows->fetch_assoc()){

  $obj = json_decode($row['json']);
  echo 'Tydzien '.$row['week'];
  echo '<br/>';
}
// print_r($rows);
