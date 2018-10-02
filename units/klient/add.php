<?php

include "../../class/database/list.php";
session_start();
$db = new lista();

if(isset($_POST['name'])){
  $name = $_POST['name'];
  $obj = new stdClass();
  $obj->name = $_POST['name'];
  $obj->kontakt = $_POST['kontakt'];
  $obj->godziny = $_POST['godziny'];
  $obj->telefon = $_POST['telefon'];
  $obj->user = $_SESSION['login'];
  $json = json_encode($obj);
  $query = "INSERT INTO dest VALUES (NULL, '$name', 12, 13, '$json')";
  $db->find($query);
}
