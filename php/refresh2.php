<?php
error_reporting(0);
require_once 'execute.php';
$myExecute = new execute();

$myExecute->doExecute('pl_2.2.1.php');
$myExecute->doExecute('pl_2.2.2.php');
$myExecute->doExecute('pl_2.2.3.php');
$myExecute->doExecute('pl_2.2.4.php');
$myExecute->doExecute('pl_2.2.5.php');
$myExecute->doExecute('pl_2.2.6.php');

$myExecute->doExecute('pl_2.3.1.php');
$myExecute->doExecute('pl_2.3.2.php');
$myExecute->doExecute('pl_2.3.3.php');
$myExecute->doExecute('pl_2.3.4.php');
$myExecute->doExecute('pl_2.3.5.php');
$myExecute->doExecute('pl_2.3.6.php');

session_start();
$_SESSION["resourceTime"] = time(); // last update time

echo json_encode(["success" => 0]);
