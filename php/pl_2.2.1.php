<?php
error_reporting(0);
require_once '../php/DB.php';

$myDB = new DB();
$conn = $myDB->connection();


//各类文献资源数量
$sqlKind = "SELECT firstKind,count(firstKind) FROM `books` GROUP BY firstKind;";
$resultKind = $conn->query($sqlKind);
//关联数组
$kindDate = array();
while ($rowKind=$resultKind->fetch_assoc()){
    $kindDate[] = [
        "value"=>$rowKind['count(firstKind)'],
        "name" => $rowKind['firstKind']
    ];
}


$data = [
    "success" => 0,
    "legend" => [
        "data" => ["两性关系","个人理财","中小学教辅","传记","体育/运动","保健/心理健康","农业/林业","动漫/幽默","医学",
            "历史","古籍","哲学/宗教","地图/地理","外语", "孕产妇/育儿","家居/休闲游戏","家庭教育","小说","少儿","工业技术",
            "工具书","建筑","成功/励志","收藏/鉴赏", "政治军事","教材","文化","文学","旅游","法律","社会科学","科普读物",
            "管理","经济","美丽装扮","美食","考试","自然科学","艺术","计算机/网络","青春文学"]
    ],
    "series"=>[
        "data"=>$kindDate
    ],
];

//把unicode变成中文
$json_string = json_encode($data, JSON_UNESCAPED_UNICODE);
//echo $json_string;
// 写入文件
file_put_contents('../json/pl_2.2.1.txt', $json_string);