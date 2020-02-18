<?php
error_reporting(0);
require_once '../php/DB.php';

$myDB = new DB();
$conn = $myDB->connection();

//业务持续时间
$sqlDuration = "select TIMESTAMPDIFF(HOUR,`startTime`, `endTime`) AS timeDiff,count(*)as count_num from activity group by timeDiff order by timeDiff";
$resultDuration = $conn->query($sqlDuration);
$lasting_count = array();
$flag = 0;
while ($rowDuration = $resultDuration->fetch_assoc()) {
    $hour = $rowDuration['timeDiff'];
    $count_num = $rowDuration['count_num'];
    $lasting_count[$flag++] = array('name' => $hour, 'value' => $count_num);
}


$new_data = [
    "success" => 0,
    "data" => $lasting_count
];

$json_string = json_encode($new_data, JSON_UNESCAPED_UNICODE);


file_put_contents('../json/pl_3.1.2.txt', $json_string);



