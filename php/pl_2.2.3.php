<?php
error_reporting(0);
require_once '../php/DB.php';

$myDB = new DB();
$conn = $myDB->connection();

//出版年份分布
$sqlPub = "SELECT YEAR(pubdate) as years,count(YEAR(pubdate)) as pubNum FROM books GROUP by YEAR(pubdate);";
$resultPub = $conn->query($sqlPub);
$pubYears = array();
$pubCount = array();
while ($rowPub=$resultPub->fetch_assoc()){
    $pubTime = $rowPub['years'];
    $pubCounts = $rowPub['pubNum'];
    array_push($pubYears,$pubTime);
    array_push($pubCount,$pubCounts);
}
$pubYearsSit = array();
for($i=0;$i<7;$i++){
    $pubYearsSit[$i]=0;
}
for($i=0;$i<count($pubYears);$i++){
    if($pubYears[$i]<=2000){
        $pubYearsSit[0] += $pubCount[$i];
    }else if($pubYears[$i]>2000&&$pubYears[$i]<=2004){
        $pubYearsSit[1] += $pubCount[$i];
    }else if($pubYears[$i]>2004&&$pubYears[$i]<=2008){
        $pubYearsSit[2] += $pubCount[$i];
    }else if($pubYears[$i]>2008&&$pubYears[$i]<=2012){
        $pubYearsSit[3] += $pubCount[$i];
    }else if($pubYears[$i]>2012&&$pubYears[$i]<=2016){
        $pubYearsSit[4] += $pubCount[$i];
    }else if($pubYears[$i]>2016&&$pubYears[$i]<=2020){
        $pubYearsSit[5] += $pubCount[$i];
    }
}

$yearDate[] = [
    "value" =>$pubYearsSit[0],
    "name" =>"2000以前"
];
$yearDate[] = [
    "value" =>$pubYearsSit[1],
    "name" =>"2001-2004"
];
$yearDate[] = [
    "value" =>$pubYearsSit[2],
    "name" =>"2005-2008"
];
$yearDate[] = [
    "value" =>$pubYearsSit[3],
    "name" =>"2009-2012"
];
$yearDate[] = [
    "value" =>$pubYearsSit[4],
    "name" =>"2013-2016"
];
$yearDate[] = [
    "value" =>$pubYearsSit[5],
    "name" =>"2017以后"
];

$data = [
    "success" => 0,
    "legend" => [
        "data" => ["2000以前","2001-2004","2005-2008","2009-2012","2013-2016","2017以后"]
    ],
    "series"=>[
        "data"=>$yearDate
    ],
];

//把unicode变成中文
$json_string = json_encode($data, JSON_UNESCAPED_UNICODE);

// 写入文件
file_put_contents('../json/pl_2.2.3.txt', $json_string);


