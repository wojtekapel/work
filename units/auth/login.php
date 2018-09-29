<?php
include "../../class/database/database.php";
session_start();

$db = new db();
if(isset($_GET['name'])){
  $res = $db->login($_GET['name'], $_GET['pass']);
  if($res){
  $_SESSION['login'] = $_GET['name'];
  echo $res;
}
  // echo $_GET['name'];

}
