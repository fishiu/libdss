<?php
error_reporting(0);
require_once '../php/DB.php';

$myDB = new DB();
$conn = $myDB->connection();

//数据库数量
$sql_db_num = "SELECT COUNT(*) AS tmp FROM db;";
$res_db_num = $conn->query($sql_db_num);
while ($row_db_num = $res_db_num->fetch_assoc()) {
    $db_num = $row_db_num['tmp'];
}

//电子书数量
$sql_eb_num = "SELECT COUNT(*) AS tmp FROM ebooks;";
$res_eb_num = $conn->query($sql_eb_num);
while ($row_eb_num = $res_eb_num->fetch_assoc()) {
    $eb_num = $row_eb_num['tmp'];
}

$new_data = [
    "success" => 0,
    "db_num" => $db_num,
    "eb_num" => $eb_num,
];

$json_string = json_encode($new_data, JSON_UNESCAPED_UNICODE);


file_put_contents('../json/pl_2.3.1.txt', $json_string);

