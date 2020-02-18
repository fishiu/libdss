<?php
error_reporting(0);
require_once '../php/DB.php';

$myDB = new DB();
$conn = $myDB->connection();
$conn->query("SET NAMES UTF8");
$data = null;
$sexData = null;
$sqlBorate2017_10="select count(*) as time_borrow,lentdate as time from borecords where lentdate like '2017-10-%'";
$resultBorate2017_10 = mysqli_query($conn,$sqlBorate2017_10);
$rowBorate2017_10=$resultBorate2017_10->fetch_assoc();
$numBorate2017_10=$rowBorate2017_10['time_borrow'];

$sqlBorate2017_11="select count(*) as time_borrow,lentdate as time from borecords where lentdate like '2017-11-%'";
$resultBorate2017_11 = mysqli_query($conn,$sqlBorate2017_11);
$rowBorate2017_11=$resultBorate2017_11->fetch_assoc();
$numBorate2017_11=$rowBorate2017_11['time_borrow'];

$sqlBorate2017_12="select count(*) as time_borrow,lentdate as time from borecords where lentdate like '2017-12-%'";
$resultBorate2017_12 = mysqli_query($conn,$sqlBorate2017_12);
$rowBorate2017_12=$resultBorate2017_12->fetch_assoc();
$numBorate2017_12=$rowBorate2017_12['time_borrow'];

$sqlBorate2018_1="select count(*) as time_borrow,lentdate as time from borecords where lentdate like '2018-01-%'";
$resultBorate2018_1 = mysqli_query($conn,$sqlBorate2018_1);
$rowBorate2018_1=$resultBorate2018_1->fetch_assoc();
$numBorate2018_1=$rowBorate2018_1['time_borrow'];

$sqlBorate2018_2="select count(*) as time_borrow,lentdate as time from borecords where lentdate like '2018-02-%'";
$resultBorate2018_2 = mysqli_query($conn,$sqlBorate2018_2);
$rowBorate2018_2=$resultBorate2018_2->fetch_assoc();
$numBorate2018_2=$rowBorate2018_2['time_borrow'];

$sqlBorate2018_3="select count(*) as time_borrow,lentdate as time from borecords where lentdate like '2018-03-%'";
$resultBorate2018_3 = mysqli_query($conn,$sqlBorate2018_3);
$rowBorate2018_3=$resultBorate2018_3->fetch_assoc();
$numBorate2018_3=$rowBorate2018_3['time_borrow'];

$sqlBorate2018_4="select count(*) as time_borrow,lentdate as time from borecords where lentdate like '2018-04-%'";
$resultBorate2018_4 = mysqli_query($conn,$sqlBorate2018_4);
$rowBorate2018_4=$resultBorate2018_4->fetch_assoc();
$numBorate2018_4=$rowBorate2018_4['time_borrow'];

$sqlBorate2018_5="select count(*) as time_borrow,lentdate as time from borecords where lentdate like '2018-05-%'";
$resultBorate2018_5 = mysqli_query($conn,$sqlBorate2018_5);
$rowBorate2018_5=$resultBorate2018_5->fetch_assoc();
$numBorate2018_5=$rowBorate2018_5['time_borrow'];

$sqlBorate2018_6="select count(*) as time_borrow,lentdate as time from borecords where lentdate like '2018-06-%'";
$resultBorate2018_6 = mysqli_query($conn,$sqlBorate2018_6);
$rowBorate2018_6=$resultBorate2018_6->fetch_assoc();
$numBorate2018_6=$rowBorate2018_6['time_borrow'];

$sqlBorate2018_7="select count(*) as time_borrow,lentdate as time from borecords where lentdate like '2018-07-%'";
$resultBorate2018_7 = mysqli_query($conn,$sqlBorate2018_7);
$rowBorate2018_7=$resultBorate2018_7->fetch_assoc();
$numBorate2018_7=$rowBorate2018_7['time_borrow'];

$sqlBorate2018_8="select count(*) as time_borrow,lentdate as time from borecords where lentdate like '2018-08-%'";
$resultBorate2018_8 = mysqli_query($conn,$sqlBorate2018_8);
$rowBorate2018_8=$resultBorate2018_8->fetch_assoc();
$numBorate2018_8=$rowBorate2018_8['time_borrow'];

$sqlBorate2018_9="select count(*) as time_borrow,lentdate as time from borecords where lentdate like '2018-09-%'";
$resultBorate2018_9 = mysqli_query($conn,$sqlBorate2018_9);
$rowBorate2018_9=$resultBorate2018_9->fetch_assoc();
$numBorate2018_9=$rowBorate2018_9['time_borrow'];

