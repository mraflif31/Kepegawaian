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
                    <thead>
                        <tr>
                            <td>NIP</td>
                            <td>Nama</td>
                        </tr>
                    </thead>
                    <tbody>
                        <?php
                        $servername = "localhost:3306";
                        $username = "root";
                        $password = "";
                        $dbname = "kepeg";

                        function downloadAndPrint() {
                            $zip = new ZipArchive();
                            $inputFilename = '../../word_resources/CONTOH_CUTI_BESAR.docx';
                            $outputFilename = 'PRINTABLE.docx';

                            //Copy and rename template file
                            if (!copy($inputFilename, $outputFilename)) {
                                echo "Failed to copy $inputFilename to $outputFilename";
                            }


                            //Get printing identity
                            $token1 = 'Muhammad Rafli Fadillah';
                            $token2 = '123456';

                            if ($zip->open($outputFilename, ZIPARCHIVE::CREATE) !== TRUE) {
                                echo "Cannot open $outputFilename";
                                die;
                            }

                            $xml = $zip->getFromName('word/document.xml');

                            $xml = str_replace('{TOKEN1}', $token1, $xml);

                            $xml = str_replace('{TOKEN2}', $token2, $xml);

                            if ($zip->addFromString('word/document.xml', $xml)) {
                                echo 'Succesfully written!!';
                            } else {
                                echo 'File not written :(((';
                            }

                            $zip->close();

                            //Send file to user
                            header('Content-Description: File Transfer');
                            header('Content-Type: aplication/octet-stream');
                            header('Content-Disposition: attachment; filename="PRINTABLE.docx');
                            header('Content-Transfer-Encoding: binary');
                            header('Expires: 0');
                            header('Cache-Control: must-revalidate');
                            header('Pragma: public');
                            header('Content-Length: ' . filesize($outputFilename));
                            ob_clean();
                            flush();
                            readfile($outputFilename);
                            unlink($outputFilename);
                        }
                        
                        if (isset($_GET['hello'])) {
                            downloadAndPrint();
                        }
                        
                        // Create connection
                        $conn = new mysqli($servername, $username, $password, $dbname);

                        // Check connection
                        if ($conn->connect_error) {
                            die("Connection failed: " . $conn->connect_error);
                        }

                        $sql = "SELECT nip, nama FROM pegawai";
                        $result = $conn->query($sql);

                        while ($row = $result->fetch_assoc()) {
                            ?>
                            <tr>
                                <td><?php echo $row["nip"] ?></td>
                                <td><?php echo $row["nama"] ?></td>
                            </tr>
                            <?php
                        }
                        ?>      
                    </tbody>
                </table>

                <a id="dlLink" href="home.php?hello=true">Download File<br></a>
                <a id="tambahPegawaiLink" href="tambahPegawai.php">Tambah Pegawai</a>
            </div>

        </div>
    </body>
    <script src="../js/dropdown.js"></script>
</html>
