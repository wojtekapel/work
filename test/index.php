<?php
include "../class/status.php";

echo 'index.php<br/>';

$status = new status();
echo 'class<br/>';
$res = $status->active();
print_r($res);
