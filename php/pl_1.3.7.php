<?php
error_reporting(0);
require_once '../php/DB.php';

$myDB = new DB();
$conn = $myDB->connection();
$conn->query("SET NAMES UTF8");
$data = null;
$sexData = null;
$sqlActattence1 = "SELECT count(*) as actattence from actattence where actype like '会议'";
$resultActattence1 = mysqli_query($conn,$sqlActattence1);
$rowActattence1=$resultActattence1->fetch_assoc();
$numActattence1=$rowActattence1['actattence'];

$sqlActattence2 = "SELECT count(*) as actattence from actattence where actype like '展览'";
$resultActattence2 = mysqli_query($conn,$sqlActattence2);
$rowActattence2=$resultActattence2->fetch_assoc();
$numActattence2=$rowActattence2['actattence'];

$sqlActattence3 = "SELECT count(*) as actattence from actattence where actype like '比赛'";
$resultActattence3 = mysqli_query($conn,$sqlActattence3);
$rowActattence3=$resultActattence3->fetch_assoc();
$numActattence3=$rowActattence3['actattence'];

$sqlActattence4 = "SELECT count(*) as actattence from actattence where actype like '演出'";
$resultActattence4 = mysqli_query($conn,$sqlActattence4);
$rowActattence4=$resultActattence4->fetch_assoc();
$numActattence4=$rowActattence4['actattence'];

$sqlActattence5 = "SELECT count(*) as actattence from actattence where actype like '讲座'";
$resultActattence5 = mysqli_query($conn,$sqlActattence5);
$rowActattence5=$resultActattence5->fetch_assoc();
$numActattence5=$rowActattence5['actattence'];

$sqlActattence6 = "SELECT count(*) as actattence from actattence where actype like '论坛'";
$resultActattence6 = mysqli_query($conn,$sqlActattence6);
$rowActattence6=$resultActattence6->fetch_assoc();
$numActattence6=$rowActattence6['actattence'];

$sexData[] = [
    "value"=> $numActattence1,
    "name" => "会议",
];

$sexData[] = [
    "value"=> $numActattence2,
    "name" => "展览",
];

$sexData[] = [
    "value"=> $numActattence3,
    "name" => "比赛",
];

$sexData[] = [
    "value"=> $numActattence4,
    "name" => "演出",
];

$sexData[] = [
    "value"=> $numActattence5,
    "name" => "讲座",
];

$sexData[] = [
    "value"=> $numActattence6,
    "name" => "论坛",
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
file_put_contents('../json/pl_1.3.7.txt', $json_string);