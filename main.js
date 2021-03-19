//////////////////////////////////PROCESOR//////////////////////////// 

function procesors() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      document.getElementById("option-menu").innerHTML = xmlhttp.responseText;
      document.getElementById("option-menu").setAttribute('class', 'option-menu');
    }
  };
  xmlhttp.open("GET", "procesors/procesoroptionlist.html", true);
  xmlhttp.send();


  procesorsresponse(null);
}

function procesorsresponse(filter) {
  if (filter == null)
    filter = "";

  var res = document.getElementById('response');
  res.innerHTML = "";
  fetch('procesors/procesors.php' + filter).then(resp => {
    return resp.json();
  }).then(obj => {

    if (obj == "error")
      res.innerHTML = "Brak produktów spełniające kryteria";
    else {

      for (i = 0; i < obj.length; i++) {
        pa = document.createElement('li');
        res.appendChild(pa);
        var a = document.createElement('a');
        a.setAttribute('href', 'procesors/procesors.php?id=' + obj[i].procesorID);
        a.innerHTML = obj[i].producer + " " + obj[i].family + " " + obj[i].model;
        pa.appendChild(a);
        var btn = document.createElement("button");
        btn.value = obj[i].procesorID;
        btn.innerHTML = "Wybierz";
        btn.onclick = function () { onClick = procesor(this.value) };
        pa.appendChild(btn);
        pa.appendChild(document.createElement('br'));

      }
    }
  });

}

function procesor(id) {
  fetch('procesors/procesors.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, 
    body: 'id=' + id
  })
    .then(resp => {
      return resp.json();
    })
    .then((data) => { 

      add = document.getElementById("listProcesor");
      add.innerHTML = "";
      add.classList.add("choosed");
      h3 = document.createElement("h2");
      h3.innerHTML = 'Procesor';
      add.appendChild(h3);
      li = document.createElement("h3");
      li.innerHTML = data[0].producer + ' ' + data[0].family + ' ' + data[0].model;
      li.setAttribute('class', 'chname');
      add.appendChild(li);
      del = document.createElement("input");
      del.type = 'button';
      del.value = 'Usuń';
      del.setAttribute('onCLick', 'dele("listProcesor")');
      add.appendChild(del);
      change = document.createElement("input");
      change.type = 'button';
      change.value = 'Zmień';
      change.setAttribute('onCLick', 'procesors()');
      add.appendChild(change);
    });
}

function procfilter() {
  filter = "";

  if (document.getElementById("i9").checked == true)
    filter += '&i9';

  if (document.getElementById("i7").checked == true)
    filter += '&i7';

  if (document.getElementById("i5").checked == true)
    filter += '&i5';

  if (document.getElementById("i3").checked == true)
    filter += '&i3';

  if (document.getElementById("Xeon").checked == true)
    filter += '&Xeon';

  if (document.getElementById("Pentium").checked == true)
    filter += '&Pentium';

  if (document.getElementById("Celeron").checked == true)
    filter += '&Celeron';

  if (document.getElementById("r9").checked == true)
    filter += '&r9';

  if (document.getElementById("r7").checked == true)
    filter += '&r7';

  if (document.getElementById("r5").checked == true)
    filter += '&r5';

  if (document.getElementById("r3").checked == true)
    filter += '&r3';

  if (document.getElementById("Athlon").checked == true)
    filter += '&Athlon';

  if (document.getElementById("APU").checked == true)
    filter += '&APU';


  if (document.getElementById("1150").checked == true)
    filter += '&1150';

  if (document.getElementById("1150").checked == true)
    filter += '&1150';

  if (document.getElementById("2066").checked == true)
    filter += '&2066';

  if (document.getElementById("3647").checked == true)
    filter += '&3647';

  if (document.getElementById("AM4").checked == true)
    filter += '&AM4';

  if (document.getElementById("AM3+").checked == true)
    filter += '&AM3+';

  if (document.getElementById("FM2+").checked == true)
    filter += '&FM2+';

  if (document.getElementById("FM2").checked == true)
    filter += '&FM2';

  if (document.getElementById("TR4").checked == true)
    filter += '&TR4';


  if (document.getElementById("true").checked == true)
    filter += '&grtrue';

  if (document.getElementById("false").checked == true)
    filter += '&grfalse';


  if (filter != "")
    filter = '?filter' + filter;
  procesorsresponse(filter);
}


