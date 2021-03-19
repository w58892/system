<?php

if ($_SERVER["REQUEST_METHOD"] != "POST") {
  header("Location: index.php");
}

?>


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
  
  <?php
  require_once __DIR__ . '/vendor/autoload.php';
  require_once 'config.php';

  use Rubix\ML\PersistentModel;
  use Rubix\ML\Persisters\Filesystem;
  use Rubix\ML\Datasets\Unlabeled;

$place = $what = $game = $resolution = $FPS = $graphic = "-";



 if (isset($_POST["place"]))
    $place = $_POST["place"];

    if (isset($_POST["what"]))
    $what = $_POST["what"];

    if (isset($_POST["game"]))
    $game = $_POST["game"];

    if (isset($_POST["resolution"]))
    $resolution = $_POST["resolution"];

    if (isset($_POST["FPS"]))
    $FPS = $_POST["FPS"];

    if (isset($_POST["graphic"]))
    $graphic = $_POST["graphic"];


$samples = array($place, $what, $game, $resolution, $FPS, $graphic);
$samples = array($samples);

  $estimator = PersistentModel::load(new Filesystem('example.model'));

  $dataset = new Unlabeled($samples);
  $predictions = $estimator->predict($dataset);
  
try{
  $sth = $db->prepare('SELECT * FROM computers WHERE id=:id limit 1');
  $sth->bindValue(':id', $predictions[0], PDO::PARAM_STR);
  $sth->execute();
  $result = $sth->fetch(PDO::FETCH_ASSOC);

}
catch (PDOException $e){
  die ("Error connecting to database!");
}

?>


<header>
  <a id="href" href="index.php">Strona główna</a>
          <nav>
              <?php
              session_start();
                if (isset($_SESSION['admin'])){  ?>
                <a id="href" href="adminPanel.php">Panel administratora</a>
                <a id="href" href="logout.php">Wyloguj</a>
              <?php }else if(isset($_SESSION['userID'])){ ?>
                <a id="href" href="userPanel.php">Wybrany zestaw</a>
                <a id="href" href="logout.php">Wyloguj</a>
              <?php }else{ ?>
                <a id="href" href="log.php">Zaloguj</a>
              <?php } ?> 
          </nav>
        </header>




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
if(isset($_SESSION['userID']))
{
?>
 <a  href="savePC.php?computerID=<?php echo $result["ID"]?>">Zapisz</a>
<?php
}
?>

</body>
</html>