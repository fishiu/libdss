<?php
session_start();
//$_SESSION["userState"] = true; // true means updated
//$_SESSION["userTime"] = null; // last update time
//
//$_SESSION["resourceState"] = true; // true means updated
//$_SESSION["resourceTime"] = null; // last update time
//
//$_SESSION["activityState"] = true; // true means updated
//$_SESSION["activityTime"] = null; // last update time

$userTime = $_SESSION["userTime"];
$resourceTime = $_SESSION["resourceTime"];
$activityTime = $_SESSION["activityTime"];

$data = [
    "userTime" => $userTime,
    "resourceTime" => $resourceTime,
    "activityTime" => $activityTime
];

$data["success"] = 0;
echo json_encode($data);
