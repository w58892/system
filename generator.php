<?php

if ($_SERVER["REQUEST_METHOD"] != "POST") {
    header("Location: index.php");
  }

require_once __DIR__ . '/vendor/autoload.php';

use Rubix\ML\Datasets\Labeled;
use Rubix\ML\PersistentModel;
use Rubix\ML\Persisters\Filesystem;
use Rubix\ML\Extractors\CSV;
use Rubix\ML\Classifiers\ClassificationTree;



$plik_nazwa=$_FILES['plik']['name'];


$plik_lokalizacja=$_FILES['plik']['tmp_name']; //tymczasowa lokalizacja pliku
$plik_mime=$_FILES['plik']['type']; //typ MIME pliku wysłany przez przeglądarkę
$plik_rozmiar=$_FILES['plik']['size'];
$plik_blad=$_FILES['plik']['error']; //kod błędu

/* sprawdzenie, czy plik został wysłany */
if (!$plik_lokalizacja) {
	die("Nie wysłano żadnego pliku");
}

/* sprawdzenie błędów */
switch ($plik_blad) {
	case UPLOAD_ERR_OK:
		break;
	case UPLOAD_ERR_NO_FILE:
		exit("Brak pliku.");
		break;
	case UPLOAD_ERR_INI_SIZE:
	case UPLOAD_ERR_FORM_SIZE:
		exit("Przekroczony maksymalny rozmiar pliku.");
		break;
	default:
		exit("Nieznany błąd.");
		break;
}

/* sprawdzenie rozszerzenia pliku - dzięki temu mamy pewność, że ktoś nie zapisze na serwerze pliku .php */
$dozwolone_rozszerzenia=array("csv", "txt");
$plik_rozszerzenie=pathinfo(strtolower($plik_nazwa), PATHINFO_EXTENSION);
if (!in_array($plik_rozszerzenie, $dozwolone_rozszerzenia, true)) {
	exit("Niedozwolone rozszerzenie pliku.");
}


//if(!move_uploaded_file($_FILES['plik']['tmp_name'], $lokalizacja))
/* przeniesienie pliku z folderu tymczasowego do właściwej lokalizacji */
if (!move_uploaded_file($plik_lokalizacja, "knowledge.csv")) {
	exit("Nie udało się przenieść pliku.");
}










$dataset = Labeled::fromIterator(new CSV("knowledge.csv"));

$estimator = new PersistentModel(new ClassificationTree(10, 1, 10, 0.01), new Filesystem('tree.model'));

$estimator->train($dataset);
$estimator->save();
exit("success");
//echo $estimator->rules(['place', 'what', 'game', 'resolution', 'FPS', 'graphic']);

?>