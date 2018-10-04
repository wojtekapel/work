<?php
include "database.php";

class lista extends db{

  public function lista(){

    $query = "SELECT * FROM dest";
    $rows = $this->get($query);
    return $rows;
  }

  public function find($query){
    $rows = $this->get($query);
    return $rows;
  }

  public function status($user){

    if(empty($user)) return false;
    
    $tok = 0;
    $query = "SELECT * FROM weeks WHERE user = '".$user."'";
    $rows = $this->get($query);
      while ($row = $rows->fetch_assoc()) {
        // code...
        if($row['week'] != date('W') && $row['status'] != 'terminated'){
          $query = "UPDATE weeks SET status = 'terminated' WHERE id = ".$row['id'];
          $this->get($query);
        }
        if($row['week'] == date('W')) $tok = 1;

            switch ($row['status']){
                  case 'closed':
                    if($row['week'] == date('W')){
                      echo 'closed';
                    }
                  break;
                  case 'terminated':

                  break;
                  case 'active':
                    if($row['week'] == date('W')){
                      echo 'active';
                    }
                  break;
                  default:


            }

        }

        if($rows->num_rows == 0  || $tok == 0){
          echo 'closed';
          $this->setRow($user);
        }
      }




  protected function setRow($user){
    $week = date('W');
    $date = date('Y-m-d');
    $query = "INSERT INTO weeks VALUES(NULL, '$user', '$week', '$date', '$date', 'closed', 'empty' )";
    $this->get($query);
    echo 'active';
  }

  public function getJSON(){

    $query = 'SELECT * FROM weeks WHERE week = "'.date('W').'"';
    $libResult = $this->get($query)->fetch_assoc();
    return $libResult;
  }

  public function setJSON($json){
    $query = "UPDATE weeks SET json = '$json' WHERE week = ".date('W');
    $this->get($query);
  }

  // public function print($data){
  //   echo $data;
  // }

}
