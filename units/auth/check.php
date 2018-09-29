<?php

session_start();

if(!isset($_SESSION['login'])) echo 'out';
else echo $_SESSION['login'];
