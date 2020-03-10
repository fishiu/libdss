<?php
error_reporting(0);
require_once '../php/DB.php';

$myDB = new DB();
$conn = $myDB->connection();

// 研究借书与自然属性的关系
$lendNum = 0;
$unlendNum = 0;
$lendGenderData = null;
// 与性别的关系

$sqlCountLendGender = "select count(gender) as genderCount, gender from lend_user where isLend = 1 group by gender";
$resultCountLendGender = $conn->query($sqlCountLendGender);
while ($rowCountLendGender = $resultCountLendGender->fetch_array()) {
    $lendNum += $rowCountLendGender['genderCount'];
    $lendGenderData[] = [
        'name' => '借书：' . $rowCountLendGender['gender'],
        'value' => $rowCountLendGender['genderCount']
    ];
}
$sqlCountUnlendGender = "select count(gender) as genderCount, gender from lend_user where isLend = 0 group by gender";
$resultCountUnlendGender = $conn->query($sqlCountUnlendGender);
while ($rowCountUnlendGender = $resultCountUnlendGender->fetch_array()) {
    $unlendNum += $rowCountUnlendGender['genderCount'];
    $lendGenderData[] = [
        'name' => '未借书：' . $rowCountUnlendGender['gender'],
        'value' => $rowCountUnlendGender['genderCount']
    ];
}

$lendData = [
    ['name' => '近期借书用户',
        'value' => $lendNum],
    ['name' => '近期未借书用户',
        'value' => $unlendNum],
];

// 与年龄的关系
$sqlCountLendAge = "select count(age) as ageCount, age from user_age_gender where userID IN (SELECT userID from lend_user where isLend = 1) group by age";
$resultCountLendAge = $conn->query($sqlCountLendAge);
$lendAgeNum = array();
while ($rowCountLendAge = $resultCountLendAge->fetch_array()) {
    $age = $rowCountLendAge['age'];
    if ($age <= 15) {
        $lendAgeNum[0] += $rowCountLendAge['ageCount'];
    } elseif ($age <= 25) {
        $lendAgeNum[1] += $rowCountLendAge['ageCount'];
    } elseif ($age <= 35) {
        $lendAgeNum[2] += $rowCountLendAge['ageCount'];
    } elseif ($age <= 45) {
        $lendAgeNum[3] += $rowCountLendAge['ageCount'];
    } elseif ($age <= 55) {
        $lendAgeNum[4] += $rowCountLendAge['ageCount'];
    } elseif ($age <= 65) {
        $lendAgeNum[5] += $rowCountLendAge['ageCount'];
    } elseif ($age <= 75) {
        $lendAgeNum[6] += $rowCountLendAge['ageCount'];
    } else {
        $lendAgeNum[7] += $rowCountLendAge['ageCount'];
    }
}

$lendAgeData = array();
$lendAgeData[0] = array('name' => '借书：15以下', 'value' => $lendAgeNum[0]);
for ($i = 1; $i < 7; $i++) {
    $lendAgeData[$i] = array(
        'name' => '借书：' . ($i * 10 + 6) . "-" . ($i * 10 + 15),
        'value' => $lendAgeNum[$i]
    );
}
$lendAgeData[7] = array('name' => '借书：76以上', 'value' => $lendAgeNum[7]);

$sqlCountUnlendAge = "select count(age) as ageCount, age from user_age_gender where userID IN (SELECT userID from lend_user where isLend = 0) group by age";
$resultCountUnlendAge = $conn->query($sqlCountUnlendAge);
$unlendAgeNum = array();
while ($rowCountUnlendAge = $resultCountUnlendAge->fetch_array()) {
    $age = $rowCountUnlendAge['age'];
    if ($age <= 15) {
        $unlendAgeNum[0] += $rowCountUnlendAge['ageCount'];
    } elseif ($age <= 25) {
        $unlendAgeNum[1] += $rowCountUnlendAge['ageCount'];
    } elseif ($age <= 35) {
        $unlendAgeNum[2] += $rowCountUnlendAge['ageCount'];
    } elseif ($age <= 45) {
        $unlendAgeNum[3] += $rowCountUnlendAge['ageCount'];
    } elseif ($age <= 55) {
        $unlendAgeNum[4] += $rowCountUnlendAge['ageCount'];
    } elseif ($age <= 65) {
        $unlendAgeNum[5] += $rowCountUnlendAge['ageCount'];
    } elseif ($age <= 75) {
        $unlendAgeNum[6] += $rowCountUnlendAge['ageCount'];
    } else {
        $unlendAgeNum[7] += $rowCountUnlendAge['ageCount'];
    }
}

$lendAgeData[8] = array('name' => '未借书：15以下', 'value' => $unlendAgeNum[0]);
for ($i = 9; $i < 15; $i++) {
    $lendAgeData[$i] = array(
        'name' => '未借书：' . (($i - 8) * 10 + 6) . "-" . (($i - 8) * 10 + 15),
        'value' => $unlendAgeNum[$i - 8]
    );
}
$lendAgeData[15] = array('name' => '未借书：76以上', 'value' => $unlendAgeNum[7]);

$data = [
    'success' => 0,
    'lendData' => $lendData,
    'lendGenderData' => $lendGenderData,
    'lendAgeData' => $lendAgeData
];

$json_string = json_encode($data, JSON_UNESCAPED_UNICODE);
//echo $json_string;
// 写入文件
file_put_contents('../json/pl_1.1.5.txt', $json_string);
