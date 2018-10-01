<?php

include "../../class/database/list.php";
$obj = new stdClass();
$db = new lista();
$json = json_decode($db->getJSON()['json']);

$obj->dayCount = count($json);



print_r($obj);
