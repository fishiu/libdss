<?php
error_reporting(0);
require_once '../php/DB.php';

$myDB = new DB();
$conn = $myDB->connection();
$conn->query("SET NAMES UTF8");
$data = null;
$sexData = null;
$sqlEnrate2017_10="select sum(time_attence) as ennum from ennum where `time` like '2017-10-%'";
$resultEnrate2017_10 = mysqli_query($conn,$sqlEnrate2017_10);
$rowEnrate2017_10=$resultEnrate2017_10->fetch_assoc();
$numEnrate2017_10=$rowEnrate2017_10['ennum'];

$sqlEnrate2017_11="select sum(time_attence) as ennum from ennum where `time` like '2017-11-%'";
$resultEnrate2017_11 = mysqli_query($conn,$sqlEnrate2017_11);
$rowEnrate2017_11=$resultEnrate2017_11->fetch_assoc();
$numEnrate2017_11=$rowEnrate2017_11['ennum'];

$sqlEnrate2017_12="select sum(time_attence) as ennum from ennum where `time` like '2017-12-%'";
$resultEnrate2017_12 = mysqli_query($conn,$sqlEnrate2017_12);
$rowEnrate2017_12=$resultEnrate2017_12->fetch_assoc();
$numEnrate2017_12=$rowEnrate2017_12['ennum'];

$sqlEnrate2018_1="select sum(time_attence) as ennum from ennum where `time` like '2018-01-%'";
$resultEnrate2018_1 = mysqli_query($conn,$sqlEnrate2018_1);
$rowEnrate2018_1=$resultEnrate2018_1->fetch_assoc();
$numEnrate2018_1=$rowEnrate2018_1['ennum'];

$sqlEnrate2018_2="select sum(time_attence) as ennum from ennum where `time` like '2018-02-%'";
$resultEnrate2018_2 = mysqli_query($conn,$sqlEnrate2018_2);
$rowEnrate2018_2=$resultEnrate2018_2->fetch_assoc();
$numEnrate2018_2=$rowEnrate2018_2['ennum'];

$sqlEnrate2018_3="select sum(time_attence) as ennum from ennum where `time` like '2018-03-%'";
$resultEnrate2018_3 = mysqli_query($conn,$sqlEnrate2018_3);
$rowEnrate2018_3=$resultEnrate2018_3->fetch_assoc();
$numEnrate2018_3=$rowEnrate2018_3['ennum'];

$sqlEnrate2018_4="select sum(time_attence) as ennum from ennum where `time` like '2018-04-%'";
$resultEnrate2018_4 = mysqli_query($conn,$sqlEnrate2018_4);
$rowEnrate2018_4=$resultEnrate2018_4->fetch_assoc();
$numEnrate2018_4=$rowEnrate2018_4['ennum'];

$sqlEnrate2018_5="select sum(time_attence) as ennum from ennum where `time` like '2018-05-%'";
$resultEnrate2018_5 = mysqli_query($conn,$sqlEnrate2018_5);
$rowEnrate2018_5=$resultEnrate2018_5->fetch_assoc();
$numEnrate2018_5=$rowEnrate2018_5['ennum'];

$sqlEnrate2018_6="select sum(time_attence) as ennum from ennum where `time` like '2018-06-%'";
$resultEnrate2018_6 = mysqli_query($conn,$sqlEnrate2018_6);
$rowEnrate2018_6=$resultEnrate2018_6->fetch_assoc();
$numEnrate2018_6=$rowEnrate2018_6['ennum'];

$sqlEnrate2018_7="select sum(time_attence) as ennum from ennum where `time` like '2018-07-%'";
$resultEnrate2018_7 = mysqli_query($conn,$sqlEnrate2018_7);
$rowEnrate2018_7=$resultEnrate2018_7->fetch_assoc();
$numEnrate2018_7=$rowEnrate2018_7['ennum'];

$sqlEnrate2018_8="select sum(time_attence) as ennum from ennum where `time` like '2018-08-%'";
$resultEnrate2018_8 = mysqli_query($conn,$sqlEnrate2018_8);
$rowEnrate2018_8=$resultEnrate2018_8->fetch_assoc();
$numEnrate2018_8=$rowEnrate2018_8['ennum'];

$sqlEnrate2018_9="select sum(time_attence) as ennum from ennum where `time` like '2018-09-%'";
$resultEnrate2018_9 = mysqli_query($conn,$sqlEnrate2018_9);
$rowEnrate2018_9=$resultEnrate2018_9->fetch_assoc();
$numEnrate2018_9=$rowEnrate2018_9['ennum'];

$sqlEnrate2018_10="select sum(time_attence) as ennum from ennum where `time` like '2018-10-%'";
$resultEnrate2018_10 = mysqli_query($conn,$sqlEnrate2018_10);
$rowEnrate2018_10=$resultEnrate2018_10->fetch_assoc();
$numEnrate2018_10=$rowEnrate2018_10['ennum'];

