<?php
include "../../class/database/list.php";
session_start();

if(isset($_POST['error'])){

  $error = $_POST['error'];
  $index = $_POST['index'];
  $desc = $_POST['desc'];
  $user = $_SESSION['login'];
  $status = $_POST['status'];
  $date = date('Y-m-d');
  $time = date('H:i:s');

  $query = "INSERT INTO errorsLog VALUES(NULL, '$error', '$index', '$desc', '$user', '$status', null, '$date', '$time')";
  $db = new lista();
  $db->find($query);
}
