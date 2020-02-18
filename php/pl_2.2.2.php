<?php
error_reporting(0);
require_once '../php/DB.php';

$myDB = new DB();
$conn = $myDB->connection();

//各类文献资源数量
$sqlKind = "SELECT firstKind,count(firstKind) FROM `books` GROUP BY firstKind;";
$resultKind = $conn->query($sqlKind);
//关联数组
$kindNumX = array();  //存储类型名
$kindNumY = array();  //存储每一类的书本数量
while ($rowKind=$resultKind->fetch_assoc()){
    $kindName = $rowKind['firstKind'];
    $kindCount = $rowKind['count(firstKind)'];
    array_push($kindNumX,$kindName);
    array_push($kindNumY,$kindCount);
}

//成人书与幼儿书的比例
$childBookNum = 0;
$adultBookNum = 0;
$bookSum = 0;
for($i=0;$i<count($kindNumX);$i++){
    if($kindNumX[$i]==="中小学教辅" OR $kindNumX==="动漫/幽默" OR $kindNumX==="少儿"){
        $childBookNum = $childBookNum + $kindNumY[$i];
    }else{
        $adultBookNum = $adultBookNum + $kindNumY[$i];
    }
    $bookSum = $bookSum + $kindNumY[$i];
}
$book[] = [
    "value"=>$childBookNum,
    "name" => "少儿书"
];
$book[] = [
    "value"=>$adultBookNum,
    "name" => "成人书"
];


$data = [
    "success" => 0,
    "legend" => [
        "data" => ["少儿书","成人书"]
    ],
    "series"=>[
        "data"=>$book
    ],
];

//把unicode变成中文
$json_string = json_encode($data, JSON_UNESCAPED_UNICODE);

// 写入文件
file_put_contents('../json/pl_2.2.2.txt', $json_string);

