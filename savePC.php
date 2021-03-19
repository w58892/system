<?php
  require_once 'config.php';
    session_start();

    if(!isset($_SESSION['userID'])){
        header("Location: index.php");
    }

    $sth = $db->prepare('UPDATE users SET computerID=:computerID WHERE userID=:userID');
    $sth->bindValue(':computerID', trim($_GET['computerID']), PDO::PARAM_INT);
    $sth->bindValue(':userID', $_SESSION['userID'], PDO::PARAM_INT);
    $computer = $sth->execute();

    if($computer){
        header("Location: userPanel.php");
    }

?>