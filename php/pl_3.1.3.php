<?php
error_reporting(0);
require_once '../php/DB.php';

$myDB = new DB();
$conn = $myDB->connection();

//业务资金投入时间分布
//讲座
$sqlMoney_1 = "SELECT MONTH(startTime) as mon,sum(payments) as timeCount FROM activity WHERE actype = '讲座' GROUP by MONTH(startTime);";
$resultMoney_1 = $conn->query($sqlMoney_1);
$money_count_1 = array();
while ($rowMoney_1 = $resultMoney_1->fetch_assoc()) {
    $mon_1 = $rowMoney_1['mon'];
    $timeCount_1 = $rowMoney_1['timeCount'];
    $money_count_1[$mon_1] = $timeCount_1;
}

//展览
$sqlMoney_2 = "SELECT MONTH(startTime) as mon,sum(payments) as timeCount FROM activity WHERE actype = '展览' GROUP by MONTH(startTime);";
$resultMoney_2 = $conn->query($sqlMoney_2);
$money_count_2 = array();
while ($rowMoney_2 = $resultMoney_2->fetch_assoc()) {
    $mon_2 = $rowMoney_2['mon'];
    $timeCount_2 = $rowMoney_2['timeCount'];
    $money_count_2[$mon_2] = $timeCount_2;
}

//会议
$sqlMoney_3 = "SELECT MONTH(startTime) as mon,sum(payments) as timeCount FROM activity WHERE actype = '会议' GROUP by MONTH(startTime);";
$resultMoney_3 = $conn->query($sqlMoney_3);
$money_count_3 = array();
while ($rowMoney_3 = $resultMoney_3->fetch_assoc()) {
    $mon_3 = $rowMoney_3['mon'];
    $timeCount_3 = $rowMoney_3['timeCount'];
    $money_count_3[$mon_3] = $timeCount_3;
}

//演出
$sqlMoney_4 = "SELECT MONTH(startTime) as mon,sum(payments) as timeCount FROM activity WHERE actype = '演出' GROUP by MONTH(startTime);";
$resultMoney_4 = $conn->query($sqlMoney_4);
$money_count_4 = array();
for ($i = 1; $i <= 12; $i++) {
    $money_count_4[$i] = 0;
}
while ($rowMoney_4 = $resultMoney_4->fetch_assoc()) {
    $mon_4 = $rowMoney_4['mon'];
    $timeCount_4 = $rowMoney_4['timeCount'];
    $money_count_4[$mon_4] = $timeCount_4;
}

//比赛
$sqlMoney_5 = "SELECT MONTH(startTime) as mon,sum(payments) as timeCount FROM activity WHERE actype = '比赛' GROUP by MONTH(startTime);";
$resultMoney_5 = $conn->query($sqlMoney_5);
$money_count_5 = array();
for ($i = 1; $i <= 12; $i++) {
    $money_count_5[$i] = 0;
}
while ($rowMoney_5 = $resultMoney_5->fetch_assoc()) {
    $mon_5 = $rowMoney_5['mon'];
    $timeCount_5 = $rowMoney_5['timeCount'];
    $money_count_5[$mon_5] = $timeCount_5;
}

//论坛
$sqlMoney_6 = "SELECT MONTH(startTime) as mon,sum(payments) as timeCount FROM activity WHERE  actype = '论坛' GROUP by MONTH(startTime);";
$resultMoney_6 = $conn->query($sqlMoney_6);
$money_count_6 = array();
for ($i = 1; $i <= 12; $i++) {
    $money_count_6[$i] = 0;
}
while ($rowMoney_6 = $resultMoney_6->fetch_assoc()) {
    $mon_6 = $rowMoney_6['mon'];
    $timeCount_6 = $rowMoney_6['timeCount'];
    $money_count_6[$mon_6] = $timeCount_6;
}

$data_1 = [];
for ($key = 1; $key <= 12; $key++) {
    $value = $money_count_1[$key];
    $data_1[] = [
        "name" => "2018/".$key,
        "value"=> ["2018/".$key,$value],
    ];
}

$data_2 = [];
for ($key = 1; $key <= 12; $key++) {
    $value = $money_count_2[$key];
    $data_2[] = [
        "name" => "2018/".$key,
        "value"=> ["2018/".$key,$value],
    ];
}

$data_3 = [];
for ($key = 1; $key <= 12; $key++) {
    $value = $money_count_3[$key];
    $data_3[] = [
        "name" => "2018/".$key,
        "value"=> ["2018/".$key,$value],
    ];
}

$data_4 = [];
for ($key = 1; $key <= 12; $key++) {
    $value = $money_count_4[$key];
    $data_4[] = [
        "name" => "2018/".$key,
        "value"=> ["2018/".$key,$value],
    ];
}

$data_5 = [];
for ($key = 1; $key <= 12; $key++) {
    $value = $money_count_5[$key];
    $data_5[] = [
        "name" => "2018/".$key,
        "value"=> ["2018/".$key,$value],
    ];
}

$data_6 = [];
for ($key = 1; $key <= 12; $key++) {
    $value = $money_count_6[$key];
    $data_6[] = [
        "name" => "2018/".$key,
        "value"=> ["2018/".$key,$value],
    ];
}

$new_data = [
    "success" => 0,
    "data_1" => $data_1,
    "data_2" => $data_2,
    "data_3" => $data_3,
    "data_4" => $data_4,
    "data_5" => $data_5,
    "data_6" => $data_6
];

$json_string = json_encode($new_data, JSON_UNESCAPED_UNICODE);


file_put_contents('../json/pl_3.1.3.txt', $json_string);