////////////////////////////////////MOTHERBOARD////////////////////////////////////
function motherboards() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      document.getElementById("option-menu").innerHTML = xmlhttp.responseText;
      document.getElementById("option-menu").setAttribute('class', 'option-menu');
    }
  };
  xmlhttp.open("GET", "motherboards/motherboardoptionlist.html", true);
  xmlhttp.send();


  motherboardsresponse(null);
}

function motherboardsresponse(filter) {
  if (filter == null)
    filter = "";

  var res = document.getElementById('response');
  res.innerHTML = "";
  fetch('motherboards/motherboards.php' + filter).then(resp => {
    return resp.json();
  }).then(obj => {

    if (obj == "error")
      res.innerHTML = "Brak produktów spełniające kryteria";
    else {

      for (i = 0; i < obj.length; i++) {
        pa = document.createElement('li');
        res.appendChild(pa);
        var a = document.createElement('a');
        a.setAttribute('href', 'motherboards/motherboards.php?id=' + obj[i].motherboardID);
        a.innerHTML = obj[i].producer + " " + obj[i].model;
        pa.appendChild(a);
        var btn = document.createElement("button");
        btn.value = obj[i].motherboardID;
        btn.innerHTML = "Wybierz";
        btn.onclick = function () { onClick = motherboard(this.value) };
        pa.appendChild(btn);
        pa.appendChild(document.createElement('br'));

      }
    }
  });

}

function motherboard(id) {
  fetch('motherboards/motherboards.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, 
    body: 'id=' + id
  })
    .then(resp => {
      return resp.json();
    })
    .then((data) => { 

      add = document.getElementById("listMotherboard");
      add.innerHTML = "";
      add.classList.add("choosed");
      h3 = document.createElement("h2");
      h3.innerHTML = 'Płyta główna';
      add.appendChild(h3);
      li = document.createElement("h3");
      li.innerHTML = data[0].producer + ' ' + data[0].model;
      li.setAttribute('class', 'chname');
      add.appendChild(li);
      del = document.createElement("input");
      del.type = 'button';
      del.value = 'Usuń';
      del.setAttribute('onCLick', 'dele("listMotherboard")');
      add.appendChild(del);
      change = document.createElement("input");
      change.type = 'button';
      change.value = 'Zmień';
      change.setAttribute('onCLick', 'motherboards()');
      add.appendChild(change);
    });
}


