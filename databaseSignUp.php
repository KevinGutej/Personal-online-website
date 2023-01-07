<?php

$connection = new mysqli("localhost", "root", "", "mywebsite");

if ($connection->errno == 0) {
    $email = $_POST["email"];
    $name = $_POST["name"];
    $request = "INSERT INTO client (name,email) VALUES('$name', '$email');";
    if($result = $connection->query($request))
    {
        echo "Successful Added";
    }
    else{
        echo "Not Successful";
    }
} else {
    echo "Connection can't be established";
}
