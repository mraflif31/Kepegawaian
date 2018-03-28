<?php
    $nip = $_POST["nip"];
    $nama = $_POST["nama"];
    $kelamin = $_POST["kelamin"];
    $agama = $_POST["agama"];
    $gol_darah = $_POST["gol_darah"];
    $status_nikah = $_POST["status_nikah"];
    $jalan = $_POST["jalan"];
    $rt = $_POST["rt"];
    $rw = $_POST["rw"];
    $provinsi = $_POST["provinsi"];
    $kab_kota = $_POST["kab_kota"];
    $kecamatan = $_POST["kecamatan"];
    $des_kel = $_POST["des_kel"];
    $kode_pos = $_POST["kode_pos"];
    $tlp = $_POST["tlp"];
    $tanggal_lahir = $_POST["tanggal_lahir"];
    $tempat_lahir = $_POST["tempat_lahir"];

    $servername = "localhost:3306";
    $username = "root";
    $password = "";
    $dbname = "kepeg";

    //-------INSERT INTO pegawai--------
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

    mysqli_close($conn);

    
    //-----------INSERT INTO alamat-----------
    // Create connection
    $conn = mysqli_connect($servername, $username, $password, $dbname);
    // Check connection
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }
    
    $sql = "INSERT INTO alamat (nip, jalan, rt, rw, provinsi, kab_kota, kecamatan, des_kel, kode_pos, tlp)
    VALUES ('$nip', '$jalan', '$rt', '$rw', '$provinsi', '$kab_kota', '$kecamatan', '$des_kel', '$kode_pos', '$tlp')";
    
    if (mysqli_query($conn, $sql)) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }

    mysqli_close($conn);    


    //----------------INSERT INTO ttl---------------
    // Create connection
    $conn = mysqli_connect($servername, $username, $password, $dbname);
    // Check connection
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }
    
    $sql = "INSERT INTO alamat (nip, tanggal_lahir, tempat_lahir)
    VALUES ('$nip', '$tanggal_lahir', '$tempat_lahir')";
    
    if (mysqli_query($conn, $sql)) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }

    mysqli_close($conn);

    header("Location: ../tambahPegawai.php")
?>