<?php
error_reporting(0);
require_once '../php/DB.php';

$myDB = new DB();
$conn = $myDB->connection();

$data = [];

$sql = "SELECT dbID, COUNT(*) as useFreq FROM dbacc group by dbID";
$result = $conn->query($sql);
$category = ['<500','500~999','1000~1499','1500~1999','2000~2499','2500~2999','3000~3499','>=3500'];
$catData = [0,0,0,0,0,0,0,0];
while ($row = $result->fetch_array()) {
    $freq = $row['useFreq'];
    if ($freq < 500) {
        $catData[0]++;
    } elseif ($freq < 1000) {
        $catData[1]++;
    } elseif ($freq < 1500) {
        $catData[2]++;
    } elseif ($freq < 2000) {
        $catData[3]++;
    } elseif ($freq < 2500) {
        $catData[4]++;
    } elseif ($freq < 3000) {
        $catData[5]++;
    } elseif ($freq < 3500) {
        $catData[6]++;
    } else {
        $catData[7]++;
    }
}

$a = [];
for ($i = 0; $i < 8; $i++){
    $a[]=[
        "name" => $category[$i],
        "value" => $catData[$i]
    ];
}

$data = [
    "success" => 0,
    "freqData" => $a
];

$json_string = json_encode($data, JSON_UNESCAPED_UNICODE);
//var_dump($json_string);
//echo $json_string;
// 写入文件
file_put_contents('../json/pl_2.3.3.txt', $json_string);