function mobofilter() {
  filter = "";

  if (document.getElementById("ASUS").checked == true)
    filter += '&ASUS';

  if (document.getElementById("MSI").checked == true)
    filter += '&MSI';

  if (document.getElementById("Gigabyte").checked == true)
    filter += '&Gigabyte';

  if (document.getElementById("ASRock").checked == true)
    filter += '&ASRock';


  if (document.getElementById("760G").checked == true)
    filter += '&760G';

  if (document.getElementById("A320").checked == true)
    filter += '&A320';

  if (document.getElementById("A68H").checked == true)
    filter += '&A68H';

  if (document.getElementById("B350").checked == true)
    filter += '&B350';

  if (document.getElementById("B450").checked == true)
    filter += '&B450';

  if (document.getElementById("X370").checked == true)
    filter += '&X370';

  if (document.getElementById("X399").checked == true)
    filter += '&X399';

  if (document.getElementById("X470").checked == true)
    filter += '&X470';

  if (document.getElementById("X570").checked == true)
    filter += '&X570';

  if (document.getElementById("865G").checked == true)
    filter += '&865G';

  if (document.getElementById("B150").checked == true)
    filter += '&B150';

  if (document.getElementById("B250").checked == true)
    filter += '&B250';

  if (document.getElementById("B360").checked == true)
    filter += '&B360';

  if (document.getElementById("C232").checked == true)
    filter += '&C232';

  if (document.getElementById("G41").checked == true)
    filter += '&G41';

  if (document.getElementById("H110").checked == true)
    filter += '&H110';

  if (document.getElementById("H270").checked == true)
    filter += '&H270';

  if (document.getElementById("H310").checked == true)
    filter += '&H310';

  if (document.getElementById("H370").checked == true)
    filter += '&H370';

  if (document.getElementById("H81").checked == true)
    filter += '&H81';

  if (document.getElementById("Q170").checked == true)
    filter += '&Q170';

  if (document.getElementById("X299").checked == true)
    filter += '&X299';

  if (document.getElementById("X99").checked == true)
    filter += '&X99';

  if (document.getElementById("Z170").checked == true)
    filter += '&Z170';

  if (document.getElementById("Z270").checked == true)
    filter += '&Z270';

  if (document.getElementById("Z370").checked == true)
    filter += '&Z370';

  if (document.getElementById("Z390").checked == true)
    filter += '&Z390';



  if (document.getElementById("1150").checked == true)
    filter += '&1150';

  if (document.getElementById("1150").checked == true)
    filter += '&1150';

  if (document.getElementById("2066").checked == true)
    filter += '&2066';

  if (document.getElementById("3647").checked == true)
    filter += '&3647';

  if (document.getElementById("AM4").checked == true)
    filter += '&AM4';

  if (document.getElementById("AM3+").checked == true)
    filter += '&AM3+';

  if (document.getElementById("FM2+").checked == true)
    filter += '&FM2+';

  if (document.getElementById("FM2").checked == true)
    filter += '&FM2';

  if (document.getElementById("TR4").checked == true)
    filter += '&TR4';


  if (document.getElementById("ATX").checked == true)
    filter += '&ATX';

  if (document.getElementById("minATX").checked == true)
    filter += '&minATX';

  if (document.getElementById("MicATX").checked == true)
    filter += '&MicATX';

  if (document.getElementById("EATX").checked == true)
    filter += '&EATX';


  if (filter != "")
    filter = '?filter' + filter;
  motherboardsresponse(filter);
}

//////////////////////////////////GRAPHIC CARD//////////////////////////// 



function graphicscards() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      document.getElementById("option-menu").innerHTML = xmlhttp.responseText;
      document.getElementById("option-menu").setAttribute('class', 'option-menu');
    }
  };
  xmlhttp.open("GET", "graphicscards/graphicscardoptionlist.html", true);
  xmlhttp.send();


  graphicscardsresponse(null);
}

function graphicscardsresponse(filter) {
  if (filter == null)
    filter = ""

  var res = document.getElementById('response');
  res.innerHTML = "";
  fetch('graphicscards/graphicscards.php' + filter).then(resp => {
    return resp.json();
  }).then(obj => {

    if (obj == "error")
      res.innerHTML = "Brak produktów spełniające kryteria";
    else {

      for (i = 0; i < obj.length; i++) {
        pa = document.createElement('li');
        res.appendChild(pa);
        var a = document.createElement('a');
        a.setAttribute('href', 'graphicscards/graphicscards.php?id=' + obj[i].graphicsID);
        a.innerHTML = obj[i].producer + " " + obj[i].model;
        pa.appendChild(a);
        var btn = document.createElement("button");
        btn.value = obj[i].graphicsID;
        btn.innerHTML = "Wybierz";
        btn.onclick = function () { onClick = graphicscard(this.value) };
        pa.appendChild(btn);
        pa.appendChild(document.createElement('br'));
      }
    }
  });
}


