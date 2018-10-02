<?php

class db{

 protected function connect($query){

   $connection = new mysqli('localhost', 'root', '', 'navi');
   $connection = new mysqli('localhost', 'root', '', 'navi');

   if($connection->connect_errno > 0){
     echo 'błąd połączenia z bazą danych';
   }
   else {
     $result = $connection->query($query);
     $connection->close();
     return $result;
   }
 }

 public function login($user, $pass){
   $query = 'SELECT * FROM users WHERE name = "'.$user.'"';
   $result = $this->connect($query)->fetch_assoc();
   // if ($pass == $result['password']){
   //   echo 'ok';
   // }
   // else{
   //   echo 'out';
   // }
   return ($pass == $result['password']);
 }

 public function get($query){
   $result = $this->connect($query);
   return $result;

 }



 // public function test(){
 //  $query = 'SELECT * FROM users WHERE id=2';
 //  $rows = $this->connect($query)->fetch_assoc();
 //  echo $rows['name'];
 // }

}
