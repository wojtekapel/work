<?php

session_start();
include "../../class/database/list.php";
$db = new lista();

if(isset($_POST['user'])){

  $user = $_POST['user'];
  $password = $_POST['pass'];
  $repassword = $_POST['repass'];
  $token = rand(33745, 88522);
  $data = date('Y-m-d');
  $time = date('H:i:s');
  // dodaj walidację

      if($password != $repassword){
        echo 'pass';
      }
      else{
        $query = "INSERT INTO persons VALUES(null, '$user', null, '$password', '$token', '$data', '$time')";
        $db->find($query);
        $_SESSION['login'] = $user;
        echo 'ok';
      }
}
