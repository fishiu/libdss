<?php
error_reporting(0);
require_once '../php/DB.php';

$myDB = new DB();
$conn = $myDB->connection();

//讲座
$sqlDuration_1 = "SELECT MONTH(startTime) as mon,count(*) as timeCount FROM activity WHERE actype = '讲座' GROUP by MONTH(startTime);";
$resultDuration_1 = $conn->query($sqlDuration_1);
$mon_count_1 = array();
while ($rowDuration_1 = $resultDuration_1->fetch_assoc()) {
    $mon_1 = $rowDuration_1['mon'];
    $timeCount_1 = $rowDuration_1['timeCount'];
    $mon_count_1[$mon_1] = $timeCount_1;
}

//展览
$sqlDuration_2 = "SELECT MONTH(startTime) as mon,count(*) as timeCount FROM activity WHERE actype = '展览' GROUP by MONTH(startTime);";
$resultDuration_2 = $conn->query($sqlDuration_2);
$mon_count_2 = array();
while ($rowDuration_2 = $resultDuration_2->fetch_assoc()) {
    $mon_2 = $rowDuration_2['mon'];
    $timeCount_2 = $rowDuration_2['timeCount'];
    $mon_count_2[$mon_2] = $timeCount_2;
}


//会议
$sqlDuration_3 = "SELECT MONTH(startTime) as mon,count(*) as timeCount FROM activity WHERE actype = '会议' GROUP by MONTH(startTime);";
$resultDuration_3 = $conn->query($sqlDuration_3);
$mon_count_3 = array();
while ($rowDuration_3 = $resultDuration_3->fetch_assoc()) {
    $mon_3 = $rowDuration_3['mon'];
    $timeCount_3 = $rowDuration_3['timeCount'];
    $mon_count_3[$mon_3] = $timeCount_3;
}

//其他：演出,比赛，论坛
$sqlDuration_4 = "SELECT MONTH(startTime) as mon,count(*) as timeCount FROM activity WHERE actype = '演出' or actype = '比赛' or actype = '论坛' GROUP by MONTH(startTime);";
$resultDuration_4 = $conn->query($sqlDuration_4);
$mon_count_4 = array();
while ($rowDuration_4 = $resultDuration_4->fetch_assoc()) {
    $mon_4 = $rowDuration_4['mon'];
    $timeCount_4 = $rowDuration_4['timeCount'];
    $mon_count_4[$mon_4] = $timeCount_4;
}

$data_1 = [];
for ($key = 1; $key <= 12; $key++) {
    $value = $mon_count_1[$key];
    $data_1[] = [
        "name" => "2018/".$key,
        "value"=> ["2018/".$key,$value],
    ];
}

$data_2 = [];
for ($key = 1; $key <= 12; $key++) {
    $value = $mon_count_2[$key];
    $data_2[] = [
        "name" => "2018/".$key,
        "value"=> ["2018/".$key,$value],
    ];
}

$data_3 = [];
for ($key = 1; $key <= 12; $key++) {
    $value = $mon_count_3[$key];
    $data_3[] = [
        "name" => "2018/".$key,
        "value"=> ["2018/".$key,$value],
    ];
}

$data_4 = [];
for ($key = 1; $key <= 12; $key++) {
    $value = $mon_count_4[$key];
    $data_4[] = [
        "name" => "2018/".$key,
        "value"=> ["2018/".$key,$value],
    ];
}

$new_data = [
    "success" => 0,
    "data_1" => $data_1,
    "data_2" => $data_2,
    "data_3" => $data_3,
    "data_4" => $data_4
];

$json_string = json_encode($new_data, JSON_UNESCAPED_UNICODE);

file_put_contents('../json/pl_3.1.1.txt', $json_string);


