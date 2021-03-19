<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <title>Document</title>
</head>

<body>

    <header>
          <nav>
              <?php
              session_start();
                if (isset($_SESSION['admin'])){  ?>
                <a id="href" href="adminPanel.php">Panel administratora</a>
                <a id="href" href="logout.php">Wyloguj</a>
              <?php }else if(isset($_SESSION['userID'])){ ?>
                <a id="href" href="userPanel.php">Wybrany zestaw</a>
                <a id="href" href="logout.php">Wyloguj</a>
              <?php }else{ ?>
                <a id="href" href="log.php">Zaloguj</a>
              <?php } ?> 
          </nav>
        </header>


    <form name="form" action="result.php" method="post">

        <div class="radio-toolbar">
            <p>Jakie będzie przeznaczenie tego komputera?</p>
            <input type="radio" id="home" value="home" name="place" /><label for="home">Do domu </label>
            <input type="radio" id="office" value="office" name="place" /><label for="office">Do biura</label>

        </div>
        <div id="what-row" class="radio-toolbar">
            <p>Do czego ma służyć?</p>
            <input type="radio" value="games" id="games" name="what" /><label id="games-label" for="games">do
                gier</label>
            <input type="radio" value="multimedia" id="multimedia" name="what" /><label id="multimedia-label"
                for="multimedia">multimedia </label>
            <input type="radio" value="office" id="office2" name="what" /><label id="office-label" for="office2">pakiet
                biurowy </label>
            <input type="radio" value="graphic" id="graphic" name="what" /><label id="graphic-label" for="graphic">do
                obróbki grafiki </label>
        </div>
        <div id="game-row" class="radio-toolbar">
            <p>W jakie gry będziesz grać?</p>
            <input type="radio" value="FPS" id="FPS" name="game" /><label for="FPS">FPS</label>
            <input type="radio" value="strategy" id="strategy" name="game" /><label for="strategy">strategiczne </label>
            <input type="radio" value="casual" id="casual" name="game" /><label for="casual">casualowe </label>
        </div>
        <div id="resolution-row" class="radio-toolbar">
            <p>Z jaką rozdzielczością będziesz grać?</p>
            <input type="radio" value="4K" id="4K" name="resolution" /><label for="4K">4K </label>
            <input type="radio" value="1080p" id="1080p" name="resolution" /><label for="1080p">1080p</label>
        </div>
        <div id="FPS-row" class="radio-toolbar">
            <p>ile FPS wystarczy?</p>
            <input type="radio" value="120" id="120" name="FPS" /><label for="120">120</label>
            <input type="radio" value="60" id="60" name="FPS" /><label for="60">60 </label>
            <input type="radio" value="30" id="30" name="FPS" /><label for="30">30 </label>
        </div>
        <div id="graphic-row" class="radio-toolbar">
            <p>jaka grafika?</p>
            <input type="radio" value="picture" id="picture" name="graphic" /><label for="picture">obróbka zdjęć
            </label>
            <input type="radio" value="render" id="render" name="graphic" /><label for="render">render</label>
            <input type="radio" value="modeling" id="modeling" name="graphic" /><label for="modeling">modelowanie
            </label>
            <input type="radio" value="movies" id="movies" name="graphic" /><label for="movies">montaż filmów </label>
        </div>

        <INPUT id="submit" TYPE="submit" VALUE="Wyślij">

    </form>

    <script src="script.js"></script>

</body>

</html>