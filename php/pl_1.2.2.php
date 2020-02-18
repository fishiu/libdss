<?php
error_reporting(0);
require_once '../php/DB.php';

$myDB = new DB();
$conn = $myDB->connection();
$conn->query("SET NAMES UTF8");

$sql1_1 = "select count(*) as '5-20,8-12' from attence where userID in(select userID from users where dist between 5 and 20) and hour(entime) between 8 and 12";
$result1_1 = $conn->query($sql1_1);
$row1_1 = $result1_1->fetch_assoc();
$num1_1 = $row1_1['5-20,8-12'];
$sql1_2 = "select count(*) as '5-20,12-18' from attence where userID in(select userID from users where dist between 5 and 20) and hour(entime) between 12 and 18";
$result1_2 = $conn->query($sql1_2);
$row1_2 = $result1_2->fetch_assoc();
$num1_2 = $row1_2['5-20,12-18'];
$sql1_3 = "select count(*) as '5-20,18-22' from attence where userID in(select userID from users where dist between 5 and 20) and hour(entime) between 18 and 22";
$result1_3 = $conn->query($sql1_3);
$row1_3 = $result1_3->fetch_assoc();
$num1_3 = $row1_3['5-20,18-22'];
$sql2_1 = "select count(*) as '20-40,8-12' from attence where userID in(select userID from users where dist between 20 and 40) and hour(entime) between 8 and 12";
$result2_1 = $conn->query($sql2_1);
$row2_1 = $result2_1->fetch_assoc();
$num2_1 = $row2_1['20-40,8-12'];
$sql2_2 = "select count(*) as '20-40,12-18' from attence where userID in(select userID from users where dist between 20 and 40) and hour(entime) between 12 and 18";
$result2_2 = $conn->query($sql2_2);
$row2_2 = $result2_2->fetch_assoc();
$num2_2 = $row2_2['20-40,12-18'];
$sql2_3 = "select count(*) as '20-40,18-22' from attence where userID in(select userID from users where dist between 20 and 40) and hour(entime) between 18 and 22";
$result2_3 = $conn->query($sql2_3);
$row2_3 = $result2_3->fetch_assoc();
$num2_3 = $row2_3['20-40,18-22'];
$sql3_1 = "select count(*) as '40-60,8-12' from attence where userID in(select userID from users where dist between 40 and 60) and hour(entime) between 8 and 12";
$result3_1 = $conn->query($sql3_1);
$row3_1 = $result3_1->fetch_assoc();
$num3_1 = $row3_1['40-60,8-12'];
$sql3_2 = "select count(*)/(count(userID)*19) as '40-60,12-18' from attence where userID in(select userID from users where dist between 40 and 60) and hour(entime) between 12 and 18";
$result3_2 = $conn->query($sql3_2);
$row3_2 = $result3_2->fetch_assoc();
$num3_2 = $row3_2['40-60,12-18'];
$sql3_3 = "select count(*) as '40-60,18-22' from attence where userID in(select userID from users where dist between 40 and 60) and hour(entime) between 18 and 22";
$result3_3 = $conn->query($sql3_3);
$row3_3 = $result3_3->fetch_assoc();
$num3_3 = $row3_3['40-60,18-22'];
$sql4_1 = "select count(*) as '60-80,8-12' from attence where userID in(select userID from users where dist between 60 and 80) and hour(entime) between 8 and 12";
$result4_1 = $conn->query($sql4_1);
$row4_1 = $result4_1->fetch_assoc();
$num4_1 = $row4_1['60-80,8-12'];
$sql4_2 = "select count(*) as '60-80,12-18' from attence where userID in(select userID from users where dist between 60 and 80) and hour(entime) between 12 and 18";
$result4_2 = $conn->query($sql4_2);
$row4_2 = $result4_2->fetch_assoc();
$num4_2 = $row4_2['60-80,12-18'];
$sql4_3 = "select count(*) as '60-80,18-22' from attence where userID in(select userID from users where dist between 60 and 80) and hour(entime) between 18 and 22";
$result4_3 = $conn->query($sql4_3);
$row4_3 = $result4_3->fetch_assoc();
$num4_3 = $row4_3['60-80,18-22'];
$sql5_1 = "select count(*) as '80-100,8-12' from attence where userID in(select userID from users where dist between 80 and 100) and hour(entime) between 8 and 12";
$result5_1 = $conn->query($sql5_1);
$row5_1 = $result5_1->fetch_assoc();
$num5_1 = $row5_1['80-100,8-12'];
$sql5_2 = "select count(*) as '80-100,12-18' from attence where userID in(select userID from users where dist between 80 and 100) and hour(entime) between 12 and 18";
$result5_2 = $conn->query($sql5_2);
$row5_2 = $result5_2->fetch_assoc();
$num5_2 = $row5_2['80-100,12-18'];
$sql5_3 = "select count(*) as '80-100,18-22' from attence where userID in(select userID from users where dist between 80 and 100) and hour(entime) between 18 and 22";
$result5_3 = $conn->query($sql5_3);
$row5_3 = $result5_3->fetch_assoc();
$num5_3 = $row5_3['80-100,18-22'];
$sql6_1 = "select count(*) as '100+,8-12' from attence where userID in(select userID from users where dist>=100) and hour(entime) between 8 and 12";
$result6_1 = $conn->query($sql6_1);
$row6_1 = $result6_1->fetch_assoc();
$num6_1 = $row6_1['100+,8-12'];
$sql6_2 = "select count(*) as '100+,12-18' from attence where userID in(select userID from users where dist>=100) and hour(entime) between 12 and 18";
$result6_2 = $conn->query($sql6_2);
$row6_2 = $result6_2->fetch_assoc();
$num6_2 = $row6_2['100+,12-18'];
$sql6_3 = "select count(*) as '100+,18-22' from attence where userID in(select userID from users where dist>=100) and hour(entime) between 18 and 22";
$result6_3 = $conn->query($sql6_3);
$row6_3 = $result6_3->fetch_assoc();
$num6_3 = $row6_3['100+,18-22'];


