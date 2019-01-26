<?php

$path = dirname(__FILE__);

require_once($path . '/vendor/autoload.php');

$dotenv = Dotenv\Dotenv::create(__DIR__);
$dotenv->load();

$mysqli = new mysqli(getenv("db_host"),getenv("db_username"),getenv("db_password"),"users");

if(mysqli_connect_errno()){
    printf("connection failed: %s\n", mysqli_connect_errno());
    exit();
};

// __________  sanitize form input __________
//
$name  = addslashes($mysqli->real_escape_string($_POST['name']));
$name = filter_var($name, FILTER_SANITIZE_STRING);
$email = addslashes($mysqli->real_escape_string($_POST['email']));
$email = filter_var($email, FILTER_SANITIZE_EMAIL);

// _________________  prepare statement ___________________
// 
if(!($statement = $mysqli->prepare("INSERT INTO users1(name, email) VALUES (?,?)"))){
    echo "Prepair failed: (" . $mysqli->errno . ") " . $mysqli->error;
}

// ___________________  bind and execute _______________________
//
if(!($statement->bind_param("ss", $name, $email ))) {
    echo "Binding parameters failed: " . $statement->errno . " " . $statement->error;
}

if(!($statement->execute())){
    echo "Statement failed to execute: " . $statement->errno . " " . $statement->error;
}