<?php
error_reporting(0);
require_once '../php/DB.php';

$myDB = new DB();
$conn = $myDB->connection();

//借阅与价格关系
$sql = "SELECT price as price, COUNT(ID) as borrowNum FROM(SELECT borecords.bookID as ID, books.price as price
FROM borecords INNER JOIN books ON borecords.bookID=books.bookID) x GROUP BY  price;";

$resultbor_price = $conn->query($sql);
$borNumber = array();
$bor_price = array();
while ($rowKind = $resultbor_price->fetch_assoc()) {
    $price = $rowKind['price'];
    $borNum = $rowKind['borrowNum'];
    array_push($bor_price, $price);
    array_push($borNumber, $borNum);
}
//$bor_price存储价格，$borNumber存储对应的借阅数量

$sqlNum = "SELECT price , sum(booksnum) as booksNum FROM books_num GROUP BY price;";
$resultNum = $conn->query($sqlNum);
$book_price = array();
$booksNum = array();
while ($rowKind = $resultNum->fetch_assoc()) {
    $price = $rowKind['price'];
    $bookNum = $rowKind['booksNum'];
    array_push($book_price, $price);
    array_push($booksNum, $bookNum);
}
//$book_price存储所有价格，$booksNum存储对应价格书本的库存拥有量
$bor_Num_rat = array();
for ($i = 0; $i < count($book_price); $i++) {
    for ($j = 0; $j < count($bor_price); $j++) {
        if ($book_price[$i] == $bor_price[$j]) {
            $bor_Num_rat[] = $borNumber[$j] / $booksNum[$i];
            break;
        } else {
            continue;
        }
    }
}

//计算到此步之后，$bor_Num_rat存储每个价格对应的借阅量与馆藏量比值，$book_price存储出所有价格
$bor_book_Date = array();
for ($i = 0; $i < count($bor_price); $i++) {
    $bor_book_Date[] = [
        "value" => $bor_Num_rat[$i],
        "name" => $book_price[$i]
    ];
}

$data = [
    "success" => 0,
    "legend" => [
        "data" => $bor_price
    ],
    "series" => [
        "data" => $bor_book_Date
    ],
];

//把unicode变成中文
$json_string = json_encode($data, JSON_UNESCAPED_UNICODE);

// 写入文件
file_put_contents('../json/pl_2.2.5.txt', $json_string);



