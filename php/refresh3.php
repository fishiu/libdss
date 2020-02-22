<?php
error_reporting(0);
require_once 'execute.php';
$myExecute = new execute();

$myExecute->doExecute('pl_3.1.1.php');
$myExecute->doExecute('pl_3.1.2.php');
$myExecute->doExecute('pl_3.1.3.php');
$myExecute->doExecute('pl_3.1.4.php');
$myExecute->doExecute('pl_3.1.5.php');
$myExecute->doExecute('pl_3.1.6.php');

session_start();
$_SESSION["activityTime"] = time(); // last update time

echo json_encode(["success" => 0]);
