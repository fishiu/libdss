<?php
error_reporting(0);
require_once '../php/DB.php';

$myDB = new DB();
$conn = $myDB->connection();

// 到馆与自然属性的关系
$usualNum = 0;
$unusualNum = 0;
$usualGenderData = null;
// 与性别的关系

$sqlCountUsualGender = "select count(gender) as genderCount, gender from usual_user where isUsual = 1 group by gender";
$resultCountUsualGender = $conn->query($sqlCountUsualGender);
while ($rowCountUsualGender = $resultCountUsualGender->fetch_array()) {
    $usualNum += $rowCountUsualGender['genderCount'];
    $usualGenderData[] = array(
        'name' => '到馆：' . $rowCountUsualGender['gender'],
        'value' => $rowCountUsualGender['genderCount']
    );
}

$sqlCountUnusualGender = "select count(gender) as genderCount, gender from usual_user where isUsual = 0 group by gender";
$resultCountUnusualGender = $conn->query($sqlCountUnusualGender);
while ($rowCountUnusualGender = $resultCountUnusualGender->fetch_array()) {
    $unusualNum += $rowCountUnusualGender['genderCount'];
    $usualGenderData[] = array(
        'name' => '未到馆：' . $rowCountUnusualGender['gender'],
        'value' => $rowCountUnusualGender['genderCount']
    );
}

$usualData = array(
    array('name' => '近期到馆用户',
        'value' => $usualNum),
    array('name' => '近期未到馆用户',
        'value' => $unusualNum),
);

// 与年龄的关系
$sqlCountUsualAge = "select count(age) as ageCount, age from user_age_gender where userID IN (SELECT userID from usual_user where isUsual = 1) group by age";
$resultCountUsualAge = $conn->query($sqlCountUsualAge);
$usualAgeNum = array();
while ($rowCountUsualAge = $resultCountUsualAge->fetch_array()) {
    $age = $rowCountUsualAge['age'];
    if ($age <= 15) {
        $usualAgeNum[0] += $rowCountUsualAge['ageCount'];
    } elseif ($age <= 25) {
        $usualAgeNum[1] += $rowCountUsualAge['ageCount'];
    } elseif ($age <= 35) {
        $usualAgeNum[2] += $rowCountUsualAge['ageCount'];
    } elseif ($age <= 45) {
        $usualAgeNum[3] += $rowCountUsualAge['ageCount'];
    } elseif ($age <= 55) {
        $usualAgeNum[4] += $rowCountUsualAge['ageCount'];
    } elseif ($age <= 65) {
        $usualAgeNum[5] += $rowCountUsualAge['ageCount'];
    } elseif ($age <= 75) {
        $usualAgeNum[6] += $rowCountUsualAge['ageCount'];
    } else {
        $usualAgeNum[7] += $rowCountUsualAge['ageCount'];
    }
}

$usualAgeData = array();
$usualAgeData[0] = array('name' => '到馆：15以下', 'value' => $usualAgeNum[0]);
for ($i = 1; $i < 7; $i++) {
    $usualAgeData[$i] = array(
        'name' => '到馆：' . ($i * 10 + 6) . "-" . ($i * 10 + 15),
        'value' => $usualAgeNum[$i]
    );
}
$usualAgeData[7] = array('name' => '到馆：76以上', 'value' => $usualAgeNum[7]);

$sqlCountUnusualAge = "select count(age) as ageCount, age from user_age_gender where userID IN (SELECT userID from usual_user where isUsual = 0) group by age";
$resultCountUnusualAge = $conn->query($sqlCountUnusualAge);
$unusualAgeNum = array();
while ($rowCountUnusualAge = $resultCountUnusualAge->fetch_array()) {
    $age = $rowCountUnusualAge['age'];
    if ($age <= 15) {
        $unusualAgeNum[0] += $rowCountUnusualAge['ageCount'];
    } elseif ($age <= 25) {
        $unusualAgeNum[1] += $rowCountUnusualAge['ageCount'];
    } elseif ($age <= 35) {
        $unusualAgeNum[2] += $rowCountUnusualAge['ageCount'];
    } elseif ($age <= 45) {
        $unusualAgeNum[3] += $rowCountUnusualAge['ageCount'];
    } elseif ($age <= 55) {
        $unusualAgeNum[4] += $rowCountUnusualAge['ageCount'];
    } elseif ($age <= 65) {
        $unusualAgeNum[5] += $rowCountUnusualAge['ageCount'];
    } elseif ($age <= 75) {
        $unusualAgeNum[6] += $rowCountUnusualAge['ageCount'];
    } else {
        $unusualAgeNum[7] += $rowCountUnusualAge['ageCount'];
    }
}

$usualAgeData[8] = array('name' => '未到馆：15以下', 'value' => $unusualAgeNum[0]);
for ($i = 9; $i < 15; $i++) {
    $usualAgeData[$i] = array(
        'name' => '未到馆：' . (($i - 8) * 10 + 6) . "-" . (($i - 8) * 10 + 15),
        'value' => $unusualAgeNum[$i - 8]
    );
}
$usualAgeData[15] = array('name' => '未到馆：76以上', 'value' => $unusualAgeNum[7]);

$data = [
    'success' => 0,
    'usualData' => $usualData,
    'usualGenderData' => $usualGenderData,
    'usualAgeData' => $usualAgeData
];

$json_string = json_encode($data, JSON_UNESCAPED_UNICODE);
//echo $json_string;
// 写入文件
file_put_contents('../json/pl_1.1.4.txt', $json_string);
