<?php

error_reporting(0);
require_once '../php/DB.php';

$myDB = new DB();
$conn = $myDB->connection();

$sqlMale = "SELECT count(*) as male from users where gender='男'";
$resultMale = $conn->query($sqlMale);
$rowMale = $resultMale->fetch_assoc();
$numMale = $rowMale['male'];

$sqlFemale = "SELECT count(*) as female from users where gender='女'";
$resultFemale = $conn->query($sqlFemale);
$rowFemale = $resultFemale->fetch_assoc();
$numFemale = $rowFemale['female'];


//$data = array();
//$data["success"] = 0;
//$data["legend"] = array();
//$data["legend"]["data"] = array("男性用户", "女性用户");
//$data["series"] = array();
//$data["series"]["data"] = array(array("value" => $numMale, "name" => "男性用户"), array("value" => $numFemale, "name" => "女性用户"),);

$sexData[] = [
    "value" => $numMale,
    "name" => "男性用户"
];
$sexData[] = [
    "value" => $numFemale,
    "name" => "女性用户"
];

$data = [
    "success" => 0,
    "legend" => [
        "data" => ["男性用户", "女性用户"]
    ],
    "series" => [
        "data" => $sexData
    ],
];


$json_string = json_encode($data, JSON_UNESCAPED_UNICODE);
// 写入文件
file_put_contents('../json/pl_1.1.1.txt', $json_string);
