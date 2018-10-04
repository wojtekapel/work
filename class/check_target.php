<?php

include "database/database.php";

class target extends db {
  protected $lat, $lon;

  function __construct($lat,$lon){
      $this->lat_up = $lat + 5000;
      $this->lat_dwn = $lat - 5000;
      $this->lon = $lon;

  }

  function check(){


    $query = "SELECT * FROM dest WHERE lat BETWEEN $this->lat_dwn AND $this->lat_up";
    $result = $this->get($query);
          echo '
          <div class="card card-klient">
          <div class="card-header bg-primary text-white">
            Klienci w pobliżu.
          </div>';

    while($row = $result->fetch_assoc()){
          echo '
                 <a href="#"><div class="card-body class-klient" id="klient'.$row["id"].'">
                   <b>'.$row["name"].'</b>
                 </div></a>';

    }
          echo '</div><br/>
          <input type="button" class="btn btn-success btn-block card-klient" onclick="dodajKlienta()" value = "Dodaj"/>
          ';
            echo '<br/>'.$this->lat_up." / ".$this->lat_dwn;

  }

}
