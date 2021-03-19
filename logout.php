<?php
require_once("User.php");
session_start();
//if (isset($_POST['logout']))
//{
    $user = new User;
    $user->logout();
//}
header("Location: index.php"); 
?>