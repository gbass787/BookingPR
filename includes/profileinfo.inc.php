<?php

session_start();

if($_SERVER["REQUEST_METHOD"] == "POST") {

    $id = $_SESSION["userid"];
    $uid = $_SESSION["useruid"];
    $about = htmlspecialchars($_POST["about"], ENT_QUOTES, "UTF-8");
    $introTitle = htmlspecialchars($_POST["introtitle"], ENT_QUOTES, "UTF-8");
    $introText = htmlspecialchars($_POST["introtext"], ENT_QUOTES, "UTF-8");
    $region = htmlspecialchars($_POST["region"], ENT_QUOTES, "UTF-8");
    $genre = htmlspecialchars($_POST["genre"], ENT_QUOTES, "UTF-8");
    $type = htmlspecialchars($_POST["type"], ENT_QUOTES, "UTF-8");

    include "../classes/dbh.classes.php";
    include "../classes/profileinfo.classes.php";
    include "../classes/profileinfo-contr.classes.php";
    $profileInfo = new ProfileInfoContr($id, $uid);

    $profileInfo->updateProfileInfo($about, $introTitle, $introText, $region, $genre, $type);

    header("location: ../profile.php?error=none");

}