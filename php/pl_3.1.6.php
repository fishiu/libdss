<?php
error_reporting(0);
require_once '../php/DB.php';

$myDB = new DB();
$conn = $myDB->connection();



//业务到访情况
$sqlActUser = "SELECT actype,mon,da,count(*) AS userID
from activity_view
group by actype,mon,da";
$resultActUser = $conn->query($sqlActUser);
$data1 = array();
$data2 = array();
$data3 = array();
$data4 = array();
$data5 = array();
$data6 = array();

while ($rowSql = $resultActUser->fetch_assoc()) {
    $type = $rowSql['actype'];
    $mon = $rowSql['mon'];
    $da = $rowSql['da'];
    $user_count = $rowSql['userID'];
    if ($type == '讲座') {
        $data1[$mon][$da] = $user_count;
    } elseif ($type == '展览') {
        $data2[$mon][$da] = $user_count;
    } elseif ($type == '会议') {
        $data3[$mon][$da] = $user_count;
    } elseif ($type == '演出') {
        $data4[$mon][$da] = $user_count;
    } elseif ($type == '比赛') {
        $data5[$mon][$da] = $user_count;
    } else {
        $data6[$mon][$da] = $user_count;
    }
}

$data_1 = [];
foreach ($data1 as $key => $value) {
    foreach ($value as $a => $b) {
        $data_1[] = [
            "name" => "2018/".$key."/".$a,
            "value"=> ["2018/".$key."/".$a,$b],
        ];
    }
}

$data_2 = [];
foreach ($data2 as $key => $value) {
    foreach ($value as $a => $b) {
        $data_2[] = [
            "name" => "2018/".$key."/".$a,
            "value"=> ["2018/".$key."/".$a,$b],
        ];
    }
}

$data_3 = [];
foreach ($data3 as $key => $value) {
    foreach ($value as $a => $b) {
        $data_3[] = [
            "name" => "2018/".$key."/".$a,
            "value"=> ["2018/".$key."/".$a,$b],
        ];
    }
}

$data_4 = [];
foreach ($data4 as $key => $value) {
    foreach ($value as $a => $b) {
        $data_4[] = [
            "name" => "2018/".$key."/".$a,
            "value"=> ["2018/".$key."/".$a,$b],
        ];
    }
}

$data_5 = [];
foreach ($data5 as $key => $value) {
    foreach ($value as $a => $b) {
        $data_5[] = [
            "name" => "2018/".$key."/".$a,
            "value"=> ["2018/".$key."/".$a,$b],
        ];
    }
}

$data_6 = [];
foreach ($data6 as $key => $value) {
    foreach ($value as $a => $b) {
        $data_6[] = [
            "name" => "2018/".$key."/".$a,
            "value"=> ["2018/".$key."/".$a,$b],
        ];
    }
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


file_put_contents('../json/pl_3.1.6.txt', $json_string);
