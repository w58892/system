

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="css/result.css"> 
  <title>Document</title>
</head>
<body>
<header>
  <a id="href" href="index.php">Strona główna</a>
          <nav>
              <?php
              require_once 'config.php';
              session_start();
            
              if(!isset($_SESSION['userID']))
              header("Location: index.php");
?>
                <a id="href" href="logout.php">Wyloguj</a>
          </nav>
        </header>


  <?php


  $stm = $db->prepare('SELECT * FROM users WHERE userID=:id limit 1');
  $stm->bindValue(':id', $_SESSION['userID'], PDO::PARAM_STR);
  $stm->execute();
  $user = $stm->fetch(PDO::FETCH_ASSOC);


if($user['computerID']==NULL){


?>
<div>
    Nie wybrano zestawu
</div>


<?php
die();
}else{

  $sth = $db->prepare('SELECT * FROM computers WHERE id=:id limit 1');
  $sth->bindValue(':id', $user['computerID'], PDO::PARAM_STR);
  $sth->execute();
  $result = $sth->fetch(PDO::FETCH_ASSOC);



?>  
<h2>Najbardziej dopasowany do Twoich potrzeb zestaw komponentów komputerowych</h2>


  <div>
    <p>Procesor</p>
    <a target="_blank" href="<?php echo $result["procesorurl"]?>">
      <?php echo $result["procesor"]?>
    </a>
  </div>
  <div>
  <p>Płyta główna</p>
  <a target="_blank" href="<?php echo $result["motherboardurl"]?>">
    <?php echo $result["motherboard"]?>
  </a>
  </div>
  
  
  
    <?php 
    if($result["graphic"] != "")
      echo 
      '<div><p>karta graficzna</p><a target="_blank" href="'.$result["graphicurl"].'">'.
      $result["graphic"].'</a></div>';
      ?>
  

  <div>
  <p>RAM</p>
  <a target="_blank" href="<?php echo $result["RAMurl"]?>">
    <?php echo $result["RAM"]?>
    </a>
</div>
  <div>
  <p>Dysk</p>
  <a target="_blank" href="<?php echo $result["discurl"]?>">
    <?php echo $result["disc"]?>
    </a>
</div>
  <div>
  <p>Zasilacz</p>
  <a target="_blank" href="<?php echo $result["PSUurl"]?>">
    <?php echo $result["PSU"]?>
    </a>
 </div>
  <div>
  <p >Cena</p>
  <p class="price"><?php echo $result["price"]." zł"?></p>
  
 </div>

<?php
}
?>
</body>
</html>

