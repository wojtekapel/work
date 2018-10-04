<?php

session_start();
include "../../class/database/list.php";
require_once "../../lib/day_lib.php";

$db = new lista();

if(isset($_GET['action'])){
  if($_GET['action'] == 'start'){

        if(day_json($db->getJSON())){
          $json = json_encode(day_json($db->getJSON()));
          echo $query = "UPDATE weeks SET json = '".$json."' WHERE week =".date('W');//zrób funkcję
          
          $db->find($query);
        }


        $query = "UPDATE weeks SET status = 'active' WHERE week = ".date('W');
        $db->find($query);
  }
  elseif($_GET['action'] == 'stop'){
        $query = "UPDATE weeks SET status = 'closed' WHERE week = ".date('W');
        $db->find($query);
        $json = json_decode($db->getJSON()['json']);

        for($i=0; $i < count($json); $i++){
          if($json[$i]->day == date('w')) {
             $json[$i]->stop = date('H:i:s');

          }
        }
        $json = json_encode($json);
        echo $query = "UPDATE weeks SET json = '".$json."' WHERE week =".date('W');
        $db->find($query);





  }











  if($_GET['action'] == 'stop'){

     echo 'stop';
  }

}
