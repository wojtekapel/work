<?php

session_start();
include "../../class/database/list.php";

$db = new lista();

$query = "SELECT * FROM errorsLog";
$result = $db->find($query);

    while($row = $result->fetch_assoc()){
      echo " <div class='media  bg-white border topSpace'>

                  <div class='media-body'>
                  <h6 class='red'>".$row['error']."  - ".$row['error_index']."</h6><small><i>Dodany ".$row['date']."  ".$row['time']." przez ".$row['user']."</i></small>
                  <br/><br/><h6>".substr($row['description'], 0, 40)." ...<br/><a href='#'><b><i><small>Zobacz więcej.</small></i></b></a></h6>
                  </div>

             </div>

      ";
    }
