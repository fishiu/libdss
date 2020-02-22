<?php
error_reporting(0);

class DB {
	private $servername = "yourServername";
	private $username = "yourUsername";
	private $password = "yourPassword";
	private $dbname = "yourDbname";

	public function connection() {

		$conn = new mysqli($this->servername, $this->username, $this->password, $this->dbname);
		// 检测连接
		if ($conn->connect_error) {
			die("连接失败: " . $conn->connect_error);
		}
		return $conn;
	}
}