function graphicscard(id) {
  fetch('graphicscards/graphicscards.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, 
    body: 'id=' + id
  })
    .then(resp => {
      return resp.json();
    })
    .then((data) => { 

      add = document.getElementById("listGraphicsCard");
      add.innerHTML = "";
      add.classList.add("choosed");
      h2 = document.createElement("h2");
      h2.innerHTML = 'Karta graficzna';
      add.appendChild(h2);
      li = document.createElement("h3");
      li.innerHTML = data[0].producer + ' ' + data[0].model;
      li.setAttribute('class', 'chname');
      add.appendChild(li);
      del = document.createElement("input");
      del.type = 'button';
      del.value = 'Usuń';
      del.setAttribute('onCLick', 'dele("listGraphicsCard")');
      add.appendChild(del);
      change = document.createElement("input");
      change.type = 'button';
      change.value = 'Zmień';
      change.setAttribute('onCLick', 'graphicscards()');
      add.appendChild(change);
    });
}


function graphicsfilter() {
  filter = "";



  if (document.getElementById("ASRock").checked == true)
    filter += '&ASRock';
  if (document.getElementById("Asus").checked == true)
    filter += '&Asus';
  if (document.getElementById("EVGA").checked == true)
    filter += '&EVGA';
  if (document.getElementById("Gainward").checked == true)
    filter += '&Gainward';
  if (document.getElementById("Gigabyte").checked == true)
    filter += '&Gigabyte';
  if (document.getElementById("Inno3D").checked == true)
    filter += '&Inno3D';
  if (document.getElementById("MSI").checked == true)
    filter += '&MSI';
  if (document.getElementById("Palit").checked == true)
    filter += '&Palit';
  if (document.getElementById("Sapphire").checked == true)
    filter += '&Sapphire';
  if (document.getElementById("XFX").checked == true)
    filter += '&XFX';


  if (document.getElementById("GDDR3").checked == true)
    filter += '&GDDR3';
  if (document.getElementById("GDDR4").checked == true)
    filter += '&GDDR4';
  if (document.getElementById("GDDR5").checked == true)
    filter += '&GDDR5';
  if (document.getElementById("GDDR5X").checked == true)
    filter += '&GDDR5X';
  if (document.getElementById("GDDR6").checked == true)
    filter += '&GDDR6';


  if (document.getElementById("1050").checked == true)
    filter += '&1050';
  if (document.getElementById("1060").checked == true)
    filter += '&1060';
  if (document.getElementById("1070").checked == true)
    filter += '&1070';
  if (document.getElementById("1080").checked == true)
    filter += '&1080';
  if (document.getElementById("1650").checked == true)
    filter += '&1650';
  if (document.getElementById("1660").checked == true)
    filter += '&1660';
  if (document.getElementById("1660ti").checked == true)
    filter += '&1660ti';
  if (document.getElementById("2060").checked == true)
    filter += '&2060';
  if (document.getElementById("2060S").checked == true)
    filter += '&2060S';
  if (document.getElementById("2070").checked == true)
    filter += '&2070';
  if (document.getElementById("2070S").checked == true)
    filter += '&2070S';
  if (document.getElementById("2080").checked == true)
    filter += '&2080';
  if (document.getElementById("2080ti").checked == true)
    filter += '&2080ti';

  if (document.getElementById("550").checked == true)
    filter += '&550';
  if (document.getElementById("560").checked == true)
    filter += '&560';
  if (document.getElementById("570").checked == true)
    filter += '&570';
  if (document.getElementById("580").checked == true)
    filter += '&580';
  if (document.getElementById("590").checked == true)
    filter += '&590';
  if (document.getElementById("5700").checked == true)
    filter += '&5700';
  if (document.getElementById("5700XT").checked == true)
    filter += '&5700XT';


  if (filter != "")
    filter = '?filter' + filter;
  graphicscardsresponse(filter);
}

//////////////////////////////////RAM//////////////////////////// 
function RAMs() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      document.getElementById("option-menu").innerHTML = xmlhttp.responseText;
      document.getElementById("option-menu").setAttribute('class', 'option-menu');
    }
  };
  xmlhttp.open("GET", "RAM/RAMoptionlist.html", true);
  xmlhttp.send();


  RAMresponse(null);
}

