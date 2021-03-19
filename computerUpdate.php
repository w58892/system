<?php
if ($_SERVER["REQUEST_METHOD"] != "POST") {
    header("Location: index.php");
  }
  require_once 'config.php';
    $response = [];


  if (trim($_POST['ID']) == "ID"){

  $sth = $db->prepare('INSERT INTO computers VALUE (NULL,:procesor,:procesorurl,:motherboard,:motherboardurl,:graphic,:graphicurl,:RAM,:RAMurl,:disc,:discurl,:PSU,:PSUurl,:price)');
  $sth->bindValue(':procesor', trim($_POST['Procesor']), PDO::PARAM_STR);
  $sth->bindValue(':procesorurl', trim($_POST['ProcesorURL']), PDO::PARAM_STR);
  $sth->bindValue(':motherboard', trim($_POST['Motherboard']), PDO::PARAM_STR);
  $sth->bindValue(':motherboardurl', trim($_POST['MotherboardURL']), PDO::PARAM_STR);
  $sth->bindValue(':graphic', trim($_POST['Graphic']), PDO::PARAM_STR);
  $sth->bindValue(':graphicurl', trim($_POST['GraphicURL']), PDO::PARAM_STR);
  $sth->bindValue(':RAM', trim($_POST['RAM']), PDO::PARAM_STR);
  $sth->bindValue(':RAMurl', trim($_POST['RAMURL']), PDO::PARAM_STR);
  $sth->bindValue(':disc', trim($_POST['Disc']), PDO::PARAM_STR);
  $sth->bindValue(':discurl', trim($_POST['DiscURL']), PDO::PARAM_STR);
  $sth->bindValue(':PSU', trim($_POST['PSU']), PDO::PARAM_STR);
  $sth->bindValue(':PSUurl', trim($_POST['PSUURL']), PDO::PARAM_STR);
  $sth->bindValue(':price', trim($_POST['Price']), PDO::PARAM_INT);
  $computer = $sth->execute();

    if ($computer == true)
        die('{"success":"true"}');
    else
        die('{"success":"false"}');

  }else{

    $sth = $db->prepare('UPDATE computers SET procesor=:procesor, procesorurl=:procesorurl, motherboard=:motherboard, motherboardurl=:motherboardurl, graphic=:graphic, graphicurl=:graphicurl, RAM=:RAM, RAMurl=:RAMurl, disc=:disc, discurl=:discurl, PSU=:PSU, PSUurl=:PSUurl, price=:price WHERE ID=:ID');
    $sth->bindValue(':ID', trim($_POST['ID']), PDO::PARAM_INT);
    $sth->bindValue(':procesor', trim($_POST['Procesor']), PDO::PARAM_STR);
    $sth->bindValue(':procesorurl', trim($_POST['ProcesorURL']), PDO::PARAM_STR);
    $sth->bindValue(':motherboard', trim($_POST['Motherboard']), PDO::PARAM_STR);
    $sth->bindValue(':motherboardurl', trim($_POST['MotherboardURL']), PDO::PARAM_STR);
    $sth->bindValue(':graphic', trim($_POST['Graphic']), PDO::PARAM_STR);
    $sth->bindValue(':graphicurl', trim($_POST['GraphicURL']), PDO::PARAM_STR);
    $sth->bindValue(':RAM', trim($_POST['RAM']), PDO::PARAM_STR);
    $sth->bindValue(':RAMurl', trim($_POST['RAMURL']), PDO::PARAM_STR);
    $sth->bindValue(':disc', trim($_POST['Disc']), PDO::PARAM_STR);
    $sth->bindValue(':discurl', trim($_POST['DiscURL']), PDO::PARAM_STR);
    $sth->bindValue(':PSU', trim($_POST['PSU']), PDO::PARAM_STR);
    $sth->bindValue(':PSUurl', trim($_POST['PSUURL']), PDO::PARAM_STR);
    $sth->bindValue(':price', trim($_POST['Price']), PDO::PARAM_INT);
    $computer = $sth->execute();

    if ($computer == true)
    die('{"success":"true"}');
else
    die('{"success":"false"}');

  }


    


?>