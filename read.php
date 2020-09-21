<?php
session_start();
$strJsonFileContents = file_get_contents("tree.json");
$array = json_decode($strJsonFileContents, true);


$array = $array["computer"];

if(isset($_SESSION['choosed'])){
    $ch = $_SESSION['choosed'];
    for($i=1;$i<strlen($ch);$i++){
        $array =  $array["answer"][$ch[$i]];
    }
}else{
    $_SESSION['choosed']="0";  
}


if(!isset($_POST['value'])){
    die(json_encode(zar($array)));
}
else
{
    if(array_key_exists("end",$array)) {
    die($array["end"]);
}
    $count = count($array["answer"]); 
    for($i=0;$i<$count;$i++){
        if($array["answer"][$i]["value"]==$_POST['value'])
        {
            $_SESSION['choosed']= $_SESSION['choosed'].$i;
            die(json_encode(zar($array["answer"][$i])));
        }
    }
}


function zar($array){

    if(is_array($array))
    {
        if(array_key_exists("answer",$array)){
            $count = count($array["answer"]); 

            if(array_key_exists("question",$array)) {
                $count = count($array["answer"]); 
                for($i=0;$i<$count;$i++){
                    zar($array["answer"]);
                }
            }
        }
    }
    return $array;
}
?>