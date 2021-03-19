document.getElementById("home").checked == false;
document.getElementById("office").checked == false;
document.getElementById("what-row").hidden = true;
document.getElementById("game-row").hidden = true;
document.getElementById("resolution-row").hidden = true;
document.getElementById("FPS-row").hidden = true;
document.getElementById("graphic-row").hidden = true;
document.getElementById("submit").hidden = true;

document.getElementById("home").addEventListener("click",
  function () {
    if (document.getElementById("games").checked == false && document.getElementById("multimedia").checked == false) {

      document.getElementById("what-row").hidden = false;
      document.getElementById("games-label").style.display = "inline-block";
      document.getElementById("multimedia-label").style.display = "inline-block";
      document.getElementById("office-label").style.display = "none";
      document.getElementById("graphic-label").style.display = "none";
      document.getElementById("game-row").hidden = true;
      document.getElementById("resolution-row").hidden = true;
      document.getElementById("FPS-row").hidden = true;
      document.getElementById("graphic-row").hidden = true;
      document.getElementById("submit").hidden = true;
      document.getElementById("office2").checked = false;
      document.getElementById("graphic").checked = false;
      document.getElementById("picture").checked = false;
      document.getElementById("render").checked = false;
      document.getElementById("modeling").checked = false;
      document.getElementById("movies").checked = false;
    }
  });

document.getElementById("games").addEventListener("click",
  function () {

    if (document.getElementById("FPS").checked == false && document.getElementById("strategy").checked == false && document.getElementById("casual").checked == false) {

      document.getElementById("what-row").hidden = false;
      document.getElementById("game-row").hidden = false;
      document.getElementById("resolution-row").hidden = true;
      document.getElementById("FPS-row").hidden = true;
      document.getElementById("graphic-row").hidden = true;
      document.getElementById("submit").hidden = true;
    }
  });

document.getElementById("FPS").addEventListener("click",
  function () {
    if (document.getElementById("4K").checked == false && document.getElementById("1080p").checked == false) {
      document.getElementById("resolution-row").hidden = false;
    }
  });

document.getElementById("strategy").addEventListener("click",
  function () {
    if (document.getElementById("4K").checked == false && document.getElementById("1080p").checked == false) {

      document.getElementById("resolution-row").hidden = false;
    }
  });

document.getElementById("casual").addEventListener("click",
  function () {
    if (document.getElementById("4K").checked == false && document.getElementById("1080p").checked == false) {

      document.getElementById("resolution-row").hidden = false;
    }
  });

document.getElementById("4K").addEventListener("click",
  function () {
    if (document.getElementById("120").checked == false && document.getElementById("60").checked == false && document.getElementById("30").checked == false) {
      document.getElementById("FPS-row").hidden = false;
    }
  });

document.getElementById("1080p").addEventListener("click",
  function () {
    if (document.getElementById("120").checked == false && document.getElementById("60").checked == false && document.getElementById("30").checked == false) {
      document.getElementById("FPS-row").hidden = false;
    }
  });

document.getElementById("120").addEventListener("click",
  function () {

    document.getElementById("submit").hidden = false;

  });

document.getElementById("60").addEventListener("click",
  function () {

    document.getElementById("submit").hidden = false;

  });

document.getElementById("30").addEventListener("click",
  function () {

    document.getElementById("submit").hidden = false;

  });

document.getElementById("multimedia").addEventListener("click",
  function () {

    document.getElementById("what-row").hidden = false;
    document.getElementById("game-row").hidden = true;
    document.getElementById("resolution-row").hidden = true;
    document.getElementById("FPS-row").hidden = true;
    document.getElementById("graphic-row").hidden = true;
    document.getElementById("submit").hidden = false;
    document.getElementById("FPS").checked = false;
    document.getElementById("strategy").checked = false;
    document.getElementById("casual").checked = false;
    document.getElementById("4K").checked = false;
    document.getElementById("1080p").checked = false;
    document.getElementById("120").checked = false;
    document.getElementById("60").checked = false;
    document.getElementById("30").checked = false;
  });

document.getElementById("office").addEventListener("click",
  function () {

    if (document.getElementById("office2").checked == false && document.getElementById("graphic").checked == false) {

      document.getElementById("what-row").hidden = false;
      document.getElementById("games-label").style.display = "none";
      document.getElementById("multimedia-label").style.display = "none";
      document.getElementById("office-label").style.display = "inline-block";
      document.getElementById("graphic-label").style.display = "inline-block";
      document.getElementById("game-row").hidden = true;
      document.getElementById("resolution-row").hidden = true;
      document.getElementById("FPS-row").hidden = true;
      document.getElementById("graphic-row").hidden = true;
      document.getElementById("submit").hidden = true;
      document.getElementById("games").checked = false;
      document.getElementById("multimedia").checked = false;
      document.getElementById("FPS").checked = false;
      document.getElementById("strategy").checked = false;
      document.getElementById("casual").checked = false;
      document.getElementById("4K").checked = false;
      document.getElementById("1080p").checked = false;
      document.getElementById("120").checked = false;
      document.getElementById("60").checked = false;
      document.getElementById("30").checked = false;

    }
  });

document.getElementById("office2").addEventListener("click",
  function () {

    document.getElementById("graphic-row").hidden = true;
    document.getElementById("submit").hidden = false;
    document.getElementById("picture").checked = false;
    document.getElementById("render").checked = false;
    document.getElementById("modeling").checked = false;
    document.getElementById("movies").checked = false;
  });

document.getElementById("graphic").addEventListener("click",
  function () {
    if (document.getElementById("picture").checked == false && document.getElementById("render").checked == false && document.getElementById("modeling").checked == false && document.getElementById("movies").checked == false) {
      document.getElementById("graphic-row").hidden = false;
      document.getElementById("submit").hidden = true;
    }
  });

document.getElementById("picture").addEventListener("click",
  function () {
    document.getElementById("submit").hidden = false;
  });

document.getElementById("render").addEventListener("click",
  function () {
    document.getElementById("submit").hidden = false;
  });

document.getElementById("modeling").addEventListener("click",
  function () {
    document.getElementById("submit").hidden = false;
  });false

document.getElementById("movies").addEventListener("click",
  function () {
    document.getElementById("submit").hidden = false;
  });