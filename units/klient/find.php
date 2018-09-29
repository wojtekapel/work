<?php

include "../../class/database/list.php";

$db = new lista();

if(isset($_GET['key'])){

  $query = "SELECT * FROM dest WHERE name LIKE '%".$_GET['key']."%'";
  $result = $db->find($query);
  if($result->num_rows){

    while($row = $result->fetch_assoc()){
      echo '<br/><span class="cursor link" id="klient'.$row['id'].'">'.$row['name'].'</span><br/>';

    }
  }
  else{
    echo '<br/><span class=" red bold ">Brak wpisów odpowiadających szukanej frazie.</span>';
  }

}

if(isset($_GET['info'])){

  $query = "SELECT * FROM dest WHERE id =".trim($_GET['info'], 'klient');
  $result = $db->find($query);
  echo$result->fetch_assoc()['json'];


}
