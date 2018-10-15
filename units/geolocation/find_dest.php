<?php
session_start();
include "../../class/check_target.php";
// print_r($_GET);
$_SESSION['lat'] = $_GET['lat'];
$_SESSION['lon'] = $_GET['lon'];
include "../class/check_target.php";
// $data = new target($_GET['lat'], $_GET['lon']);
// $data->check();
// echo 'GPS : '.$_SESSION['lat'].'  ...  '.$_SESSION['lon'];
$gps = new target($_SESSION['lat'], $_SESSION['lon']);
$gps->check();