function RAMresponse(filter) {
  if (filter == null)
    filter = ""

  var res = document.getElementById('response');
  res.innerHTML = "";
  fetch('RAM/RAM.php' + filter).then(resp => {
    return resp.json();
  }).then(obj => {

    if (obj == "error")
      res.innerHTML = "Brak produktów spełniające kryteria";
    else {

      for (i = 0; i < obj.length; i++) {
        pa = document.createElement('li');
        res.appendChild(pa);
        var a = document.createElement('a');
        a.setAttribute('href', 'RAM/RAM.php?id=' + obj[i].RAMID);
        a.innerHTML = obj[i].producer + " " + obj[i].series;
        pa.appendChild(a);
        var btn = document.createElement("button");
        btn.value = obj[i].RAMID;
        btn.innerHTML = "Wybierz";
        btn.onclick = function () { onClick = RAM(this.value) };
        pa.appendChild(btn);
        pa.appendChild(document.createElement('br'));

      }
    }
  });

}


function RAM(id) {
  fetch('RAM/RAM.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, 
    body: 'id=' + id
  })
    .then(resp => {
      return resp.json();
    })
    .then((data) => { 

      add = document.getElementById("listRAM");
      add.innerHTML = "";
      add.classList.add("choosed");
      h2 = document.createElement("h2");
      h2.innerHTML = 'Pamięć RAM';
      add.appendChild(h2);
      li = document.createElement("h3");
      li.innerHTML = data[0].producer + ' ' + data[0].series;
      li.setAttribute('class', 'chname');
      add.appendChild(li);
      del = document.createElement("input");
      del.type = 'button';
      del.value = 'Usuń';
      del.setAttribute('onCLick', 'dele("listRAM")');
      add.appendChild(del);
      change = document.createElement("input");
      change.type = 'button';
      change.value = 'Zmień';
      change.setAttribute('onCLick', 'RAMs()');
      add.appendChild(change);
    });
}


function RAMfilter() {
  filter = "";


  if (document.getElementById("Adata").checked == true)
    filter += '&Adata';
  if (document.getElementById("Corsair").checked == true)
    filter += '&Corsair';
  if (document.getElementById("Crucial").checked == true)
    filter += '&Crucial';
  if (document.getElementById("G.SKILL").checked == true)
    filter += '&G.SKILL';
  if (document.getElementById("GoodRAM").checked == true)
    filter += '&GoodRAM';
  if (document.getElementById("Inno3D").checked == true)
    filter += '&Inno3D';
  if (document.getElementById("Kingston").checked == true)
    filter += '&Kingston';
  if (document.getElementById("Patriot").checked == true)
    filter += '&Patriot';
  if (document.getElementById("Samsung").checked == true)
    filter += '&Samsung';
  if (document.getElementById("Transcend").checked == true)
    filter += '&Transcend';

  if (document.getElementById("64").checked == true)
    filter += '&64';
  if (document.getElementById("32").checked == true)
    filter += '&32';
  if (document.getElementById("16").checked == true)
    filter += '&16';
  if (document.getElementById("8").checked == true)
    filter += '&8';
  if (document.getElementById("4").checked == true)
    filter += '&4';

  if (filter != "")
    filter = '?filter' + filter;
  RAMresponse(filter);
}

//////////////////////////////////PSU//////////////////////////// 

function PSUs() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      document.getElementById("option-menu").innerHTML = xmlhttp.responseText;
      document.getElementById("option-menu").setAttribute('class', 'option-menu');
    }
  };
  xmlhttp.open("GET", "PSU/PSUoptionlist.html", true);
  xmlhttp.send();


  PSUresponse(null);
}

