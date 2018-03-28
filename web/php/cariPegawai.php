<?php ?>
<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <meta charset="UTF-8">
        <title>Kepegawaian</title>
        <link rel="stylesheet" href="../css/general.css">
        <link rel="stylesheet" href="../css/cariPegawai.css">
    </head>
    <body>
        <div id="header">
            Tes
        </div>

        <div id="body">

            <div id="menubar" class="b1">
                <div class="dropdown">
                    <button onClick="myFunction('pegawaiDropdown')" class="dropbtn">Pegawai</button>
                    <div id="pegawaiDropdown" class="dropdown-content">
                        <a href="cariPegawai.php">Cari Pegawai</a>
                        <a href="tambahPegawai.php">Tambah Pegawai</a>
                        <a href="#">Sunting Pegawai</a>
                    </div>
                </div>
                <a class="menu_item" id="menu_item2">Heheheh</a>
                <a class="menu_item" id="menu_item3">Waduh</a>
                <div class="dropdown">
                    <button onClick="myFunction('testDropdown')" class="dropbtn">Dropdown</button>
                    <div id="testDropdown" class="dropdown-content">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>
                </div>
            </div>

            <div id="main" class="b1">
                <table id="view-table">
                    <thead class="head">
                        <tr>
                            <td class="table_head"><a href="cariPegawai.php">NIP</a></td>
                            <td class="table_head"><a href="cariPegawai.php?sort=nama">Nama</a></td>
                            <td class="table_head"><a href="cariPegawai.php?sort=kelamin">Kelamin</a></td>
                            <td class="table_head"><a href="cariPegawai.php?sort=agama">Agama</a></td>
                            <td class="table_head"><a href="cariPegawai.php?sort=gol_darah">Gol. Darah</a></td>
                            <td class="table_head"><a href="cariPegawai.php?sort=status_nikah">Status Pernikahan</a></td>
                            <td class="table_head">Opsi</td>
                        </tr>
                    </thead>
                    <tbody class="body">
                        <?php
                        $servername = "localhost:3306";
                        $username = "root";
                        $password = "";
                        $dbname = "kepeg";
                        
                        // Create connection
                        $conn = new mysqli($servername, $username, $password, $dbname);

                        // Check connection
                        if ($conn->connect_error) {
                            die("Connection failed: " . $conn->connect_error);
                        }

                        $sql = "SELECT nip, nama, kelamin, agama, gol_darah, status_nikah FROM pegawai";
                        
                        //Get sorting method from $_GET
                        
                        if (array_key_exists('sort', $_GET)) {
                            if ($_GET['sort'] == 'nama') {
                                $sql .= " ORDER BY nama";
                            } else if ($_GET['sort'] == 'kelamin') {
                                $sql .= " ORDER BY kelamin";
                            } else if ($_GET['sort'] == 'agama') {
                                $sql .= " ORDER BY agama";
                            } else if ($_GET['sort'] == 'gol_darah') {
                                $sql .= " ORDER BY gol_darah";
                            } else if ($_GET['sort'] == 'status_nikah') {
                                $sql .= " ORDER BY status_nikah";
                            }
                        }
                        
                        $result = $conn->query($sql);

                        while ($row = $result->fetch_assoc()) {
                            ?>
                            <tr>
                                <td class="table_body"><?php echo $row["nip"] ?></td>
                                <td class="table_body"><?php echo $row["nama"] ?></td>
                                <td class="table_body"><?php echo $row["kelamin"] ?></td>
                                <td class="table_body"><?php echo $row["agama"] ?></td>
                                <td class="table_body"><?php echo $row["gol_darah"] ?></td>
                                <td class="table_body"><?php echo $row["status_nikah"] ?></td>
                                <td class="table_body" style=""><button>Edit</button> <button>Delete</button></td>
                            </tr>
                            <?php
                        }
                        
                        
                        ?>      
                    </tbody>
                </table>
            </div>

        </div>
    </body>
    <script src="../js/dropdown.js"></script>
</html>