$sqlBorate2018_10="select count(*) as time_borrow,lentdate as time from borecords where lentdate like '2018-10-%'";
$resultBorate2018_10 = mysqli_query($conn,$sqlBorate2018_10);
$rowBorate2018_10=$resultBorate2018_10->fetch_assoc();
$numBorate2018_10=$rowBorate2018_10['time_borrow'];

$sqlBorate2018_11="select count(*) as time_borrow,lentdate as time from borecords where lentdate like '2018-11-%'";
$resultBorate2018_11 = mysqli_query($conn,$sqlBorate2018_11);
$rowBorate2018_11=$resultBorate2018_11->fetch_assoc();
$numBorate2018_11=$rowBorate2018_11['time_borrow'];

$sqlBorate2018_12="select count(*) as time_borrow,lentdate as time from borecords where lentdate like '2018-12-%'";
$resultBorate2018_12 = mysqli_query($conn,$sqlBorate2018_12);
$rowBorate2018_12=$resultBorate2018_12->fetch_assoc();
$numBorate2018_12=$rowBorate2018_12['time_borrow'];

$sqlBorate2019_1="select count(*) as time_borrow,lentdate as time from borecords where lentdate like '2019-01-%'";
$resultBorate2019_1 = mysqli_query($conn,$sqlBorate2019_1);
$rowBorate2019_1=$resultBorate2019_1->fetch_assoc();
$numBorate2019_1=$rowBorate2019_1['time_borrow'];

$sqlBorate2019_2="select count(*) as time_borrow,lentdate as time from borecords where lentdate like '2019-02-%'";
$resultBorate2019_2 = mysqli_query($conn,$sqlBorate2019_2);
$rowBorate2019_2=$resultBorate2019_2->fetch_assoc();
$numBorate2019_2=$rowBorate2019_2['time_borrow'];

$sqlBorate2019_3="select count(*) as time_borrow,lentdate as time from borecords where lentdate like '2019-03-%'";
$resultBorate2019_3 = mysqli_query($conn,$sqlBorate2019_3);
$rowBorate2019_3=$resultBorate2019_3->fetch_assoc();
$numBorate2019_3=$rowBorate2019_3['time_borrow'];

$sqlBorate2019_4="select count(*) as time_borrow,lentdate as time from borecords where lentdate like '2019-04-%'";
$resultBorate2019_4 = mysqli_query($conn,$sqlBorate2019_4);
$rowBorate2019_4=$resultBorate2019_4->fetch_assoc();
$numBorate2019_4=$rowBorate2019_4['time_borrow'];

$sexData[] = [
    "value"=> $numBorate2017_10,
    "name" => "2017年10月",
];

$sexData[] = [
    "value"=> $numBorate2017_11,
    "name" => "2017年11月",
];

$sexData[] = [
    "value"=> $numBorate2017_12,
    "name" => "2017年12月",
];

$sexData[] = [
    "value"=> $numBorate2018_1,
    "name" => "2018年1月",
];

$sexData[] = [
    "value"=> $numBorate2018_2,
    "name" => "2017年2月",
];

$sexData[] = [
    "value"=> $numBorate2018_3,
    "name" => "2018年3月",
];

$sexData[] = [
    "value"=> $numBorate2018_4,
    "name" => "2018年4月",
];

$sexData[] = [
    "value"=> $numBorate2018_5,
    "name" => "2018年5月",
];

$sexData[] = [
    "value"=> $numBorate2018_6,
    "name" => "2018年6月",
];

$sexData[] = [
    "value"=> $numBorate2018_7,
    "name" => "2018年7月",
];

$sexData[] = [
    "value"=> $numBorate2018_8,
    "name" => "2018年8月",
];

$sexData[] = [
    "value"=> $numBorate2018_9,
    "name" => "2018年9月",
];

$sexData[] = [
    "value"=> $numBorate2018_10,
    "name" => "2018年10月",
];

$sexData[] = [
    "value"=> $numBorate2018_11,
    "name" => "2018年11月",
];

$sexData[] = [
    "value"=> $numBorate2018_12,
    "name" => "2018年12月",
];

$sexData[] = [
    "value"=> $numBorate2019_1,
    "name" => "2019年1月",
];

$sexData[] = [
    "value"=> $numBorate2019_2,
    "name" => "2019年2月",
];

$sexData[] = [
    "value"=> $numBorate2019_3,
    "name" => "2019年3月",
];

$sexData[] = [
    "value"=> $numBorate2019_4,
    "name" => "2019年4月",
];

$data = [
    "success" => 0,
    "legend" => [
        "data" => ["numBorate"],
        ],
    "series"=>[
        "data"=>$sexData
    ],
];

$json_string = json_encode($data, JSON_UNESCAPED_UNICODE);
//echo $json_string;
// 写入文件
file_put_contents('../json/pl_1.3.5.txt', $json_string);