function PSUresponse(filter) {
  if (filter == null)
    filter = ""

  var res = document.getElementById('response');
  res.innerHTML = "";
  fetch('PSU/PSU.php' + filter).then(resp => {
    return resp.json();
  }).then(obj => {

    if (obj == "error")
      res.innerHTML = "Brak produktów spełniające kryteria";
    else {

      for (i = 0; i < obj.length; i++) {
        pa = document.createElement('li');
        res.appendChild(pa);
        var a = document.createElement('a');
        a.setAttribute('href', 'PSU/PSU.php?id=' + obj[i].PSUID);
        a.innerHTML = obj[i].producer + " " + obj[i].model;
        pa.appendChild(a);
        var btn = document.createElement("button");
        btn.value = obj[i].PSUID;
        btn.innerHTML = "Wybierz";
        btn.onclick = function () { onClick = PSU(this.value) };
        pa.appendChild(btn);
        pa.appendChild(document.createElement('br'));
      }
    }
  });
}


function PSU(id) {
  fetch('PSU/PSU.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, 
    body: 'id=' + id
  })
    .then(resp => {
      return resp.json();
    })
    .then((data) => { 

      add = document.getElementById("listPSU");
      add.innerHTML = "";
      add.classList.add("choosed");
      h2 = document.createElement("h2");
      h2.innerHTML = 'Zasilacz';
      add.appendChild(h2);
      li = document.createElement("h3");
      li.innerHTML = data[0].producer + ' ' + data[0].model;
      li.setAttribute('class', 'chname');
      add.appendChild(li);
      del = document.createElement("input");
      del.type = 'button';
      del.value = 'Usuń';
      del.setAttribute('onCLick', 'dele("listPSU")');
      add.appendChild(del);
      change = document.createElement("input");
      change.type = 'button';
      change.value = 'Zmień';
      change.setAttribute('onCLick', 'PSUs()');
      add.appendChild(change);
    });
}


function PSUfilter() {
  filter = "";

  if (document.getElementById("BQ").checked == true)
    filter += '&BQ';
  if (document.getElementById("Chieftec").checked == true)
    filter += '&Chieftec';
  if (document.getElementById("CoolerMaster").checked == true)
    filter += '&CoolerMaster';
  if (document.getElementById("Corsair").checked == true)
    filter += '&Corsair';
  if (document.getElementById("EVGA").checked == true)
    filter += '&EVGA';
  if (document.getElementById("LC-Power").checked == true)
    filter += '&LC-Power';
  if (document.getElementById("SilentiumPC").checked == true)
    filter += '&SilentiumPC';
  if (document.getElementById("SilverStone").checked == true)
    filter += '&SilverStone';
  if (document.getElementById("Tracer").checked == true)
    filter += '&Tracer';
  if (document.getElementById("XFX").checked == true)
    filter += '&XFX';


  if (document.getElementById("modtrue").checked == true)
    filter += '&modtrue';
  if (document.getElementById("modfalse").checked == true)
    filter += '&modfalse';

  filter += '&powermin=' + document.getElementById("power-min").value;
  filter += '&powermax=' + document.getElementById("power-max").value;


  if (document.getElementById("80p").checked == true)
    filter += '&80p';
  if (document.getElementById("80pb").checked == true)
    filter += '&80pb';
  if (document.getElementById("80ps").checked == true)
    filter += '&80ps';
  if (document.getElementById("80pg").checked == true)
    filter += '&80pg';
  if (document.getElementById("80pp").checked == true)
    filter += '&80pp';
  if (document.getElementById("80pt").checked == true)
    filter += '&80pt';

  if (filter != "")
    filter = '?filter' + filter;
  PSUresponse(filter);
}

//////////////////////////////////CASE//////////////////////////// 
function cases() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      document.getElementById("option-menu").innerHTML = xmlhttp.responseText;
      document.getElementById("option-menu").setAttribute('class', 'option-menu');
    }
  };
  xmlhttp.open("GET", "case/caseoptionlist.html", true);
  xmlhttp.send();


  caseresponse(null);
}

