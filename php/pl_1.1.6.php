<?php
error_reporting(0);
require_once '../php/DB.php';

$myDB = new DB();
$conn = $myDB->connection();

// 研究逾期与自然属性的关系
$ontimeNum = 0;
$unontimeNum = 0;
$ontimeGenderData = null;
// 与性别的关系

$sqlCountOntimeGender = "select count(gender) as genderCount, gender from ontime_user where isOntime = 1 group by gender";
$resultCountOntimeGender = $conn->query($sqlCountOntimeGender);
while ($rowCountOntimeGender = $resultCountOntimeGender->fetch_array()) {
    $ontimeNum += $rowCountOntimeGender['genderCount'];
    $ontimeGenderData[] = [
        'name' => '未逾期：' . $rowCountOntimeGender['gender'],
        'value' => $rowCountOntimeGender['genderCount']
    ];
}
$sqlCountUnontimeGender = "select count(gender) as genderCount, gender from ontime_user where isOntime = 0 group by gender";
$resultCountUnontimeGender = $conn->query($sqlCountUnontimeGender);
while ($rowCountUnontimeGender = $resultCountUnontimeGender->fetch_array()) {
    $unontimeNum += $rowCountUnontimeGender['genderCount'];
    $ontimeGenderData[] = [
        'name' => '逾期：' . $rowCountUnontimeGender['gender'],
        'value' => $rowCountUnontimeGender['genderCount']
    ];
}

$ontimeData = [
    ['name' => '未逾期用户',
        'value' => $ontimeNum],
    ['name' => '曾逾期用户',
        'value' => $unontimeNum],
];

// 与年龄的关系
$sqlCountOntimeAge = "select count(age) as ageCount, age from user_age_gender where userID IN (SELECT userID from ontime_user where isOntime = 1) group by age";
$resultCountOntimeAge = $conn->query($sqlCountOntimeAge);
$ontimeAgeNum = array();
while ($rowCountOntimeAge = $resultCountOntimeAge->fetch_array()) {
    $age = $rowCountOntimeAge['age'];
    if ($age <= 15) {
        $ontimeAgeNum[0] += $rowCountOntimeAge['ageCount'];
    } elseif ($age <= 25) {
        $ontimeAgeNum[1] += $rowCountOntimeAge['ageCount'];
    } elseif ($age <= 35) {
        $ontimeAgeNum[2] += $rowCountOntimeAge['ageCount'];
    } elseif ($age <= 45) {
        $ontimeAgeNum[3] += $rowCountOntimeAge['ageCount'];
    } elseif ($age <= 55) {
        $ontimeAgeNum[4] += $rowCountOntimeAge['ageCount'];
    } elseif ($age <= 65) {
        $ontimeAgeNum[5] += $rowCountOntimeAge['ageCount'];
    } elseif ($age <= 75) {
        $ontimeAgeNum[6] += $rowCountOntimeAge['ageCount'];
    } else {
        $ontimeAgeNum[7] += $rowCountOntimeAge['ageCount'];
    }
}

$ontimeAgeData = array();
$ontimeAgeData[0] = array('name' => '未逾期：15以下', 'value' => $ontimeAgeNum[0]);
for ($i = 1; $i < 7; $i++) {
    $ontimeAgeData[$i] = array(
        'name' => '未逾期：' . ($i * 10 + 6) . "-" . ($i * 10 + 15),
        'value' => $ontimeAgeNum[$i]
    );
}
$ontimeAgeData[7] = array('name' => '未逾期：76以上', 'value' => $ontimeAgeNum[7]);

$sqlCountUnontimeAge = "select count(age) as ageCount, age from user_age_gender where userID IN (SELECT userID from ontime_user where isOntime = 0) group by age";
$resultCountUnontimeAge = $conn->query($sqlCountUnontimeAge);
$unontimeAgeNum = array();
while ($rowCountUnontimeAge = $resultCountUnontimeAge->fetch_array()) {
    $age = $rowCountUnontimeAge['age'];
    if ($age <= 15) {
        $unontimeAgeNum[0] += $rowCountUnontimeAge['ageCount'];
    } elseif ($age <= 25) {
        $unontimeAgeNum[1] += $rowCountUnontimeAge['ageCount'];
    } elseif ($age <= 35) {
        $unontimeAgeNum[2] += $rowCountUnontimeAge['ageCount'];
    } elseif ($age <= 45) {
        $unontimeAgeNum[3] += $rowCountUnontimeAge['ageCount'];
    } elseif ($age <= 55) {
        $unontimeAgeNum[4] += $rowCountUnontimeAge['ageCount'];
    } elseif ($age <= 65) {
        $unontimeAgeNum[5] += $rowCountUnontimeAge['ageCount'];
    } elseif ($age <= 75) {
        $unontimeAgeNum[6] += $rowCountUnontimeAge['ageCount'];
    } else {
        $unontimeAgeNum[7] += $rowCountUnontimeAge['ageCount'];
    }
}

$ontimeAgeData[8] = array('name' => '逾期：15以下', 'value' => $unontimeAgeNum[0]);
for ($i = 9; $i < 15; $i++) {
    $ontimeAgeData[$i] = array(
        'name' => '逾期：' . (($i - 8) * 10 + 6) . "-" . (($i - 8) * 10 + 15),
        'value' => $unontimeAgeNum[$i - 8]
    );
}
$ontimeAgeData[15] = array('name' => '逾期：76以上', 'value' => $unontimeAgeNum[7]);

$data = [
    'success' => 0,
    'ontimeData' => $ontimeData,
    'ontimeGenderData' => $ontimeGenderData,
    'ontimeAgeData' => $ontimeAgeData
];

$json_string = json_encode($data, JSON_UNESCAPED_UNICODE);
//echo $json_string;
// 写入文件
file_put_contents('../json/pl_1.1.6.txt', $json_string);
