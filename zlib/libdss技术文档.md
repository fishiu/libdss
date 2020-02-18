##### Javascript读取.json的范例

```js
var data1 ;
$.ajax({
    url:'/static/register.json',
    type:"get",
    async:false,
    success:function(data){
       data1 = data;
       //console.log(data1)
    },
    error:function(){
      console.log('读取数据失败！');
    }
});
```

##### PHP生成.json文件的范例

```php+HTML
<?php
// 查数据库环节
require_once '../php/DB.php';

$myDB = new DB();
$conn = $myDB->connection();

$sqlMale = "SELECT count(*) as male from users where gender='男'";
$resultMale = $conn->query($sqlMale);
$rowMale = $resultMale->fetch_assoc();
$numMale = $rowMale['male'];

$sqlFemale = "SELECT count(*) as female from users where gender='女'";
$resultFemale = $conn->query($sqlFemale);
$rowFemale = $resultFemale->fetch_assoc();
$numFemale = $rowFemale['female'];

// 生成一个PHP数组$data
$sexData[] = [
    "value"=>$numMale,
    "name" => "男性用户"
];
$sexData[] = [
    "value"=>$numFemale,
    "name" => "女性用户"
];

$data = [
    "success" => 0,
    "legend" => [
        "data" => ["男性用户", "女性用户"]
    ],
    "series"=>[
        "data"=>$sexData
    ],
];

// 把PHP数组转成JSON字符串
$json_string = json_encode($data, JSON_UNESCAPED_UNICODE);
// 写入文件
file_put_contents('../json/test.json', $json_string);
?>
```

##### 如何写数组

- 变量等于中括号

  ```php
  $data = [
    1 => "abc", // 所有无键变量都是有整数默认作为键
    "a" => 1
  ];
  ```

- 增量等于中括号

  ```php
  $data[] = [
    a => "abc",
    "a" => 1
  ];
  
  $data["b"] = [
    1 => "abc",
    "a" => 1
  ];
  ```

  