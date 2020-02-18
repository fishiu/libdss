<?php
error_reporting(0);
require_once '../php/DB.php';

$myDB = new DB();
$conn = $myDB->connection();
$conn->query("SET NAMES UTF8");

$sqlActnum = "SELECT count(*) as actnum from activity group by actype";
$resultActnum = mysqli_query($conn,$sqlActnum);
while($rowActnum=mysqli_fetch_array($resultActnum)){
    $tempActnum[]=$rowActnum['actnum'];
}

$data = null;
$sexData = null;

$sexData[] = [
    "value"=> $tempActnum[0],
    "name" => "讲座"
];

$sexData[] = [
    "value"=> $tempActnum[1],
    "name" => "展览"
];

$sexData[] = [
    "value"=> $tempActnum[2],
    "name" => "演出"
];

$sexData[] = [
    "value"=> $tempActnum[3],
    "name" => "会议"
];

$sexData[] = [
    "value"=> $tempActnum[4],
    "name" => "比赛"
];

$sexData[] = [
    "value"=> $tempActnum[5],
    "name" => "论坛"
];

$data = [
    "success" => 0,
    "legend" => [
        "data" => ["actnum"],
        ],
    "series"=>[
        "data"=>$sexData
    ],
];

$json_string = json_encode($data, JSON_UNESCAPED_UNICODE);
//echo $json_string;
// 写入文件
//file_put_contents('../json/pl_1.2.1.txt', $json_string);
file_put_contents('../json/pl_1.3.2.txt', $json_string);
