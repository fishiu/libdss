<?php
error_reporting(0);
require_once '../php/DB.php';

$myDB = new DB();
$conn = $myDB->connection();
$conn->query("SET NAMES UTF8");

$sqlNone = "SELECT count(*) as none from users where edu='无'";
$resultNone = $conn->query($sqlNone);
$rowNone = $resultNone->fetch_assoc();
$numNone = $rowNone['none'];
$sqlPrimary = "SELECT count(*) as primary_sch from users where edu='小学'";
$resultPrimary = $conn->query($sqlPrimary);
$rowPrimary = $resultPrimary->fetch_assoc();
$numPrimary = $rowPrimary['primary_sch'];
$sqlJunior = "SELECT count(*) as junior from users where edu='初中'";
$resultJunior = $conn->query($sqlJunior);
$rowJunior = $resultJunior->fetch_assoc();
$numJunior = $rowJunior['junior'];
$sqlSenior = "SELECT count(*) as senior from users where edu='中专/高中'";
$resultSenior = $conn->query($sqlSenior);
$rowSenior = $resultSenior->fetch_assoc();
$numSenior = $rowSenior['senior'];
$sqlUndergraduate = "SELECT count(*) as undergraduate from users where edu='专科\本科'";
$resultUndergraduate = $conn->query($sqlUndergraduate);
$rowUndergraduate = $resultUndergraduate->fetch_assoc();
$numUndergraduate = $rowUndergraduate['undergraduate'];
$sqlMaster = "SELECT count(*) as master from users where edu='硕士研究生'";
$resultMaster = $conn->query($sqlMaster);
$rowMaster = $resultMaster->fetch_assoc();
$numMaster = $rowMaster['master'];
$sqlDoctor = "SELECT count(*) as doctor from users where edu='博士研究生'";
$resultDoctor = $conn->query($sqlDoctor);
$rowDoctor = $resultDoctor->fetch_assoc();
$numDoctor = $rowDoctor['doctor'];


//$data = array();
//$data["success"] = 0;
//$data["legend"] = array();
//$data["legend"]["data"] = array("男性用户", "女性用户");
//$data["series"] = array();
//$data["series"]["data"] = array(array("value" => $numMale, "name" => "男性用户"), array("value" => $numFemale, "name" => "女性用户"),);

$sexData[] = [
    "value"=>$numNone,
    "name" => "无学历"
];

$sexData[] = [
    "value"=>$numPrimary,
    "name" => "小学学历"
];

$sexData[] = [
    "value"=>$numJunior,
    "name" => "初中学历"
];

$sexData[] = [
    "value"=>$numSenior,
    "name" => "中专/高中学历"
];

$sexData[] = [
    "value"=>$numUndergraduate,
    "name" => "专科/本科学历"
];

$sexData[] = [
    "value"=>$numMaster,
    "name" => "硕士研究生学历"
];

$sexData[] = [
    "value"=>$numDoctor,
    "name" => "博士研究生学历"
];

$data = [
    "success" => 0,
    "legend" => [
        "data" => ["无学历", "小学学历","初中学历","高中/中专学历","专科/本科学历","硕士研究生学历","博士研究生学历"]
    ],
    "series"=>[
        "data"=>$sexData
    ],
];


$json_string = json_encode($data, JSON_UNESCAPED_UNICODE);
//echo $json_string;
// 写入文件
//file_put_contents('../json/pl_1.2.1.txt', $json_string);
file_put_contents('../json/pl_1.2.1.txt', $json_string);
