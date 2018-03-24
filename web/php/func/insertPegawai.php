<?php
    $nip = $_POST["nip"];
    $nama = $_POST["nama"];
    $kelamin = $_POST["kelamin"];
    $agama = $_POST["agama"];
    $gol_darah = $_POST["gol_darah"];
    $status_nikah = $_POST["status_nikah"];

    $servername = "localhost:3306";
    $username = "root";
    $password = "";
    $dbname = "kepeg";

    // Create connection
    $conn = mysqli_connect($servername, $username, $password, $dbname);
    // Check connection
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }
    
    $sql = "INSERT INTO pegawai (nip, nama, kelamin, agama, gol_darah, status_nikah)
    VALUES ('$nip', '$nama', '$kelamin', '$agama', '$gol_darah', '$status_nikah')";
    
    if (mysqli_query($conn, $sql)) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }

    header("Location: ../tambahPegawai.php")
?>