<?php ?>

<!DOCTYPE html>

<html>
    <head>
        <meta charset="UTF-8">
        <title>Kepegawaian</title>
        <link rel="stylesheet" href="../css/general.css">
    </head>
    
    <script type="text/javascript" src="http://code.jquery.com/jquery-1.7.1.min.js"></script>
    
    <body>
        <div id='header'>
            Tes
        </div>
        
        <div id="body">
            
            <div id="menubar" class="b1">
                <div class="dropdown">
                    <button onClick="myFunction('pegawaiDropdown')" class="dropbtn">Pegawai</button>
                    <div id="pegawaiDropdown" class="dropdown-content">
                        <a href="#">Cari Pegawai</a>
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
                
                <form id='form' action="func/insertPegawai.php" method="post">
                    <table>
                        <tr>
                            <td align="right">NIP:</td>
                            <td align="left"><input type="text" name="nip" required></td>
                        </tr>
                        <tr>
                            <td align="right">Nama:</td>
                            <td align="left"><input type="text" name="nama" required></td>
                        </tr>
                        <tr>
                            <td align="right">Jenis Kelamin:</td>
                            <td align="left"><input type="radio"  name="kelamin" value="pria" required checked> Pria
                                             <input type="radio"  name="kelamin" value="wanita"> Wanita</td>
                        </tr>
                        <tr>
                            <td align="right">Agama:</td>
                            <td align="left"><select name="agama">
                                                <option value="islam" required>Islam</option>
                                                <option value="katolik">Katolik</option>
                                                <option value="protestan">Protestan</option>
                                                <option value="hindu">Hindu</option>
                                                <option value="buddha">Buddha</option>
                                             </select></td>
                        </tr>
                        <tr>
                            <td align="right">Golongan Darah:</td>
                            <td align="left"><select name="gol_darah">
                                                <option value="a" required>A</option>
                                                <option value="b">B</option>
                                                <option value="ab">AB</option>
                                                <option value="o">O</option>
                                             </select></td>
                        </tr>
                        <tr>
                            <td align="right" name="nip">Status Pernikahan:</td>
                            <td align="left"><select name="status_nikah">
                                                <option value="belum" required>Belum Menikah</option>
                                                <option value="kawin">Menikah</option>
                                                <option value="cerai_hidup">Cerai Hidup</option>
                                                <option value="cerai_mati">Cerai Mati</option>
                                             </select></td>
                        </tr>
                        <tr>
                            <td></td>
                        </tr>
                        <tr>
                            <td align="right"></td>
                            <td align="center"><input type="submit"></td>
                        </tr>
                    </table>
                </form>
                
            </div>
            
        </div>
    </body>
    <script src="../js/dropdown.js"></script>
</html>