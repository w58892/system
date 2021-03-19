<?php
require_once __DIR__ . '/vendor/autoload.php';

use Rubix\ML\Datasets\Labeled;
use Rubix\ML\PersistentModel;
use Rubix\ML\Persisters\Filesystem;
use Rubix\ML\Classifiers\ExtraTreeClassifier;
use Rubix\ML\Extractors\CSV;
use Rubix\ML\Classifiers\ClassificationTree;

$dataset = Labeled::fromIterator(new CSV('example.csv'));

//$estimator = new PersistentModel(new ExtraTreeClassifier(10, 1, 10, 0.01), new Filesystem('example.model'));

$estimator = new PersistentModel(new ClassificationTree(10, 1, 10, 0.01), new Filesystem('example.model'));

$estimator->train($dataset);
$estimator->save();

echo $estimator->rules(['place', 'what', 'game', 'resolution', 'FPS', 'graphic']);

?>