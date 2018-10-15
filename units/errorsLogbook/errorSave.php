<?php
session_start();

include "../../class/database/list.php";


if(isset($_POST['truck'])){

  $error = $_POST['num'];
  $index = $_POST['index'];
  $post = $_POST['post'];
  $truck = $_POST['truck'];
  $status = $_POST['status'];

  $data = date('Y-m-d');
  $time = date('H:i:s');
  $user = $_SESSION['login'];

  $query = "INSERT INTO errorsLog VALUES(NULL, '$error', '$index', '$post', '$user', '$status', NULL, '$data', '$time')";
  $db = new lista();
  $db->find($query);
  




}
