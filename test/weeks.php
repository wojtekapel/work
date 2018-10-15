<?php

include "../class/database/list.php";
session_start();
$db = new lista();
$rows = $db->getWEEKS($_SESSION['login']);
$tok = 0;
echo '<h4>Zestawienie tygodni.</h4><br/><br/>';
$array = array();

while($row = $rows->fetch_assoc()){
   echo '<div class="week">
           <div class="weekN">
              KN'.$row['week'].'
           </div>
           <div class="weekD">
           '.$row['from_date'].' - '.$row['to_date'].'
           </div>

         </div>';

}