function caseresponse(filter) {
  if (filter == null)
    filter = ""

  var res = document.getElementById('response');
  res.innerHTML = "";
  fetch('case/case.php' + filter).then(resp => {
    return resp.json();
  }).then(obj => {

    if (obj == "error")
      res.innerHTML = "Brak produktów spełniające kryteria";
    else {

      for (i = 0; i < obj.length; i++) {
        pa = document.createElement('li');
        res.appendChild(pa);
        var a = document.createElement('a');
        a.setAttribute('href', 'case/case.php?id=' + obj[i].caseID);
        a.innerHTML = obj[i].producer + " " + obj[i].model;
        pa.appendChild(a);
        var btn = document.createElement("button");
        btn.value = obj[i].caseID;
        btn.innerHTML = "Wybierz";
        btn.onclick = function () { onClick = casechoose(this.value) };
        pa.appendChild(btn);
        pa.appendChild(document.createElement('br'));

      }
    }
  });

}


function casechoose(id) {
  fetch('case/case.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, 
    body: 'id=' + id
  })
    .then(resp => {
      return resp.json();
    })
    .then((data) => { 

      add = document.getElementById("listCase");
      add.innerHTML = "";
      add.classList.add("choosed");
      h2 = document.createElement("h2");
      h2.innerHTML = 'Obudowa';
      add.appendChild(h2);
      li = document.createElement("h3");
      li.innerHTML = data[0].producer + ' ' + data[0].model;
      li.setAttribute('class', 'chname');
      add.appendChild(li);
      del = document.createElement("input");
      del.type = 'button';
      del.value = 'Usuń';
      del.setAttribute('onCLick', 'dele("listCase")');
      add.appendChild(del);
      change = document.createElement("input");
      change.type = 'button';
      change.value = 'Zmień';
      change.setAttribute('onCLick', 'cases()');
      add.appendChild(change);
    });
}


function casefilter() {
  filter = "";

  if (document.getElementById("BQ").checked == true)
    filter += '&BQ';
  if (document.getElementById("BitFenix").checked == true)
    filter += '&BitFenix';
  if (document.getElementById("Chieftec").checked == true)
    filter += '&Chieftec';
  if (document.getElementById("CoolerMaster").checked == true)
    filter += '&CoolerMaster';
  if (document.getElementById("Corsair").checked == true)
    filter += '&Corsair';
  if (document.getElementById("Deepcool").checked == true)
    filter += '&Deepcool';
  if (document.getElementById("Fractal").checked == true)
    filter += '&Fractal';
  if (document.getElementById("Genesis").checked == true)
    filter += '&Genesis';
  if (document.getElementById("Modecom").checked == true)
    filter += '&Modecom';
  if (document.getElementById("MSI").checked == true)
    filter += '&MSI';
  if (document.getElementById("NZXT").checked == true)
    filter += '&NZXT';
  if (document.getElementById("Phanteks").checked == true)
    filter += '&Phanteks';
  if (document.getElementById("SilentiumPC").checked == true)
    filter += '&SilentiumPC';
  if (document.getElementById("SilverStone").checked == true)
    filter += '&SilverStone';


  if (document.getElementById("ATX").checked == true)
    filter += '&ATX';
  if (document.getElementById("minATX").checked == true)
    filter += '&minATX';
  if (document.getElementById("MicATX").checked == true)
    filter += '&MicATX';
  if (document.getElementById("EATX").checked == true)
    filter += '&EATX';

  if (document.getElementById("Big").checked == true)
    filter += '&Big';
  if (document.getElementById("Full").checked == true)
    filter += '&Full';
  if (document.getElementById("Midi").checked == true)
    filter += '&Midi';
  if (document.getElementById("Mini").checked == true)
    filter += '&Mini';

  if (document.getElementById("glasstrue").checked == true)
    filter += '&glasstrue';
  if (document.getElementById("glassfalse").checked == true)
    filter += '&glassfalse';

  if (filter != "")
    filter = '?filter' + filter;
  caseresponse(filter);
}

//////////////////////////////////REMOVE//////////////////////////// 

function dele(name) {
  //x = document.getElementById("choosed");
  li = document.getElementsByTagName("li")[name];
  li.classList.remove("choosed");

  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      li.innerHTML = "";
    }
  };
  xmlhttp.open("POST", "unset.php", true);
  xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xmlhttp.send('name=' + name);
}