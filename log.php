<?php 
session_start();

if(isset($_SESSION['userID']))
header("Location: index.php"); 

require_once("config.php");
require_once("User.php");

?>
<!DOCTYPE html>
<html lang="pl">

<head>

    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

    <title>Wypożyczalnia przyczep kempingowych</title>

    <link rel="stylesheet" href="css/login.css">

</head>

<body>
<nav>
<a href="index.php">Strona główna</a>
<nav>

    <section class="login">
<form>
    <h1>Logowanie</h1>
    <label id="labelEmail">
        <input type="text" id="email" placeholder="Email">
        <div class="error" id="errorEmail"></div>
    </label>
    <label id="labelPassword">
        <input type="password" id="password" placeholder="Hasło">
        <div class="error" id="errorPassword"></div>
    </label>
    <input type="button" id="btn_loguj" class="send" value="Zaloguj">
</form>

<form>
    <h1>Rejestracja</h1>
    <label id="labelEmail">
        <input type="text" id="emailReg" placeholder="Email">
        <div class="error" id="errorEmailReg"></div>
    </label>
    <label id="labelPassword">
        <input type="password" id="passwordReg" placeholder="Hasło">
        <div class="error" id="errorPasswordReg"></div>
    </label>
    <label id="labelPassword2">
        <input type="password" id="passwordReg2" placeholder="Hasło">
        <div class="error" id="errorPasswordReg2"></div>
    </label>
    <input type="button" id="btn_reg" class="send" value="Załóż konto">
</form>
</section>


</body>

<!--<script type="text/javascript" src="JS/skrypt.js"></script>-->
    <script type="text/javascript" src="menu.js"></script>

</html>