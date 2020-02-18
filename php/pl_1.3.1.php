<?php
error_reporting(0);
require_once '../php/DB.php';

$myDB = new DB();
$conn = $myDB->connection();
$conn->query("SET NAMES UTF8");

$data = null;
$sql1="select distinct actype from activity where actype like '讲座'";
$result1 = mysqli_query($conn,$sql1);
$row1=$result1->fetch_assoc();
$temp1=$row1['actype'];

$sql2="select distinct actype from activity where actype like '展览'";
$result2 = mysqli_query($conn,$sql2);
$row2=$result2->fetch_assoc();
$temp2=$row2['actype'];

$sql3="select distinct actype from activity where actype like '演出'";
$result3 = mysqli_query($conn,$sql3);
$row3=$result3->fetch_assoc();
$temp3=$row3['actype'];

$sql4="select distinct actype from activity where actype like '会议'";
$result4 = mysqli_query($conn,$sql4);
$row4=$result4->fetch_assoc();
$temp4=$row4['actype'];

$sql5="select distinct actype from activity where actype like '比赛'";
$result5 = mysqli_query($conn,$sql5);
$row5=$result5->fetch_assoc();
$temp5=$row5['actype'];

$sql6="select distinct actype from activity where actype like '论坛'";
$result6 = mysqli_query($conn,$sql6);
$row6=$result6->fetch_assoc();
$temp6=$row6['actype'];

$sexData[] = [
    "value"=> 1,
    "name" => $temp1,
];

$sexData[] = [
    "value"=> 1,
    "name" => $temp2,
];

$sexData[] = [
    "value"=> 1,
    "name" => $temp3,
];

$sexData[] = [
    "value"=> 1,
    "name" => $temp4,
];

$sexData[] = [
    "value"=> 1,
    "name" => $temp5,
];

$sexData[] = [
    "value"=> 1,
    "name" => $temp6,
];

$data = [
    "success" => 0,
    "legend" => [
        "data" => ['讲座','展览','演出','会议','比赛','论坛'],
        ],
    "series"=>[
        "data"=>$sexData
    ],
];

$json_string = json_encode($data, JSON_UNESCAPED_UNICODE);
//echo $json_string;
// 写入文件
file_put_contents('../json/pl_1.3.1.txt', $json_string);
