<?php
    header("Content-type: application/json; charset=UTF-8");

    $obj = json_decode($_GET["x"], false);
    $conn = new mysqli("localhost","root","","testdb");
    if($conn->connect_error){
        die("Connection failed" . $conn->connect_error);
    }

    $stmt =$conn->prepare("SELECT name FROM customers LIMIT ?");
    $stmt->bind_param("i",$obj->limit);
    $stmt->execute();
    $result = $stmt->get_result();

    $outp = $result->fetch_all(MYSQLI_ASSOC);

    echo json_encode($outp);
    $conn->close();
?>