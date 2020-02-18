<?php
error_reporting(0);
require_once '../php/DB.php';

$myDB = new DB();
$conn = $myDB->connection();

//业务种类分布（不以时间为调节变量）
$sqlAct = "SELECT actype,count(*) as act_num from activity group by actype; ";
$resultAct = $conn->query($sqlAct);
$resultSort = array();
while ($row = $resultAct->fetch_assoc()) {
    $actype = $row['actype'];
    $act_num = $row['act_num'];
    $resultSort[] = array('name' => $actype, 'value' => $act_num);
}

$new_data = [
    "success" => 0,
    "data" => $resultSort
];

$json_string = json_encode($new_data, JSON_UNESCAPED_UNICODE);


file_put_contents('../json/pl_3.1.5.txt', $json_string);