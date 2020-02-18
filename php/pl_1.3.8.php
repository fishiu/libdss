<?php
error_reporting(0);
require_once '../php/DB.php';

$myDB = new DB();
$conn = $myDB->connection();
$conn->query("SET NAMES UTF8");
$data = null;
$sexData = null;
$sqlduring1="select count(*) as duringnum from during where during<=240";
$resultduring1=$conn->query($sqlduring1);
$rowduring1=$resultduring1->fetch_assoc();
$numduring1=$rowduring1['duringnum'];

$sqlduring2="select count(*) as duringnum from during where during between 240 and 480";
$resultduring2=$conn->query($sqlduring2);
$rowduring2=$resultduring2->fetch_assoc();
$numduring2=$rowduring2['duringnum'];

$sqlduring3="select count(*) as duringnum from during where during between 480 and 720";
$resultduring3=$conn->query($sqlduring3);
$rowduring3=$resultduring3->fetch_assoc();
$numduring3=$rowduring3['duringnum'];

$sqlduring4="select count(*) as duringnum from during where during between 720 and 960";
$resultduring4=$conn->query($sqlduring4);
$rowduring4=$resultduring4->fetch_assoc();
$numduring4=$rowduring4['duringnum'];

$sqlduring5="select count(*) as duringnum from during where during between 960 and 1200";
$resultduring5=$conn->query($sqlduring5);
$rowduring5=$resultduring5->fetch_assoc();
$numduring5=$rowduring5['duringnum'];

$sqlduring6="select count(*) as duringnum from during where during between 1200 and 1440";
$resultduring6=$conn->query($sqlduring6);
$rowduring6=$resultduring6->fetch_assoc();
$numduring6=$rowduring6['duringnum'];

$sqlduring7="select count(*) as duringnum from during where during>=1440";
$resultduring7=$conn->query($sqlduring7);
$rowduring7=$resultduring7->fetch_assoc();
$numduring7=$rowduring7['duringnum'];

$sexData[] = [
    "value"=> $numduring1,
    "name" => "小于4小时",
];

$sexData[] = [
    "value"=> $numduring2,
    "name" => "4-8小时",
];

$sexData[] = [
    "value"=> $numduring3,
    "name" => "8-12小时",
];

$sexData[] = [
    "value"=> $numduring4,
    "name" => "12-16小时",
];

$sexData[] = [
    "value"=> $numduring5,
    "name" => "16-20小时",
];

$sexData[] = [
    "value"=> $numduring6,
    "name" => "20-24小时",
];

$sexData[] = [
    "value"=> $numduring7,
    "name" => "24小时以上",
];

$data = [
    "success" => 0,
    "legend" => [
        "data" => ["numduring"],
        ],
    "series"=>[
        "data"=>$sexData
    ],
];

$json_string = json_encode($data, JSON_UNESCAPED_UNICODE);
//echo $json_string;
// 写入文件
//file_put_contents('../json/pl_1.2.1.txt', $json_string);
file_put_contents('../json/pl_1.3.8.txt', $json_string);