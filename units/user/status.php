<?php
session_start();
include "../../class/database/list.php";
$db = new lista();
$result = $db->status($_SESSION['login']);

if($result != 'none') echo $result;
else echo $result;
