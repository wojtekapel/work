<?php

session_start();
include "../../class/database/list.php";
require_once "../../lib/day_lib.php";

$db = new lista();
if(isset($_SESSION['login'])){
  $user = $_SESSION['login'];
}
else die;

if(isset($_GET['action'])){
  if($_GET['action'] == 'start'){

        if(day_json($db->getJSON($user))){
          $json = json_encode(day_json($db->getJSON($user)));
          echo $query = "UPDATE weeks SET json = '".$json."' WHERE week =".date('W')." AND user ='".$user."'";//zrób funkcję

          $db->find($query);
        }


        $query = "UPDATE weeks SET status = 'active' WHERE week = ".date('W')." AND user ='".$user."'";
        $db->find($query);
  }
  elseif($_GET['action'] == 'stop'){
        $query = "UPDATE weeks SET status = 'closed' WHERE week = ".date('W')." AND user ='".$user."'";
        $db->find($query);
        $json = json_decode($db->getJSON($user)['json']);


        for($i=0; $i < count($json); $i++){
          if($json[$i]->day == date('w')) {
             $json[$i]->stop = date('H:i:s');
             $point = 'point'. $json[$i]->points;
             $dojazd = $json[$i]->$point->dojazd;
             $endpoint = $json[$i]->$point->stop;
             $endday = $json[$i]->stop;
             $json[$i]->$point->dojazd = lastpoint($dojazd, $endpoint, $endday);

          }
        }
        $json = json_encode($json);
        echo $query = "UPDATE weeks SET json = '".$json."' WHERE week =".date('W')." AND user ='".$user."'";
        $db->find($query);

        $toDate = date('Y-m-d');
        $query = "UPDATE weeks SET to_date = '$toDate' WHERE week = ".date('W')." AND user ='".$user."'";
        $db->find($query);





  }











  if($_GET['action'] == 'stop'){

     echo 'stop';
  }

}
