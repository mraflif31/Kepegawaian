<?php ?>

<!DOCTYPE html>

<html>
    <head>
        <meta charset="UTF-8">
        <title>Kepegawaian</title>
        <link rel="stylesheet" href="../css/general.css">
    </head>
    
    <script type="text/javascript" src="http://code.jquery.com/jquery-1.11.1.min.js"></script>
    
    <body>
        <div id='header'>
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
                
                <form id='form' action="func/insertPegawai.php" method="post">
                    <table id='table-form'>
                        <tr>
                            <td align="right" ></td>
                            <td align="left"><b>DATA DIRI</b></td>
                        </tr>
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
                            <td align="left"><input type="radio"  name="kelamin" value="Pria" required checked> Pria
                                             <input type="radio"  name="kelamin" value="Wanita"> Wanita</td>
                        </tr>
                        <tr>
                            <td align="right">Agama:</td>
                            <td align="left"><select name="agama">
                                                <option value="Islam" required>Islam</option>
                                                <option value="Katolik">Katolik</option>
                                                <option value="Protestan">Protestan</option>
                                                <option value="Hindu">Hindu</option>
                                                <option value="Buddha">Buddha</option>
                                             </select></td>
                        </tr>
                        <tr>
                            <td align="right">Golongan Darah:</td>
                            <td align="left"><select name="gol_darah">
                                                <option value="A" required>A</option>
                                                <option value="B">B</option>
                                                <option value="AB">AB</option>
                                                <option value="O">O</option>
                                             </select></td>
                        </tr>
                        <tr>
                            <td align="right" name="nip">Status Pernikahan:</td>
                            <td align="left"><select name="status_nikah">
                                                <option value="Belum Menikah" required>Belum Menikah</option>
                                                <option value="Menikah">Menikah</option>
                                                <option value="Cerai Hidup">Cerai Hidup</option>
                                                <option value="Cerai Mati">Cerai Mati</option>
                                             </select></td>
                        </tr>
                        <tr>
                            <td align="right">Tempat Lahir:</td>
                            <td align="left"><input type="text" name="tempat_lahir" required></td>
                        </tr>
                        
                        <tr>
                            <td align="right">Tanggal Lahir:</td>
                            <td align="left"><input type="date" name="tanggal_lahir" required></td>
                        </tr>
                        <tr>
                            <td align="right" > </td>
                        </tr>
                        <tr>
                            <td align="right" ><b></b></td>
                            <td align="left" ><b>ALAMAT</b></td>
                        </tr>
                        <tr>
                            <td align="right">Provinsi:</td>
                            <td align="left"><select id="prov" name ="provinsi">
                                                <option value="" disabled selected hidden>-- PILIH SATU --</option><option value="ACEH" required>ACEH</option><option value="BALI">BALI</option><option value="BANTEN">BANTEN</option><option value="BENGKULU">BENGKULU</option><option value="DKI JAKARTA">DKI JAKARTA</option><option value="DIY YOGYAKARTA">DIY YOGYAKARTA</option><option value="GORONTALO">GORONTALO</option><option value="JAMBI">JAMBI</option><option value="JAWA BARAT">JAWA BARAT</option><option value="JAWA TENGAH">JAWA TENGAH</option><option value="JAWA TIMUR">JAWA TIMUR</option><option value="KALIMANTAN BARAT">KALIMANTAN BARAT</option><option value="KALIMANTAN SELATAN">KALIMANTAN SELATAN</option><option value="KALIMANTAN TENGAH">KALIMANTAN TENGAH</option><option value="KALIMANTAN TIMUR">KALIMANTAN TIMUR</option><option value="KALIMANTAN UTARA">KALIMANTAN UTARA</option><option value="KEPULAUAN BANGKA BELITUNG">KEPULAUAN BANGKA BELITUNG</option><option value="KEPULAUAN RIAU">KEPULAUAN RIAU</option><option value="LAMPUNG">LAMPUNG</option><option value="MALUKU">MALUKU</option><option value="MALUKU UTARA">MALUKU UTARA</option><option value="NUSA TENGGARA BARAT">NUSA TENGGARA BARAT</option><option value="NUSA TENGGARA TIMUR">NUSA TENGGARA TIMUR</option><option value="PAPUA">PAPUA</option><option value="PAPUA BARAT">PAPUA BARAT</option><option value="RIAU">RIAU</option><option value="SULAWESI BARAT">SULAWESI BARAT</option><option value="SULAWESI SELATAN">SULAWESI SELATAN</option><option value="SULAWESI TENGAH">SULAWESI TENGAH</option><option value="SULAWESI TENGGARA">SULAWESI TENGGARA</option><option value="SULAWESI UTARA">SULAWESI UTARA</option><option value="SUMATERA BARAT">SUMATERA BARAT</option><option value="SUMATERA SELATAN">SUMATERA SELATAN</option><option value="SUMATERA UTARA">SUMATERA UTARA</option>
                                             </select>
                            </td>
                        </tr>
                        <tr>
                            <td align="right">Kota/Kabupaten:</td>
                            <td align="left"><select id="kab_kota" name="kab_kota">
                                                <option value="" required>-- PILIH SATU --</option>
                                             </select>
                            </td>
                        </tr>
                        <tr>
                            <td align="right">Kecamatan:</td>
                            <td align="left"><input type="text" name="kecamatan" required></td>
                        </tr>
                        <tr>
                            <td align="right">Desa/Kelurahan:</td>
                            <td align="left"><input type="text" name="des_kel" required></td>
                        </tr>
                        <tr>
                            <td align="right">Jalan:</td>
                            <td align="left"><input type="text" name="jalan" required></td>
                        </tr>
                        <tr>
                            <td align="right">RT:</td>
                            <td align="left"><input type="text" name="rt" required></td>
                        </tr>
                        <tr>
                            <td align="right">RW:</td>
                            <td align="left"><input type="text" name="rw" required></td>
                        </tr>
                        <tr>
                            <td align="right">Kode Pos:</td>
                            <td align="left"><input type="text" name="kode_pos" required></td>
                        </tr>
                        <tr>
                            <td align="right">No. Telp:</td>
                            <td align="left"><input type="text" name="tlp" required></td>
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
    <script src="../js/kab_kota.js"></script>
</html>