<?php
if ($_SERVER["REQUEST_METHOD"] != "POST") {
    header("Location: index.php");
}

require_once 'config.php';

$ID = trim($_POST['ID']);

$sth = $db->prepare('SELECT * FROM computers WHERE ID=:ID limit 1');
$sth->bindValue(':ID', $ID, PDO::PARAM_INT);
$sth->execute();
$computer = $sth->fetch(PDO::FETCH_ASSOC);

$response = [];
if ($computer) {
    $response['ID'] = $computer['ID'];
    $response['procesor'] = $computer['procesor'];
    $response['procesorurl'] = $computer['procesorurl'];
    $response['motherboard'] = $computer['motherboard'];
    $response['motherboardurl'] = $computer['motherboardurl'];
    $response['graphic'] = $computer['graphic'];
    $response['graphicurl'] = $computer['graphicurl'];
    $response['RAM'] = $computer['RAM'];
    $response['RAMurl'] = $computer['RAMurl'];
    $response['disc'] = $computer['disc'];
    $response['discurl'] = $computer['discurl'];
    $response['PSU'] = $computer['PSU'];
    $response['PSUurl'] = $computer['PSUurl'];
    $response['price'] = $computer['price'];


    } else {
      $response['ID'] = "wrong";

    }
  
    die(json_encode($response));

?>