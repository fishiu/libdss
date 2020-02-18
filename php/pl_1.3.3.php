<?php
error_reporting(0);
require_once '../php/DB.php';

$myDB = new DB();
$conn = $myDB->connection();
$conn->query("SET NAMES UTF8");
$data = null;
$sexData = null;

$sqlBoduring1 = "select count(during) as during from boduring where during=60";
$resultBoduring1 = $conn->query($sqlBoduring1);
$rowBoduring1 = $resultBoduring1->fetch_assoc();
$numBoduring1 = $rowBoduring1['during'];

$sqlBoduring2 = "select count(during) as during from boduring where during=120";
$resultBoduring2 = $conn->query($sqlBoduring2);
$rowBoduring2 = $resultBoduring2->fetch_assoc();
$numBoduring2 = $rowBoduring2['during'];

$sexData[] = [
    "value" => $numBoduring1,
    "name" => "60天",
];

$sexData[] = [
    "value" => $numBoduring2,
    "name" => "120天",
];

$data = [
    "success" => 0,
    "legend" => [
        "data" => ["numBoduring"],
    ],
    "series" => [
        "data" => $sexData
    ],
];

$json_string = json_encode($data, JSON_UNESCAPED_UNICODE);
//echo $json_string;
// 写入文件
//file_put_contents('../json/pl_1.2.1.txt', $json_string);
file_put_contents('../json/pl_1.3.3.txt', $json_string);