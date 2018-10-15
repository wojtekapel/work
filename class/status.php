<?php

include "database/database.php";

class status extends db{



  public function active($user){
    $json = $this.getJSON($user);
    echo 'pipa<br/>';
    return $json;
  }

}
