<?php
error_reporting(0);
require_once 'execute.php';

$myExecute = new execute();

$myExecute->doExecute('pl_1.1.1.php');
$myExecute->doExecute('pl_1.1.2.php');
$myExecute->doExecute('pl_1.1.4.php');
$myExecute->doExecute('pl_1.1.5.php');
$myExecute->doExecute('pl_1.1.6.php');

$myExecute->doExecute('pl_1.2.1.php');
$myExecute->doExecute('pl_1.2.2.php');
$myExecute->doExecute('pl_1.2.3.php');

$myExecute->doExecute('pl_1.3.1.php');
$myExecute->doExecute('pl_1.3.2.php');
$myExecute->doExecute('pl_1.3.3.php');
$myExecute->doExecute('pl_1.3.4.php');
$myExecute->doExecute('pl_1.3.5.php');
$myExecute->doExecute('pl_1.3.6.php');
$myExecute->doExecute('pl_1.3.7.php');
$myExecute->doExecute('pl_1.3.8.php');

session_start();
$_SESSION["userTime"] = time(); // last update time

echo json_encode(["success" => 0]);
