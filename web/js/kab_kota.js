$(document).ready(function () {
    $("#prov").change(function () {
        var val = $(this).val();
        if (val == "ACEH") {
            $("#kab_kota").html("<option value='KABUPATEN ACEH BARAT' required>KABUPATEN ACEH BARAT</option><option value='KABUPATEN ACEH BARAT DAYA'>KABUPATEN ACEH BARAT DAYA</option><option value='KABUPATEN ACEH BESAR'>KABUPATEN ACEH BESAR</option><option value='KABUPATEN ACEH JAYA'>KABUPATEN ACEH JAYA</option><option value='KABUPATEN ACEH SELATAN'>KABUPATEN ACEH SELATAN</option><option value='KABUPATEN ACEH SINGKIL'>KABUPATEN ACEH SINGKIL</option><option value='KABUPATEN ACEH TAMIANG'>KABUPATEN ACEH TAMIANG</option><option value='KABUPATEN ACEH TENGAH'>KABUPATEN ACEH TENGAH</option><option value='KABUPATEN ACEH TENGGARA'>KABUPATEN ACEH TENGGARA</option><option value='KABUPATEN ACEH TIMUR'>KABUPATEN ACEH TIMUR</option><option value='KABUPATEN BENER MERIAH'>KABUPATEN BENER MERIAH</option><option value='KABUPATEN BIREUEN'>KABUPATEN BIREUEN</option><option value='KABUPATEN GAYO LUES'>KABUPATEN GAYO LUES</option><option value='KABUPATEN NAGAN RAYA'>KABUPATEN NAGAN RAYA</option><option value='KABUPATEN PIDIE'>KABUPATEN PIDIE</option><option value='KABUPATEN PIDIE JAYA'>KABUPATEN PIDIE JAYA</option><option value='KABUPATEN SIMEULUE'>KABUPATEN SIMEULUE</option><option value='KOTA BANDA ACEH'>KOTA BANDA ACEH</option><option value='KOTA LANGSA'>KOTA LANGSA</option><option value='KOTA LHOKSEUMAWE'>KOTA LHOKSEUMAWE</option><option value='KOTA SABANG'>KOTA SABANG</option><option value='KOTA SUBULUSSALAM'>KOTA SUBULUSSALAM</option>");
        } else if (val == "BALI") {
            $("#kab_kota").html("<option value='KABUPATEN BADUNG' required>KABUPATEN BADUNG</option><option value='KABUPATEN BANGLI'>KABUPATEN BANGLI</option><option value='KABUPATEN BULELENG'>KABUPATEN BULELENG</option><option value='KABUPATEN GIANYAR'>KABUPATEN GIANYAR</option><option value='KABUPATEN JEMBRANA'>KABUPATEN JEMBRANA</option><option value='KABUPATEN KARANGASEM'>KABUPATEN KARANGASEM</option><option value='KABUPATEN KLUNGKUNG'>KABUPATEN KLUNGKUNG</option><option value='KABUPATEN TABANAN'>KABUPATEN TABANAN</option><option value='KOTA DENPASAR'>KOTA DENPASAR</option>");
        } else if (val == "BANTEN") {
            $("#kab_kota").html("<option value='KABUPATEN LEBAK' required>KABUPATEN LEBAK</option><option value='KABUPATEN PANDEGLANG'>KABUPATEN PANDEGLANG</option><option value='KABUPATEN SERANG'>KABUPATEN SERANG</option><option value='KABUPATEN TANGERANG'>KABUPATEN TANGERANG</option><option value='KOTA CILEGON'>KOTA CILEGON</option><option value='KOTA SERANG'>KOTA SERANG</option><option value='KOTA TANGERANG'>KOTA TANGERANG</option><option value='KOTA TANGERANG SELATAN'>KOTA TANGERANG SELATAN</option>");
        } else if (val == "BENGKULU") {
            $("#kab_kota").html("<option value='KABUPATEN BENGKULU SELATAN' required>KABUPATEN BENGKULU SELATAN</option><option value='KABUPATEN BENGKULU TENGAH'>KABUPATEN BENGKULU TENGAH</option><option value='KABUPATEN BENGKULU UTARA'>KABUPATEN BENGKULU UTARA</option><option value='KABUPATEN KAUR'>KABUPATEN KAUR</option><option value='KABUPATEN KEPAHIANG'>KABUPATEN KEPAHIANG</option><option value='KABUPATEN LEBONG'>KABUPATEN LEBONG</option><option value='KABUPATEN MUKOMUKO'>KABUPATEN MUKOMUKO</option><option value='KABUPATEN REJANG LEBONG'>KABUPATEN REJANG LEBONG</option><option value='KABUPATEN SELUMA'>KABUPATEN SELUMA</option><option value='KOTA BENGKULU'>KOTA BENGKULU</option>");
        } else if (val == "DKI JAKARTA") {
            $("#kab_kota").html("<option value='JAKARTA BARAT' required>JAKARTA BARAT</option><option value='JAKARTA PUSAT'>JAKARTA PUSAT</option><option value='JAKARTA SELATAN'>JAKARTA SELATAN</option><option value='JAKARTA TIMUR'>JAKARTA TIMUR</option><option value='JAKARTA UTARA'>JAKARTA UTARA</option><option value='KEPULAUAN SERIBU'>KEPULAUAN SERIBU</option>");
        } else if (val == "DIY YOGYAKARTA") {
            $("#kab_kota").html("<option value='KABUPATEN BANTUL' required>KABUPATEN BANTUL</option><option value='KABUPATEN GUNUNGKIDUL'>KABUPATEN GUNUNGKIDUL</option><option value='KABUPATEN KULON PROGO'>KABUPATEN KULON PROGO</option><option value='KABUPATEN SLEMAN'>KABUPATEN SLEMAN</option><option value='KOTA YOGYAKARTA'>KOTA YOGYAKARTA</option>");
        } else if (val == "GORONTALO") {
            $("#kab_kota").html("<option value='KABUPATEN BOALEMO' required>KABUPATEN BOALEMO</option><option value='KABUPATEN BONE BOLANGO'>KABUPATEN BONE BOLANGO</option><option value='KABUPATEN GORONTALO'>KABUPATEN GORONTALO</option><option value='KABUPATEN GORONTALO UTARA'>KABUPATEN GORONTALO UTARA</option><option value='KABUPATEN POHUWATO'>KABUPATEN POHUWATO</option><option value='KOTA GORONTALO'>KOTA GORONTALO</option>");
        } else if (val == "JAMBI") {
            $("#kab_kota").html("<option value='KABUPATEN BATANGHARI' required>KABUPATEN BATANGHARI</option><option value='KABUPATEN BUNGO'>KABUPATEN BUNGO</option><option value='KABUPATEN KERINCI'>KABUPATEN KERINCI</option><option value='KABUPATEN MERANGIN'>KABUPATEN MERANGIN</option><option value='KABUPATEN MUARO JAMBI'>KABUPATEN MUARO JAMBI</option><option value='KABUPATEN SAROLANGUN'>KABUPATEN SAROLANGUN</option><option value='KABUPATEN TANJUNG JABUNG BARAT'>KABUPATEN TANJUNG JABUNG BARAT</option><option value='KABUPATEN TANJUNG JABUNG TIMUR'>KABUPATEN TANJUNG JABUNG TIMUR</option><option value='KABUPATEN TEBO'>KABUPATEN TEBO</option><option value='KOTA JAMBI'>KOTA JAMBI</option><option value='KOTA SUNGAIPENUH'>KOTA SUNGAIPENUH</option>");
        } else if (val == "JAWA BARAT") {
            $("#kab_kota").html("<option value='KABUPATEN BANDUNG' required>KABUPATEN BANDUNG</option><option value='KABUPATEN BANDUNG BARAT'>KABUPATEN BANDUNG BARAT</option><option value='KABUPATEN BEKASI'>KABUPATEN BEKASI</option><option value='KABUPATEN BOGOR'>KABUPATEN BOGOR</option><option value='KABUPATEN CIAMIS'>KABUPATEN CIAMIS</option><option value='KABUPATEN CIANJUR'>KABUPATEN CIANJUR</option><option value='KABUPATEN CIREBON'>KABUPATEN CIREBON</option><option value='KABUPATEN GARUT'>KABUPATEN GARUT</option><option value='KABUPATEN INDRAMAYU'>KABUPATEN INDRAMAYU</option><option value='KABUPATEN KARAWANG'>KABUPATEN KARAWANG</option><option value='KABUPATEN KUNINGAN'>KABUPATEN KUNINGAN</option><option value='KABUPATEN MAJALENGKA'>KABUPATEN MAJALENGKA</option><option value='KABUPATEN PANGANDARAN'>KABUPATEN PANGANDARAN</option><option value='KABUPATEN PURWAKARTA'>KABUPATEN PURWAKARTA</option><option value='KABUPATEN SUBANG'>KABUPATEN SUBANG</option><option value='KABUPATEN SUKABUMI'>KABUPATEN SUKABUMI</option><option value='KABUPATEN SUMEDANG'>KABUPATEN SUMEDANG</option><option value='KABUPATEN TASIKMALAYA'>KABUPATEN TASIKMALAYA</option><option value='KOTA BANDUNG'>KOTA BANDUNG</option><option value='KOTA BANJAR'>KOTA BANJAR</option><option value='KOTA BEKASI'>KOTA BEKASI</option><option value='KOTA BOGOR'>KOTA BOGOR</option><option value='KOTA CIMAHI'>KOTA CIMAHI</option><option value='KOTA CIREBON'>KOTA CIREBON</option><option value='KOTA DEPOK'>KOTA DEPOK</option><option value='KOTA SUKABUMI'>KOTA SUKABUMI</option><option value='KOTA TASIKMALAYA'>KOTA TASIKMALAYA</option>");
        } else if (val == "JAWA TENGAH") {
            $("#kab_kota").html("<option value='KABUPATEN BANJARNEGARA' required>KABUPATEN BANJARNEGARA</option><option value='KABUPATEN BANYUMAS'>KABUPATEN BANYUMAS</option><option value='KABUPATEN BATANG'>KABUPATEN BATANG</option><option value='KABUPATEN BLORA'>KABUPATEN BLORA</option><option value='KABUPATEN BOYOLALI'>KABUPATEN BOYOLALI</option><option value='KABUPATEN BREBES'>KABUPATEN BREBES</option><option value='KABUPATEN CILACAP'>KABUPATEN CILACAP</option><option value='KABUPATEN DEMAK'>KABUPATEN DEMAK</option><option value='KABUPATEN GROBOGAN'>KABUPATEN GROBOGAN</option><option value='KABUPATEN JEPARA'>KABUPATEN JEPARA</option>\<option value='KABUPATENG KARANGANYAR'>KABUPATENG KARANGANYAR</option><option value='KABUPATEN KEBUMEN'>KABUPATEN KEBUMEN</option><option value='KABUPATEN KENDAL'>KABUPATEN KENDAL</option><option value='KABUPATEN KLATEN'>KABUPATEN KLATEN</option><option value='KABUPATEN KUDUS'>KABUPATEN KUDUS</option><option value='KABUPATEN MAGELANG'>KABUPATEN MAGELANG</option><option value='KABUPATEN PATI'>KABUPATEN PATI</option><option value='KABUPATEN PEKALONGAN'>KABUPATEN PEKALONGAN</option><option value='KABUPATEN PEMALANG'>KABUPATEN PEMALANG</option><option value='KABUPATEN PURBALINGGA'>KABUPATEN PURBALINGGA</option>\<option value='KABUPATEN PURWOREJO'>KABUPATEN PURWOREJO</option><option value='KABUPATEN REMBANG'>KABUPATEN REMBANG</option><option value='KABUPATEN SEMARANG'>KABUPATEN SEMARANG</option><option value='KABUPATEN SRAGEN'>KABUPATEN SRAGEN</option><option value='KABUPATEN SUKOHARJO'>KABUPATEN SUKOHARJO</option><option value='KABUPATEN TEGAL'>KABUPATEN TEGAL</option><option value='KABUPATEN TEMANGGUNG'>KABUPATEN TEMANGGUNG</option><option value='KABUPATEN WONOGIRI'>KABUPATEN WONOGIRI</option><option value='KABUPATEN WONOSOBO'>KABUPATEN WONOSOBO</option><option value='KOTA MAGELANG'>KOTA MAGELANG</option>\<option value='KOTA PEKALONGAN'>KOTA PEKALONGAN</option><option value='KOTA SALATIGA'>KOTA SALATIGA</option><option value='KOTA SEMARANG'>KOTA SEMARANG</option><option value='KOTA SURAKARTA'>KOTA SURAKARTA</option><option value='KOTA TEGAL'>KOTA TEGAL</option>");
        } else if (val == "JAWA TIMUR") {
            $("#kab_kota").html("<option value='KABUPATEN BENGKALANG' required>KABUPATEN BENGKALANG</option><option value='KABUPATEN BANYUWANGI'>KABUPATEN BANYUWANGI</option><option value='KABUPATEN BLITAR'>KABUPATEN BLITAR</option><option value='KABUPATEN BOJONEGORO'>KABUPATEN BOJONEGORO</option><option value='KABUPATEN BONDOWOSO'>KABUPATEN BONDOWOSO</option><option value='KABUPATEN GRESIK'>KABUPATEN GRESIK</option><option value='KABUPATEN JEMBER'>KABUPATEN JEMBER</option><option value='KABUPATEN JOMBANG'>KABUPATEN JOMBANG</option><option value='KABUPATEN KEDIRI'>KABUPATEN KEDIRI</option><option value='KABUPATEN LAMONGAN'>KABUPATEN LAMONGAN</option><option value='KABUPATEN LUMAJANG'>KABUPATEN LUMAJANG</option><option value='KABUPATEN MADIUN'>KABUPATEN MADIUN</option><option value='KABUPATEN MAGETAN'>KABUPATEN MAGETAN</option><option value='KABUPATEN MALANG'>KABUPATEN MALANG</option><option value='KABUPATEN MOJOKERTO'>KABUPATEN MOJOKERTO</option><option value='KABUPATEN NGANJUK'>KABUPATEN NGANJUK</option><option value='KABUPATEN NGAWI'>KABUPATEN NGAWI</option><option value='KABUPATEN PACITAN'>KABUPATEN PACITAN</option><option value='KABUPATEN PAMEKASAN'>KABUPATEN PAMEKASAN</option><option value='KABUPATEN PASURUAN'>KABUPATEN PASURUAN</option><option value='KABUPATEN PONOROGO'>KABUPATEN PONOROGO</option><option value='KABUPATEN PROBOLINGGO'>KABUPATEN PROBOLINGGO</option><option value='KABUPATEN SAMPANG'>KABUPATEN SAMPANG</option><option value='KABUPATEN SIDOARJO'>KABUPATEN SIDOARJO</option><option value='KABUPATEN SITUBONDO'>KABUPATEN SITUBONDO</option><option value='KABUPATEN SUMENEP'>KABUPATEN SUMENEP</option><option value='KABUPATEN TRENGGALEK'>KABUPATEN TRENGGALEK</option><option value='KABUPATEN TUBAN'>KABUPATEN TUBAN</option><option value='KABUPATEN TULUNGAGUNG'>KABUPATEN TULUNGAGUNG</option><option value='KOTA BATU'>KOTA BATU</option><option value='KOTA BLITAR'>KOTA BLITAR</option><option value='KOTA KEDIRI'>KOTA KEDIRI</option><option value='KOTA MADIUN'>KOTA MADIUN</option><option value='KOTA MALANG'>KOTA MALANG</option><option value='KOTA MOJOKERTO'>KOTA MOJOKERTO</option><option value='KOTA PASURUAN'>KOTA PASURUAN</option><option value='KOTA PROBOLINGGO'>KOTA PROBOLINGGO</option><option value='KOTA SURABAYA'>KOTA SURABAYA</option>");
        } else if (val == "KALIMANTAN BARAT") {
            $("#kab_kota").html("<option value='KABUPATEN BENGKAYANG' required>KABUPATEN BENGKAYANG</option><option value='KABUPATEN BENGKUAS HULU'>KABUPATEN BENGKUAS HULU</option><option value='KABUPATEN KAYONG UTARA'>KABUPATEN KAYONG UTARA</option><option value='KABUPATEN KETAPANG'>KABUPATEN KETAPANG</option><option value='KABUPATEN KUBU RAYA'>KABUPATEN KUBU RAYA</option><option value='KABUPATEN LANDAK'>KABUPATEN LANDAK</option><option value='KABUPATEN MELAWI'>KABUPATEN MELAWI</option><option value='KABUPATEN MEMPAWAH'>KABUPATEN MEMPAWAH</option><option value='KABUPATEN SAMBAS'>KABUPATEN SAMBAS</option><option value='KABUPATEN SANGGAU'>KABUPATEN SANGGAU</option><option value='KABUPATEN SEKADAU'>KABUPATEN SEKADAU</option><option value='KABUPATEN SINTANG'>KABUPATEN SINTANG</option><option value='KOTA PONTIANAK'>KOTA PONTIANAK</option><option value='KOTA SINGKAWANG'>KOTA SINGKAWANG</option>");
        } else if (val == "KALIMANTAN SELATAN") {
            $("#kab_kota").html("<option value='KABUPATEN BALANGAN' required>KABUPATEN BALANGAN</option><option value='KABUPATEN BANJAR'>KABUPATEN BANJAR</option><option value='KABUPATEN BARITO KUALA'>KABUPATEN BARITO KUALA</option><option value='KABUPATEN HULU SUNGAI SELATAN'>KABUPATEN HULU SUNGAI SELATAN</option><option value='KABUPATEN HULU SUNGAI TENGAH'>KABUPATEN HULU SUNGAI TENGAH</option><option value='KABUPATEN HULU SUNGAI UTARA'>KABUPATEN HULU SUNGAI UTARA</option><option value='KABUPATEN KOTABARU'>KABUPATEN KOTABARU</option><option value='KABUPATEN TABALONG'>KABUPATEN TABALONG</option><option value='KABUPATEN TANAH BUMBU'>KABUPATEN TANAH BUMBU</option><option value='KABUPATEN TANAH LAUT'>KABUPATEN TANAH LAUT</option><option value='KABUPATEN TAPIN'>KABUPATEN TAPIN</option><option value='KOTA BANJARBARU'>KOTA BANJARBARU</option><option value='KOTA BANJARMASIN'>KOTA BANJARMASIN</option>");
        } else if (val == "KALIMANTAN TENGAH") {
            $("#kab_kota").html("<option value='KABUPATEN BARITO SELATAN'>KABUPATEN BARITO SELATAN</option><option value='KABUPATEN BARITO TIMUR'>KABUPATEN BARITO TIMUR</option><option value='KABUPATEN BARITO UTARA'>KABUPATEN BARITO UTARA</option><option value='KABUPATEN GUNUNG MAS'>KABUPATEN GUNUNG MAS</option><option value='KABUPATEN KAPUAS'>KABUPATEN KAPUAS</option><option value='KABUPATEN KATINGAN'>KABUPATEN KATINGAN</option><option value='KABUPATEN KOTAWARINGIN BARAT'>KABUPATEN KOTAWARINGIN BARAT</option><option value='KABUPATEN KOTAWARINGIN TIMUR'>KABUPATEN KOTAWARINGIN TIMUR</option><option value='KABUPATEN LAMANDAU'>KABUPATEN LAMANDAU</option><option value='KABUPATEN MURUNG RAYA'>KABUPATEN MURUNG RAYA</option><option value='KABUPATEN PULANG PISANG'>KABUPATEN PULANG PISANG</option><option value='KABUPATEN SUKAMARA'>KABUPATEN SUKAMARA</option><option value='KABUPATEN SERUYAN'>KABUPATEN SERUYAN</option><option value='KABUPATEN PALANGKA RAYA'>KABUPATEN PALANGKA RAYA</option>");
        } else if (val == "KALIMANTAN TIMUR") {
            $("#kab_kota").html("<option value='KABUPATEN BERAU'>KABUPATEN BERAU</option><option value='KABUPATEN KUTAI BARAT'>KABUPATEN KUTAI BARAT</option><option value='KABUPATEN KUTAI KARTANEGARA'>KABUPATEN KUTAI KARTANEGARA</option><option value='KABUPATEN KUTAI TIMUR'>KABUPATEN KUTAI TIMUR</option><option value='KABUPATEN MAHAKAM ULU'>KABUPATEN MAHAKAM ULU</option><option value='KABUPATEN PASER'>KABUPATEN PASER</option><option value='KABUPATEN PENAJAMA PASER UTARA'>KABUPATEN PENAJAMA PASER UTARA</option><option value='KABUPATEN BALIKPAPAN'>KABUPATEN BALIKPAPAN</option><option value='KOTA BONTANG'>KOTA BONTANG</option><option value='KOTA SAMARINDA'>KOTA SAMARINDA</option>");
        } else if (val == "KALIMANTAN UTARA") {
            $("#kab_kota").html("<option value='KABUPATEN BULUNGAN'>KABUPATEN BULUNGAN</option><option value='KABUPATEN MALINAU'>KABUPATEN MALINAU</option><option value='KABUPATEN NUNUKAN'>KABUPATEN NUNUKAN</option><option value='KABUPATEN TANA TIDUNG'>KABUPATEN TANA TIDUNG</option><option value='KOTA TARAKAN'>KOTA TARAKAN</option>");
        } else if (val == "KEPULAUAN BANGKA BELITUNG") {
            $("#kab_kota").html("<option value='KABUPATEN BANGKA'>KABUPATEN BANGKA</option><option value='KABUPATEN BANGKA BARAT'>KABUPATEN BANGKA BARAT</option><option value='KABUPATEN BANGKA SELATAN'>KABUPATEN BANGKA SELATAN</option><option value='KABUPATEN BANGKA TENGAH'>KABUPATEN BANGKA TENGAH</option><option value='KABUPATEN BELITUNG'>KABUPATEN BELITUNG</option><option value='KABUPATEN BELITUNG TIMUR'>KABUPATEN BELITUNG TIMUR</option><option value='KOTA PANGKAL PINANG'>KOTA PANGKAL PINANG</option>");
        } else if (val == "KEPULAUAN RIAU") {
            $("#kab_kota").html("<option value='KABUPATEN BINTAN KEPULAUAN'>KABUPATEN BINTAN KEPULAUAN</option><option value='KABUPATEN KARIMUN'>KABUPATEN KARIMUN</option><option value='KABUPATEN KEPULAUAN ANAMBAS'>KABUPATEN KEPULAUAN ANAMBAS</option><option value='KABUPATEN LINGGA'>KABUPATEN LINGGA</option><option value='KABUPATEN NATUNA'>KABUPATEN NATUNA</option><option value='KOTA BATAM'>KOTA BATAM</option><option value='KOTA TANJUNG PINANG'>KOTA TANJUNG PINANG</option>");
        } else if (val == "LAMPUNG") {
            $("#kab_kota").html("<option value='KABUPATEN LAMPUNG BARAT'>KABUPATEN LAMPUNG BARAT</option><option value='KABUPATEN LAMPUNG SELATAN'>KABUPATEN LAMPUNG SELATAN</option><option value='KABUPATEN LAMPUNG TENGAH'>KABUPATEN LAMPUNG TENGAH</option><option value='KABUPATEN LAMPUNG TIMUR'>KABUPATEN LAMPUNG TIMUR</option><option value='KABUPATEN LAMPUNG UTARA'>KABUPATEN LAMPUNG UTARA</option><option value='KABUPATEN MESUJI'>KABUPATEN MESUJI</option><option value='KABUPATEN PESAWARAN'>KABUPATEN PESAWARAN</option><option value='KABUPATEN PESISIR BARAT'>KABUPATEN PESISIR BARAT</option><option value='KABUPATEN PRINGSEWU'>KABUPATEN PRINGSEWU</option><option value='KABUPATEN TANGGAMUS'>KABUPATEN TANGGAMUS</option><option value='KABUPATEN TULANG BAWANG'>KABUPATEN TULANG BAWANG</option><option value='KABUPATEN TULANG BAWANG BARAT'>KABUPATEN TULANG BAWANG BARAT</option><option value='KABUPATEN WAY KANAN'>KABUPATEN WAY KANAN</option><option value='KOTA BANDAR LAMPUNG'>KOTA BANDAR LAMPUNG</option><option value='KOTA METRO'>KOTA METRO</option>");
        } else if (val == "MALUKU") {
            $("#kab_kota").html("<option value='KABUPATEN BURU'>KABUPATEN BURU</option><option value='KABUPATEN BURU SELATAN'>KABUPATEN BURU SELATAN</option><option value='KABUPATEN KEPULAUAN ARU'>KABUPATEN KEPULAUAN ARU</option><option value='KABUPATEN MALUKU BARAT DAYA'>KABUPATEN MALUKU BARAT DAYA</option><option value='KEPULAUAN MALUKU TENGAH'>KEPULAUAN MALUKU TENGAH</option><option value='KEPULAUAN MALUKU TENGGARA'>KEPULAUAN MALUKU TENGGARA</option><option value='KEPULAUAN MALUKU TENGGARA BARAT'>KEPULAUAN MALUKU TENGGARA BARAT</option><option value='KEPULAUAN SERAM BAGIAN BARAT'>KEPULAUAN SERAM BAGIAN BARAT</option><option value='KEPULAUAN SERAM BAGIAN TIMUR'>KEPULAUAN SERAM BAGIAN TIMUR</option><option value='KOTA AMBON'>KOTA AMBON</option><option value='KOTA TUAL'>KOTA TUAL</option>");
        } else if (val == "MALUKU UTARA") {
            $("#kab_kota").html("<option value='KABUPATEN HALMAHERA BARAT'>KABUPATEN HALMAHERA BARAT</option><option value='KABUPATEN HALMAHERA TENGAH'>KABUPATEN HALMAHERA TENGAH</option><option value='KABUPATEN HALMAHERA TIMUR'>KABUPATEN HALMAHERA TIMUR</option><option value='KABUPATEN HALMAHERA SELATAN'>KABUPATEN HALMAHERA SELATAN</option><option value='KABUPATEN HALMAHERA UTARA'>KABUPATEN HALMAHERA UTARA</option><option value='KABUPATEN KEPULAUAN SULA'>KABUPATEN KEPULAUAN SULA</option><option value='KABUPATEN PULAU MOROTAI'>KABUPATEN PULAU MOROTAI</option><option value='KABUPATEN PULAU TALIABU'>KABUPATEN PULAU TALIABU</option><option value='KOTA TERNATE'>KOTA TERNATE</option><option value='KOTA TIDORE KEPULAUAN'>KOTA TIDORE KEPULAUAN</option>");
        } else if (val == "NUSA TENGGARA BARAT") {
            $("#kab_kota").html("<option value='KABUPATEN BIMA'>KABUPATEN BIMA</option><option value='KABUPATEN DOMPU'>KABUPATEN DOMPU</option><option value='KABUPATEN LOMBOK BARAT'>KABUPATEN LOMBOK BARAT</option><option value='KABUPATEN LOMBOK TENGAH'>KABUPATEN LOMBOK TENGAH</option><option value='KABUPATEN LOMBOK TIMUR'>KABUPATEN LOMBOK TIMUR</option><option value='KABUPATEN LOMBOK UTARA'>KABUPATEN LOMBOK UTARA</option><option value='KABUPATEN SUMBAWA'>KABUPATEN SUMBAWA</option><option value='KABUPATEN SUMBAWA BARAT'>KABUPATEN SUMBAWA BARAT</option><option value='KOTA BIMA'>KOTA BIMA</option><option value='KOTA MATARAM'>KOTA MATARAM</option>");
        } else if (val == "NUSA TENGGARA TIMUR") {
            $("#kab_kota").html("<option value='KABUPATEN ALOR'>KABUPATEN ALOR</option><option value='KABUPATEN BELU'>KABUPATEN BELU</option><option value='KABUPATEN ENDE'>KABUPATEN ENDE</option><option value='KABUPATEN FLORES TIMUR'>KABUPATEN FLORES TIMUR</option><option value='KABUPATEN KUPANG'>KABUPATEN KUPANG</option><option value='KABUPATEN LEMBATA'>KABUPATEN LEMBATA</option><option value='KABUPATEN MALAKA'>KABUPATEN MALAKA</option><option value='KABUPATEN MANGGARAI'>KABUPATEN MANGGARAI</option><option value='KABUPATEN MANGGARAI BARAT'>KABUPATEN MANGGARAI BARAT</option><option value='KABUPATEN MANGGARAI TIMUR'>KABUPATEN MANGGARAI TIMUR</option><option value='KABUPATEN NGADA'>KABUPATEN NGADA</option><option value='KABUPATEN NAGEKEO'>KABUPATEN NAGEKEO</option><option value='KABUPATEN ROTE NDAO'>KABUPATEN ROTE NDAO</option><option value='KABUPATEN SABU RAIJUA'>KABUPATEN SABU RAIJUA</option><option value='KABUPATEN SIKKA'>KABUPATEN SIKKA</option><option value='KABUPATEN SUMBA BARAT'>KABUPATEN SUMBA BARAT</option><option value='KABUPATEN SUMBA BARAT DAYA'>KABUPATEN SUMBA BARAT DAYA</option><option value='KABUPATEN SUMBA TENGAH'>KABUPATEN SUMBA TENGAH</option><option value='KABUPATEN SUMBA TIMUR'>KABUPATEN SUMBA TIMUR</option><option value='KABUPATEN TIMOR TENGAH SELATAN'>KABUPATEN TIMOR TENGAH SELATAN</option><option value='KABUPATEN TIMOR TENGAH UTARA'>KABUPATEN TIMOR TENGAH UTARA</option><option value='KOTA KUPANG'>KOTA KUPANG</option>");
        } else if (val == "PAPUA") {
            $("#kab_kota").html("<option value='KABUPATEN ASMAT'>KABUPATEN ASMAT</option><option value='KABUPATEN BIAK NUMFOR'>KABUPATEN BIAK NUMFOR</option><option value='KABUPATEN BOVEN DIGOEL'>KABUPATEN BOVEN DIGOEL</option><option value='KABUPATEN DEIYAI'>KABUPATEN DEIYAI</option><option value='KABUPATEN DOGIYAI'>KABUPATEN DOGIYAI</option><option value='KABUPATEN INTAN JAYA'>KABUPATEN INTAN JAYA</option><option value='KABUPATEN JAYAPURA'>KABUPATEN JAYAPURA</option><option value='KABUPATEN JAYAWIJAYA'>KABUPATEN JAYAWIJAYA</option><option value='KABUPATEN KEEROM'>KABUPATEN KEEROM</option><option value='KABUPATEN KEPULAUAN YAPEN'>KABUPATEN KEPULAUAN YAPEN</option><option value='KABUPATEN LANNY JAYA'>KABUPATEN LANNY JAYA</option><option value='KABUPATEN MAMBERAMO RAYA'>KABUPATEN MAMBERAMO RAYA</option><option value='KABUPATEN MAMBERAMO TENGAH'>KABUPATEN MAMBERAMO TENGAH</option><option value='KABUPATEN MAPPI'>KABUPATEN MAPPI</option><option value='KABUPATEN MERAUKE'>KABUPATEN MERAUKE</option><option value='KABUPATEN MIMIKA'>KABUPATEN MIMIKA</option><option value='KABUPATEN NABIRE'>KABUPATEN NABIRE</option><option value='KABUPATEN NDUGA'>KABUPATEN NDUGA</option><option value='KABUPATEN PANIAI'>KABUPATEN PANIAI</option><option value='KABUPATEN PEGUNUNGAN BINTANG'>KABUPATEN PEGUNUNGAN BINTANG</option><option value='KABUPATEN PUNCAK'>KABUPATEN PUNCAK</option><option value='KABUPATEN PUNCAK JAYA'>KABUPATEN PUNCAK JAYA</option><option value='KABUPATEN SARMI'>KABUPATEN SARMI</option><option value='KABUPATEN SUPIORI'>KABUPATEN SUPIORI</option><option value='KABUPATEN TOLIKARA'>KABUPATEN TOLIKARA</option><option value='KABUPATEN WAROPEN'>KABUPATEN WAROPEN</option><option value='KABUPATEN YAHUKIMO'>KABUPATEN YAHUKIMO</option><option value='KABUPATEN YALIMO'>KABUPATEN YALIMO</option><option value='KOTA JAYAPURA'>KOTA JAYAPURA</option>");
        } else if (val == "PAPUA BARAT") {
            $("#kab_kota").html("<option value='KABUPATEN FAKFAK'>KABUPATEN FAKFAK</option><option value='KABUPATEN KAIMANA'>KABUPATEN KAIMANA</option><option value='KABUPATEN MANOKWARI'>KABUPATEN MANOKWARI</option><option value='KABUPATEN MANOKWARI SELATAN'>KABUPATEN MANOKWARI SELATAN</option><option value='KABUPATEN MAYBRAT'>KABUPATEN MAYBRAT</option><option value='KABUPATEN PEGUNUNGAN ARFAK'>KABUPATEN PEGUNUNGAN ARFAK</option><option value='KABUPATEN RAJA AMPAT'>KABUPATEN RAJA AMPAT</option><option value='KABUPATEN SORONG'>KABUPATEN SORONG</option><option value='KABUPATEN SORONG SELATAN'>KABUPATEN SORONG SELATAN</option><option value='KABUPATEN TAMBRAUW'>KABUPATEN TAMBRAUW</option><option value='KABUPATEN TELUK BINTUNI'>KABUPATEN TELUK BINTUNI</option><option value='KABUPATEN TELUK WONDAMA'>KABUPATEN TELUK WONDAMA</option><option value='KOTA SORONG'>KOTA SORONG</option>");
        } else if (val == "RIAU") {
            $("#kab_kota").html("<option value='KABUPATEN BENGKALIS'>KABUPATEN BENGKALIS</option><option value='KABUPATEN INDRAGIRI HILIR'>KABUPATEN INDRAGIRI HILIR</option><option value='KABUPATEN INDRAGIRI HULU'>KABUPATEN INDRAGIRI HULU</option><option value='KABUPATEN KAMPAR'>KABUPATEN KAMPAR</option><option value='KABUPATEN KEPULAUAN MERANTI'>KABUPATEN KEPULAUAN MERANTI</option><option value='KABUPATEN KUANTAN SINGINGI'>KABUPATEN KUANTAN SINGINGI</option><option value='KABUPATEN PELALAWAN'>KABUPATEN PELALAWAN</option><option value='KABUPATEN ROKAN HILIR'>KABUPATEN ROKAN HILIR</option><option value='KABUPATEN ROKAN HULU'>KABUPATEN ROKAN HULU</option><option value='KABUPATEN SIAK'>KABUPATEN SIAK</option><option value='KOTA DUMAI'>KOTA DUMAI</option><option value='KOTA PEKANBARU'>KOTA PEKANBARU</option>");
        } else if (val == "SULAWESI BARAT") {
            $("#kab_kota").html("<option value='KABUPATEN MAJENE'>KABUPATEN MAJENE</option><option value='KABUPATEN MAMASA'>KABUPATEN MAMASA</option><option value='KABUPATEN MAMUJU'>KABUPATEN MAMUJU</option><option value='KABUPATEN MAMUJU TENGAH'>KABUPATEN MAMUJU TENGAH</option><option value='KABUPATEN MAMUJU UTARA'>KABUPATEN MAMUJU UTARA</option><option value='KABUPATEN POLEWALI MANDAR'>KABUPATEN POLEWALI MANDAR</option>");
        } else if (val == "SULAWESI SELATAN") {
            $("#kab_kota").html("<option value='KABUPATEN BANTAENG'>KABUPATEN BANTAENG</option><option value='KABUPATEN BARRU'>KABUPATEN BARRU</option><option value='KABUPATEN BONE'>KABUPATEN BONE</option><option value='KABUPATEN BULUKUMBA'>KABUPATEN BULUKUMBA</option><option value='KABUPATEN ENREKANG'>KABUPATEN ENREKANG</option><option value='KABUPATEN GOWA'>KABUPATEN GOWA</option><option value='KABUPATEN JENEPONTO'>KABUPATEN JENEPONTO</option><option value='KABUPATEN KEPULAUAN SELAYAR'>KABUPATEN KEPULAUAN SELAYAR</option><option value='KABUPATEN LUWU'>KABUPATEN LUWU</option><option value='KABUPATEN LUWU TIMUR'>KABUPATEN LUWU TIMUR</option><option value='KABUPATEN LUWU UTARA'>KABUPATEN LUWU UTARA</option><option value='KABUPATEN MAROS'>KABUPATEN MAROS</option><option value='KABUPATEN PANGKAJENE DAN KEPULAUAN'>KABUPATEN PANGKAJENE DAN KEPULAUAN</option><option value='KABUPATEN PINRANG'>KABUPATEN PINRANG</option><option value='KABUPATEN SIDENRENG RAPPANG'>KABUPATEN SIDENRENG RAPPANG</option><option value='KABUPATEN SINJAI'>KABUPATEN SINJAI</option><option value='KABUPATEN SOPPENG'>KABUPATEN SOPPENG</option><option value='KABUPATEN TAKALAR'>KABUPATEN TAKALAR</option><option value='KABUPATEN TANA TORAJA'>KABUPATEN TANA TORAJA</option><option value='KABUPATEN TORAJA UTARA'>KABUPATEN TORAJA UTARA</option><option value='KABUPATEN WAJO'>KABUPATEN WAJO</option><option value='KOTA MAKASSAR'>KOTA MAKASSAR</option><option value='KOTA PALOPO'>KOTA PALOPO</option><option value='KOTA PAREPARE'>KOTA PAREPARE</option>");
        } else if (val == "SULAWESI TENGAH") {
            $("#kab_kota").html("<option value='KABUPATEN BANGGAI'>KABUPATEN BANGGAI</option><option value='KABUPATEN BANGGAI KEPULAUAN'>KABUPATEN BANGGAI KEPULAUAN</option><option value='KABUPATEN BANGGAI LAUT'>KABUPATEN BANGGAI LAUT</option><option value='KABUPATEN BUOL'>KABUPATEN BUOL</option><option value='KABUPATEN DONGGALA'>KABUPATEN DONGGALA</option><option value='KABUPATEN MOROWALI'>KABUPATEN MOROWALI</option><option value='KABUPATEN MOROWALI UTARA'>KABUPATEN MOROWALI UTARA</option><option value='KABUPATEN PARIGI MOUTONG'>KABUPATEN PARIGI MOUTONG</option><option value='KABUPATEN POSO'>KABUPATEN POSO</option><option value='KABUPATEN SIGI BIROMARU'>KABUPATEN SIGI BIROMARU</option><option value='KABUPATEN TOJO UNA-UNA'>KABUPATEN TOJO UNA-UNA</option><option value='KABUPATEN TOLI-TOLI'>KABUPATEN TOLI-TOLI</option><option value='KOTA PALU'>KOTA PALU</option>");
        } else if (val == "SULAWESI TENGGARA") {
            $("#kab_kota").html("<option value='KABUPATEN BOMBANA'>KABUPATEN BOMBANA</option><option value='KABUPATEN BUTON'>KABUPATEN BUTON</option><option value='KABUPATEN BUTON SELATAN'>KABUPATEN BUTON SELATAN</option><option value='KABUPATEN BUTON TENGAH'>KABUPATEN BUTON TENGAH</option><option value='KABUPATEN BUTON UTARA'>KABUPATEN BUTON UTARA</option><option value='KABUPATEN KOLAKA'>KABUPATEN KOLAKA</option><option value='KABUPATEN KOLAKA TIMUR'>KABUPATEN KOLAKA TIMUR</option><option value='KABUPATEN KOLAKA UTARA'>KABUPATEN KOLAKA UTARA</option><option value='KABUPATEN KONAWE'>KABUPATEN KONAWE</option><option value='KABUPATEN KONAWE KEPULAUAN'>KABUPATEN KONAWE KEPULAUAN</option><option value='KABUPATEN KONAWE SELATAN'>KABUPATEN KONAWE SELATAN</option><option value='KABUPATEN KONAWE UTARA'>KABUPATEN KONAWE UTARA</option><option value='KABUPATEN MUNA'>KABUPATEN MUNA</option><option value='KABUPATEN MUNA BARAT'>KABUPATEN MUNA BARAT</option><option value='KABUPATEN WAKATOBI'>KABUPATEN WAKATOBI</option><option value='KOTA BAU-BAU'>KOTA BAU-BAU</option><option value='KOTA KENDARI'>KOTA KENDARI</option>");
        } else if (val == "SULAWESI UTARA") {
            $("#kab_kota").html("<option value='KABUPATEN BOLAANG MONGONDOW'>KABUPATEN BOLAANG MONGONDOW</option><option value='KABUPATEN BOLAANG MONGONDOW SELATAN'>KABUPATEN BOLAANG MONGONDOW SELATAN</option><option value='KABUPATEN BOLAANG MONGONDOW TIMUR'>KABUPATEN BOLAANG MONGONDOW TIMUR</option><option value='KABUPATEN BOLAANG MONGONDOW UTARA'>KABUPATEN BOLAANG MONGONDOW UTARA</option><option value='KABUPATEN KEPULAUAN SANGIHE'>KABUPATEN KEPULAUAN SANGIHE</option><option value='KABUPATEN KEPULAUAN SIAU TAGULANDANG BIARO'>KABUPATEN KEPULAUAN SIAU TAGULANDANG BIARO</option><option value='KABUPATEN KEPULAUAN TALAUD'>KABUPATEN KEPULAUAN TALAUD</option><option value='KABUPATEN MINAHASA'>KABUPATEN MINAHASA</option><option value='KABUPATEN MINAHASA SELATAN'>KABUPATEN MINAHASA SELATAN</option><option value='KABUPATEN MINAHASA TENGGARA'>KABUPATEN MINAHASA TENGGARA</option><option value='KABUPATEN MINAGASA UTARA'>KABUPATEN MINAGASA UTARA</option><option value='KOTA BITUNG'>KOTA BITUNG</option><option value='KOTA KOTAMOBAGU'>KOTA KOTAMOBAGU</option><option value='KOTA MANADO'>KOTA MANADO</option><option value='KOTA TOMOHON'>KOTA TOMOHON</option>");
        } else if (val == "SUMATERA BARAT") {
            $("#kab_kota").html("<option value='KABUPATEN AGAM'>KABUPATEN AGAM</option><option value='KABUPATEN DHARMASRAYA'>KABUPATEN DHARMASRAYA</option><option value='KABUPATEN KEPULAUAN MENTAWAI'>KABUPATEN KEPULAUAN MENTAWAI</option><option value='KABUPATEN LIMA PULUH KOTA'>KABUPATEN LIMA PULUH KOTA</option><option value='KABUPATEN PADANG PARIAMAN'>KABUPATEN PADANG PARIAMAN</option><option value='KABUPATEN PASAMAN'>KABUPATEN PASAMAN</option><option value='KABUPATEN PASAMAN BARAT'>KABUPATEN PASAMAN BARAT</option><option value='KABUPATEN PESISIR SELATAN'>KABUPATEN PESISIR SELATAN</option><option value='KABUPATEN SIJUNJUNG'>KABUPATEN SIJUNJUNG</option><option value='KABUPATEN SOLOK'>KABUPATEN SOLOK</option><option value='KABUPATEN SOLOK SELATAN'>KABUPATEN SOLOK SELATAN</option><option value='KABUPATEN TANAH DATAR'>KABUPATEN TANAH DATAR</option><option value='KOTA BUKITTINGG'>KOTA BUKITTINGG</option><option value='KOTA PADANG'>KOTA PADANG</option><option value='KOTA PADANGPANJANG'>KOTA PADANGPANJANG</option><option value='KOTA PARIAMAN'>KOTA PARIAMAN</option><option value='KOTA PAYAKUMBUH'>KOTA PAYAKUMBUH</option><option value='KOTA SAWAHLUNTO'>KOTA SAWAHLUNTO</option><option value='KOTA SOLOK'>KOTA SOLOK</option>");
        } else if (val == "SUMATERA SELATAN") {
            $("#kab_kota").html("<option value='KABUPATEN BANYUASIN'>KABUPATEN BANYUASIN</option><option value='KABUPATEN EMPAT LAWANG'>KABUPATEN EMPAT LAWANG</option><option value='KABUPATEN LAHAT'>KABUPATEN LAHAT</option><option value='KABUPATEN MUARA ENIM'>KABUPATEN MUARA ENIM</option><option value='KABUPATEN MUSI BANYUASIN'>KABUPATEN MUSI BANYUASIN</option><option value='KABUPATEN MUSI RAWAS'>KABUPATEN MUSI RAWAS</option><option value='KABUPATEN MUSI RAWAS UTARA'>KABUPATEN MUSI RAWAS UTARA</option><option value='KABUPATEN OGAN ILIR'>KABUPATEN OGAN ILIR</option><option value='KABUPATEN OGAN KOMERING ILIR'>KABUPATEN OGAN KOMERING ILIR</option><option value='KABUPATEN OGAN KOMERING ULU'>KABUPATEN OGAN KOMERING ULU</option><option value='KABUPATEN OGAN KOMERING ULU SELATAN'>KABUPATEN OGAN KOMERING ULU SELATAN</option><option value='KABUPATEN OGAN KOMERING ULU TIMUR'>KABUPATEN OGAN KOMERING ULU TIMUR</option><option value='KABUPATEN PENUKAL ABAB LEMATANG ILIR'>KABUPATEN PENUKAL ABAB LEMATANG ILIR</option><option value='KOTA LUBUKLINGGAU'>KOTA LUBUKLINGGAU</option><option value='KOTA PAGAR ALAM'>KOTA PAGAR ALAM</option><option value='KOTA PALEMBANG'>KOTA PALEMBANG</option><option value='KOTA PRABUMULIH'>KOTA PRABUMULIH</option>");
        } else if (val == "SUMATERA UTARA") {
            $("#kab_kota").html("<option value='KABUPATEN ASAHAN'>KABUPATEN ASAHAN</option><option value='KABUPATEN BATUBARA'>KABUPATEN BATUBARA</option><option value='KABUPATEN DAIRI'>KABUPATEN DAIRI</option><option value='KABUPATEN DELI SERDANG'>KABUPATEN DELI SERDANG</option><option value='KABUPATEN HUMBANG HASUNDUTAN'>KABUPATEN HUMBANG HASUNDUTAN</option><option value='KABUPATEN KARO'>KABUPATEN KARO</option><option value='KABUPATEN LABUHANBATU'>KABUPATEN LABUHANBATU</option><option value='KABUPATEN LABUHANBATU SELATAN'>KABUPATEN LABUHANBATU SELATAN</option><option value='KABUPATEN LABUHANBATU UTARA'>KABUPATEN LABUHANBATU UTARA</option><option value='KABUPATEN LANGKAT'>KABUPATEN LANGKAT</option><option value='KABUPATEN MANDAILING NATAL'>KABUPATEN MANDAILING NATAL</option><option value='KABUPATEN NIAS'>KABUPATEN NIAS</option><option value='KABUPATEN NIAS BARAT'>KABUPATEN NIAS BARAT</option><option value='KABUPATEN NIAS SELATAN'>KABUPATEN NIAS SELATAN</option><option value='KABUPATEN NIAS UTARA'>KABUPATEN NIAS UTARA</option><option value='KABUPATEN PADANG LAWAS'>KABUPATEN PADANG LAWAS</option><option value='KABUPATEN PADANG LAWAS UTARA'>KABUPATEN PADANG LAWAS UTARA</option><option value='KABUPATEN PAKPAK BHARAT'>KABUPATEN PAKPAK BHARAT</option><option value='KABUPATEN SAMOSIR'>KABUPATEN SAMOSIR</option><option value='KABUPATEN SERDANG BEDAGAI'>KABUPATEN SERDANG BEDAGAI</option><option value='KABUPATEN SIMALUNGUN'>KABUPATEN SIMALUNGUN</option><option value='KABUPATEN TAPANULI SELATAN'>KABUPATEN TAPANULI SELATAN</option><option value='KABUPATEN TAPANULI TENGAH'>KABUPATEN TAPANULI TENGAH</option><option value='KABUPATEN TAPANULI UTARA'>KABUPATEN TAPANULI UTARA</option><option value='KABUPATEN TOBA SAMOSIR'>KABUPATEN TOBA SAMOSIR</option><option value='KOTA BINJAI'>KOTA BINJAI</option><option value='KOTA GUNUNGSITOLI'>KOTA GUNUNGSITOLI</option><option value='KOTA MEDAN'>KOTA MEDAN</option><option value='KOTA PADANGSIDEMPUAN'>KOTA PADANGSIDEMPUAN</option><option value='KOTA PEMATANGSIANTAR'>KOTA PEMATANGSIANTAR</option><option value='KOTA SIBOLGA'>KOTA SIBOLGA</option><option value='KOTA TANJUNGBALAI'>KOTA TANJUNGBALAI</option><option value='KOTA TEBING TINGGI'>KOTA TEBING TINGGI</option>");
        } else {
            $("#kab_kota").html("<option value=''>-- PILIH SATU --</option>");
        }
    });
});