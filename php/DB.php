<?php
error_reporting(0);

class DB
{
    private $servername = "localhost";
    private $username = "root";
    private $password = "root";
    private $dbname = "libdss";
//    private $servername = "localhost";
//    private $username = "leverest_xyz";
//    private $password = "abcd";
//    private $dbname = "leverest_xyz";

    public function connection()
    {

        $conn = new mysqli($this->servername, $this->username, $this->password, $this->dbname);
        // 检测连接
        if ($conn->connect_error)
        {
            die("连接失败: " . $conn->connect_error);
        }
        return $conn;
    }
}
