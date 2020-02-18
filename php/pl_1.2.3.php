<?php
error_reporting(0);
require_once '../php/DB.php';

$myDB = new DB();
$conn = $myDB->connection();
$conn->query("SET NAMES UTF8");

$sqlRate1 = "select count(userID)/19 as '0-5' from attence where userID in(select userID from users where dist<=5)";
$resultRate1 = $conn->query($sqlRate1);
$rowRate1 = $resultRate1->fetch_assoc();
$numRate1 = $rowRate1['0-5'];

$sqlRate2 = "select count(userID)/19 as '5-20' from attence where userID in(select userID from users where dist between 5 and 20)";
$resultRate2 = $conn->query($sqlRate2);
$rowRate2 = $resultRate2->fetch_assoc();
$numRate2 = $rowRate2['5-20'];

$sqlRate3 = "select count(userID)/19 as '20-40' from attence where userID in(select userID from users where dist between 20 and 40)";
$resultRate3 = $conn->query($sqlRate3);
$rowRate3 = $resultRate3->fetch_assoc();
$numRate3 = $rowRate3['20-40'];

$sqlRate4 = "select count(userID)/19 as '40-60' from attence where userID in(select userID from users where dist between 40 and 60)";
$resultRate4 = $conn->query($sqlRate4);
$rowRate4 = $resultRate4->fetch_assoc();
$numRate4 = $rowRate4['40-60'];

$sqlRate5 = "select count(userID)/19 as '60-80' from attence where userID in(select userID from users where dist between 60 and 80)";
$resultRate5 = $conn->query($sqlRate5);
$rowRate5 = $resultRate5->fetch_assoc();
$numRate5 = $rowRate5['60-80'];

$sqlRate6 = "select count(userID)/19 as '80-100' from attence where userID in(select userID from users where dist between 80 and 100)";
$resultRate6 = $conn->query($sqlRate6);
$rowRate6 = $resultRate6->fetch_assoc();
$numRate6 = $rowRate6['80-100'];

$sqlRate7 = "select count(userID)/19 as '100+' from attence where userID in(select userID from users where dist>=100)";
$resultRate7 = $conn->query($sqlRate7);
$rowRate7 = $resultRate7->fetch_assoc();
$numRate7 = $rowRate7['100+'];

$sexData[] = [
    "value"=>$numRate1,
    "name" => "小于5km"
];

$sexData[] = [
    "value"=>$numRate2,
    "name" => "5-20km"
];

$sexData[] = [
    "value"=>$numRate3,
    "name" => "20-40km"
];

$sexData[] = [
    "value"=>$numRate4,
    "name" => "40-60km"
];

$sexData[] = [
    "value"=>$numRate5,
    "name" => "60-80km"
];

$sexData[] = [
    "value"=>$numRate6,
    "name" => "80-100km"
];

$sexData[] = [
    "value"=>$numRate7,
    "name" => "100+km"
];

$data = [
    "success" => 0,
    "legend" => [
        "data" => ["5km以下", "5-20km","20-40km","40-60km","60-80km","80-100km","100+km"]
    ],
    "series"=>[
        "data"=>$sexData
    ],
];

$json_string = json_encode($data, JSON_UNESCAPED_UNICODE);
//echo $json_string;
// 写入文件
//file_put_contents('../json/pl_1.2.1.txt', $json_string);
file_put_contents('../json/pl_1.2.3.txt', $json_string);
