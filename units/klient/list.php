<?php
include "../../class/database/list.php";
$lista = new lista();

$rows = $lista->lista();
echo '</br><select id="listSelect">';


while($row = $rows->fetch_assoc()){
  echo "<option value = ".$row['name'].">".$row['name']."</option>";

}
echo '</select><br/>';
