<?php
error_reporting(0);
require_once '../php/DB.php';

$myDB = new DB();
$conn = $myDB->connection();
$conn->query("SET NAMES UTF8");
$data = null;
$sexData = null;
$sqlBonum1="select count(*) as realnum from bonum where bonum<=5";
$resultBonum1=$conn->query($sqlBonum1);
$rowBonum1=$resultBonum1->fetch_assoc();
$numBonum1=$rowBonum1['realnum'];

$sqlBonum2="select count(*) as realnum from bonum where bonum between 5 and 15";
$resultBonum2=$conn->query($sqlBonum2);
$rowBonum2=$resultBonum2->fetch_assoc();
$numBonum2=$rowBonum2['realnum'];

$sqlBonum3="select count(*) as realnum from bonum where bonum between 15 and 25";
$resultBonum3=$conn->query($sqlBonum3);
$rowBonum3=$resultBonum3->fetch_assoc();
$numBonum3=$rowBonum3['realnum'];

$sqlBonum4="select count(*) as realnum from bonum where bonum between 25 and 35";
$resultBonum4=$conn->query($sqlBonum3);
$rowBonum4=$resultBonum4->fetch_assoc();
$numBonum4=$rowBonum4['realnum'];

$sqlBonum5="select count(*) as realnum from bonum where bonum>=35";
$resultBonum5=$conn->query($sqlBonum5);
$rowBonum5=$resultBonum5->fetch_assoc();
$numBonum5=$rowBonum5['realnum'];

$sexData[] = [
    "value"=> $numBonum1,
    "name" => "小于5次",
];

$sexData[] = [
    "value"=> $numBonum2,
    "name" => "5-15次",
];

$sexData[] = [
    "value"=> $numBonum3,
    "name" => "15-25次",
];

$sexData[] = [
    "value"=> $numBonum4,
    "name" => "25-35次",
];

$sexData[] = [
    "value"=> $numBonum5,
    "name" => "大于35次",
];

$data = [
    "success" => 0,
    "legend" => [
        "data" => ["numBonum"],
        ],
    "series"=>[
        "data"=>$sexData
    ],
];

$json_string = json_encode($data, JSON_UNESCAPED_UNICODE);
//echo $json_string;
// 写入文件
//file_put_contents('../json/pl_1.2.1.txt', $json_string);
file_put_contents('../json/pl_1.3.6.txt', $json_string);
