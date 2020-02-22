<?php
error_reporting(0);
require_once '../php/DB.php';

$myDB = new DB();
$conn = $myDB->connection();



//数据库明细
//横坐标是时间，纵坐标是金额
$sqlActUser = "SELECT MONTH(buydate) AS mon, DAYOFMONTH(buydate) AS da, payments from db;";
$resultActUser = $conn->query($sqlActUser);
$data1 = array();


while ($rowSql = $resultActUser->fetch_assoc()) {
    $mon = $rowSql['mon'];
    $da = $rowSql['da'];
    $pay = $rowSql['payments'];
    $data1[$mon][$da] = $pay;
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
$new_data = [
    "success" => 0,
    "data_1" => $data_1,
];

$json_string = json_encode($new_data, JSON_UNESCAPED_UNICODE);


file_put_contents('../json/pl_2.3.2.txt', $json_string);