//$data = array();
//$data["success"] = 0;
//$data["legend"] = array();
//$data["legend"]["data"] = array("男性用户", "女性用户");
//$data["series"] = array();
//$data["series"]["data"] = array(array("value" => $numMale, "name" => "男性用户"), array("value" => $numFemale, "name" => "女性用户"),);

$sexData[] = [
    "value"=>$num1_1,
    "name" => "5-20km,8-12点"
];

$sexData[] = [
    "value"=>$num1_2,
    "name" => "5-20km,12-18点"
];

$sexData[] = [
    "value"=>$num1_3,
    "name" => "5-20km,18-22点"
];

$sexData[] = [
    "value"=>$num2_1,
    "name" => "20-40km,8-12点"
];

$sexData[] = [
    "value"=>$num2_2,
    "name" => "20-40km,12-18点"
];

$sexData[] = [
    "value"=>$num2_3,
    "name" => "20-40km,18-22点"
];

$sexData[] = [
    "value"=>$num3_1,
    "name" => "40-60km,8-12点"
];

$sexData[] = [
    "value"=>$num3_2,
    "name" => "40-60km,12-18点"
];

$sexData[] = [
    "value"=>$num3_3,
    "name" => "40-60km,18-22点"
];

$sexData[] = [
    "value"=>$num4_1,
    "name" => "60-80km,8-12点"
];

$sexData[] = [
    "value"=>$num4_2,
    "name" => "60-80km,12-18点"
];

$sexData[] = [
    "value"=>$num4_3,
    "name" => "60-80km,18-22点"
];

$sexData[] = [
    "value"=>$num5_1,
    "name" => "80-100km,8-12点"
];

$sexData[] = [
    "value"=>$num5_2,
    "name" => "80-100km,12-18点"
];

$sexData[] = [
    "value"=>$num5_3,
    "name" => "80-100km,18-22点"
];

$sexData[] = [
    "value"=>$num6_1,
    "name" => "100+km,8-12点"
];

$sexData[] = [
    "value"=>$num6_2,
    "name" => "100+km,12-18点"
];

$sexData[] = [
    "value"=>$num6_3,
    "name" => "100+km,18-22点"
];

$data = [
    "success" => 0,
    "legend" => [
        "data" => ["5-20km,8-12点", "5-20km,12-18点", "5-20km,18-22点", "20-40km,8-12点", "20-40km,12-18点", "20-40km,18-22点", "40-60km,8-12点", "40-60km,12-18点", "40-60km,18-22点", "60-80km,8-12点", "60-80km,12-18点", "60-80km,18-22点", "80-100km,8-12点", "80-100km,12-18点", "80-100km,18-22点", "100+km,8-12点","100+km,12-18点","100+km,18-22点"]
    ],
    "series"=>[
        "data"=>$sexData
    ],
];


$json_string = json_encode($data, JSON_UNESCAPED_UNICODE);
//echo $json_string;
// 写入文件
//file_put_contents('../json/pl_1.2.1.txt', $json_string);
file_put_contents('../json/pl_1.2.2.txt', $json_string);