<?php
error_reporting(0);
require_once '../php/DB.php';

$myDB = new DB();
$conn = $myDB->connection();

$sqlAge = "select age, dureTime from age_attence";
$resultAge = $conn->query($sqlAge);
$ageNum = array();
$ageDure = array();

while ($rowAge = $resultAge->fetch_array()) {
    $age = $rowAge['age'];
    if ($age <= 15) {
        $ageNum[0] += 1;
        $ageDure[0] += $rowAge['dureTime'];
    } elseif ($age <= 25) {
        $ageNum[1] += 1;
        $ageDure[1] += $rowAge['dureTime'];
    } elseif ($age <= 35) {
        $ageNum[2] += 1;
        $ageDure[2] += $rowAge['dureTime'];
    } elseif ($age <= 45) {
        $ageNum[3] += 1;
        $ageDure[3] += $rowAge['dureTime'];
    } elseif ($age <= 55) {
        $ageNum[4] += 1;
        $ageDure[4] += $rowAge['dureTime'];
    } elseif ($age <= 65) {
        $ageNum[5] += 1;
        $ageDure[5] += $rowAge['dureTime'];
    } elseif ($age <= 75) {
        $ageNum[6] += 1;
        $ageDure[6] += $rowAge['dureTime'];
    } else {
        $ageNum[7] += 1;
        $ageDure[7] += $rowAge['dureTime'];
    }
}

$legendData = null;

$ageData = array();
$ageDureData = array();

$ageData[] = array('name' => '15岁以下', 'value' => $ageNum[0]);
$ageDureData[] = array('name' => '15岁以下', 'value' => round(($ageDure[0] / (60 * $ageNum[0])), 3));
$legendData[] = '15岁以下';
for ($i = 1; $i < 7; $i++) {
    $name = ($i * 10 + 6) . "-" . ($i * 10 + 15) . "岁";
    $ageData[] = [
        'name' => $name,
        'value' => $ageNum[$i]
    ];
    $ageDureData[] = [
        'name' => $name,
        'value' => round(($ageDure[$i] / (60 * $ageNum[$i])), 3)
    ];
    $legendData[] = $name;
}
$ageData[7] = array('name' => '76岁以上', 'value' => $ageNum[7]);
$ageDureData[7] = array('name' => '76岁以上', 'value' => round(($ageDure[7] / (60 * $ageNum[7])), 3));
$legendData[] = '76岁以上';

$data = [
    "success" => 0,
    "legend" => ["data" => $legendData],
    "series" => ["ageData" => $ageData, "ageDureData" => $ageDureData]
];

$json_string = json_encode($data, JSON_UNESCAPED_UNICODE);
//echo $json_string;
// 写入文件
file_put_contents('../json/pl_1.1.2.txt', $json_string);
