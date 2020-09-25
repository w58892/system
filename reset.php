<?php
session_start();

if(isset($_POST['reset'])){
    $_SESSION['choosed']="0";
}elseif(isset($_POST['back'])){
    $_SESSION['choosed'] = substr($_SESSION['choosed'], 0, -1);
}
echo $_SESSION['choosed'];

?>