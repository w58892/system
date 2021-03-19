<?php
echo '<?xml version="1.0" encoding="iso-8859-2"?>';
?>
<html>
    <head>
        <title>Upload plików w PHP</title>
        <meta charset="utf-8">
        <link rel="stylesheet" type="text/css" href="css/admin.css" />
    </head>
    <body>

    <header>
  <a id="href" href="index.php">Strona główna</a>
          <nav>
              <?php
              require_once 'config.php';
              session_start();
            
              if(!isset($_SESSION['admin']))
              header("Location: index.php");
?>
                <a id="href" href="logout.php">Wyloguj</a>
          </nav>
        </header>




    <h1>Modyfikuj zestawy komputerowe</h1>
    

    <div id="computer">
        
    <label id="labelID">ID
        <div class="divID">
        <input type="text" id="computerID" class="ID"  placeholder="ID">
        <input type="button" id="btn_computerID"  class="ID" value="komputer">

        <input type="text" id="ID" name="ID" value="ID"  class="ID" placeholder="ID" disabled >
        </div>
    </label>

        <label id="labelProcesor">
        Procesor
        <input type="text" id="Procesor" placeholder="Procesor">
        <div>
            </div><div id="errorProcesor"></div>
        </label>
    

        <label id="labelProcesorURL">
            Link do procesora
            <input type="text" id="ProcesorURL" placeholder="Link do procesora">
            <div>
            </div>
            <div id="errorProcesorURL"></div>
        </label>

        <label id="labelMotherboard">
            Płyta główna
            <input type="text" id="Motherboard" placeholder="Płyta główna">
            <div>
            </div>
            <div id="errorMotherboard"></div>
        </label>

        <label id="labelMotherboardURL">
        Link do płyty głównej
            <input type="text" id="MotherboardURL" placeholder="Link do płyty głównej">
            <div>
            </div>
            <div id="errorMotherboardURL"></div>
        </label>

        <label id="labelGraphic">
            Karta graficzna
            <input type="text" id="Graphic" placeholder="Karta graficzna">
            <div>
            </div>
            <div id="errorGraphic"></div>
        </label>

        <label id="labelGraphicURL">
        Link do karty graficznej
            <input type="text" id="GraphicURL" placeholder="Link do karty graficznej">
            <div>
            </div>
            <div id="errorGraphicURL"></div>
        </label>

        <label id="labelRAM">
            RAM
            <input type="text" id="RAM" placeholder="RAM">
            <div>
            </div>
            <div id="errorRAM"></div>
        </label>

        <label id="labelRAMURL">
        Link do RAMu
            <input type="text" id="RAMURL" placeholder="Link do RAMu">
            <div>
            </div>
            <div id="errorRAMURL"></div>
        </label>

        <label id="labelDisc">
            Dysk
            <input type="text" id="Disc" placeholder="Dysk">
            <div>
            </div>
            <div id="errorDisc"></div>
        </label>

        <label id="labelDiscURL">
        Link do dysku
            <input type="text" id="DiscURL" placeholder="Link do dysku">
            <div>
            </div>
            <div id="errorDiscURL"></div>
        </label>

        <label id="labelPSU">
            Zasialcz
            <input type="text" id="PSU" placeholder="Zasialcz">
            <div>
            </div>
            <div id="errorPSU"></div>
        </label>
        <label id="labelPSUURL">
        Link do zasilacza
            <input type="text" id="PSUURL" placeholder="Link do zasilacza">
            <div>
            </div>
            <div id="errorPSUURL"></div>
        </label>

        
        <label id="labelPrice">
            Cena
            <input type="text" id="Price" placeholder="Cena">
            <div>
            </div>
            <div id="errorPrice"></div>
        </label>
            <input type="button" id="btn_update" class="send" value="Modyfikuj">

    </div>











        <script src="upload.js"></script>

    </body>
</html>