$sqlEnrate2018_11="select sum(time_attence) as ennum from ennum where `time` like '2018-11-%'";
$resultEnrate2018_11 = mysqli_query($conn,$sqlEnrate2018_11);
$rowEnrate2018_11=$resultEnrate2018_11->fetch_assoc();
$numEnrate2018_11=$rowEnrate2018_11['ennum'];

$sqlEnrate2018_12="select sum(time_attence) as ennum from ennum where `time` like '2018-12-%'";
$resultEnrate2018_12 = mysqli_query($conn,$sqlEnrate2018_12);
$rowEnrate2018_12=$resultEnrate2018_12->fetch_assoc();
$numEnrate2018_12=$rowEnrate2018_12['ennum'];

$sqlEnrate2019_1="select sum(time_attence) as ennum from ennum where `time` like '2019-01-%'";
$resultEnrate2019_1 = mysqli_query($conn,$sqlEnrate2019_1);
$rowEnrate2019_1=$resultEnrate2019_1->fetch_assoc();
$numEnrate2019_1=$rowEnrate2019_1['ennum'];

$sqlEnrate2019_2="select sum(time_attence) as ennum from ennum where `time` like '2019-02-%'";
$resultEnrate2019_2 = mysqli_query($conn,$sqlEnrate2019_2);
$rowEnrate2019_2=$resultEnrate2019_2->fetch_assoc();
$numEnrate2019_2=$rowEnrate2019_2['ennum'];

$sqlEnrate2019_3="select sum(time_attence) as ennum from ennum where `time` like '2019-03-%'";
$resultEnrate2019_3 = mysqli_query($conn,$sqlEnrate2019_3);
$rowEnrate2019_3=$resultEnrate2019_3->fetch_assoc();
$numEnrate2019_3=$rowEnrate2019_3['ennum'];

$sqlEnrate2019_4="select sum(time_attence) as ennum from ennum where `time` like '2018-04-%'";
$resultEnrate2019_4 = mysqli_query($conn,$sqlEnrate2019_4);
$rowEnrate2019_4=$resultEnrate2019_4->fetch_assoc();
$numEnrate2019_4=$rowEnrate2019_4['ennum'];

$sexData[] = [
    "value"=> $numEnrate2017_10,
    "name" => "2017年10月",
];

$sexData[] = [
    "value"=> $numEnrate2017_11,
    "name" => "2017年11月",
];

$sexData[] = [
    "value"=> $numEnrate2017_12,
    "name" => "2017年12月",
];

$sexData[] = [
    "value"=> $numEnrate2018_1,
    "name" => "2018年1月",
];

$sexData[] = [
    "value"=> $numEnrate2018_2,
    "name" => "2017年2月",
];

$sexData[] = [
    "value"=> $numEnrate2018_3,
    "name" => "2018年3月",
];

$sexData[] = [
    "value"=> $numEnrate2018_4,
    "name" => "2018年4月",
];

$sexData[] = [
    "value"=> $numEnrate2018_5,
    "name" => "2018年5月",
];

$sexData[] = [
    "value"=> $numEnrate2018_6,
    "name" => "2018年6月",
];

$sexData[] = [
    "value"=> $numEnrate2018_7,
    "name" => "2018年7月",
];

$sexData[] = [
    "value"=> $numEnrate2018_8,
    "name" => "2018年8月",
];

$sexData[] = [
    "value"=> $numEnrate2018_9,
    "name" => "2018年9月",
];

$sexData[] = [
    "value"=> $numEnrate2018_10,
    "name" => "2018年10月",
];

$sexData[] = [
    "value"=> $numEnrate2018_11,
    "name" => "2018年11月",
];

$sexData[] = [
    "value"=> $numEnrate2018_12,
    "name" => "2018年12月",
];

$sexData[] = [
    "value"=> $numEnrate2019_1,
    "name" => "2019年1月",
];

$sexData[] = [
    "value"=> $numEnrate2019_2,
    "name" => "2019年2月",
];

$sexData[] = [
    "value"=> $numEnrate2019_3,
    "name" => "2019年3月",
];

$sexData[] = [
    "value"=> $numEnrate2019_4,
    "name" => "2019年4月",
];

$data = [
    "success" => 0,
    "legend" => [
        "data" => ["numEnrate2"],
        ],
    "series"=>[
        "data"=>$sexData
    ],
];

$json_string = json_encode($data, JSON_UNESCAPED_UNICODE);
//echo $json_string;
// 写入文件
//file_put_contents('../json/pl_1.2.1.txt', $json_string);
file_put_contents('../json/pl_1.3.4.txt', $json_string);
