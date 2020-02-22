<?php
error_reporting(0);
require_once '../php/DB.php';

$myDB = new DB();
$conn = $myDB->connection();


//业务资金投入占比
$sqlMoney = "SELECT actype,sum(payments) as all_payments from activity group by actype;";
$resultMoney = $conn->query($sqlMoney);
$money_count = array();
$a6_flag = 0;
while ($rowMoney = $resultMoney->fetch_assoc()) {
    $money_count[$a6_flag++] = array('name' => $rowMoney['actype'], 'value' => $rowMoney['all_payments']);
}

$new_data = [
    "success" => 0,
    "data" => $money_count
];

$json_string = json_encode($new_data, JSON_UNESCAPED_UNICODE);


file_put_contents('../json/pl_3.1.4.txt', $json_string);
