document.getElementById('btn_computerID').addEventListener("click",function(){

    fetch('computerID.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body:  'ID=' + document.getElementById("computerID").value
    })
        .then((resp) => {
            console.log(resp);
            return resp.json();
        })
        .then((response) => {

            // /console.log(response.email);
            if(response.ID !="wrong"){
           // document.getElementById("ID").value = response.ID;
            document.getElementById("Procesor").value = response.procesor;
            document.getElementById("ProcesorURL").value = response.procesorurl;
            document.getElementById("Motherboard").value = response.motherboard;
            document.getElementById("MotherboardURL").value = response.motherboardurl;
            document.getElementById("Graphic").value = response.graphic;
            document.getElementById("GraphicURL").value = response.graphicurl;
            document.getElementById("RAM").value = response.RAM;
            document.getElementById("RAMURL").value = response.RAMurl;
            document.getElementById("Disc").value = response.disc;
            document.getElementById("DiscURL").value = response.discurl;
            document.getElementById("PSU").value = response.PSU;
            document.getElementById("PSUURL").value = response.PSUurl;
            document.getElementById("Price").value = response.price;
            }else{
               // document.getElementById("ID").value = "ID";
                document.getElementById("Procesor").value = "";
                document.getElementById("ProcesorURL").value = "";
                document.getElementById("Motherboard").value = "";
                document.getElementById("MotherboardURL").value = "";
                document.getElementById("Graphic").value = "";
                document.getElementById("GraphicURL").value = "";
                document.getElementById("RAM").value = "";
                document.getElementById("RAMURL").value = "";
                document.getElementById("Disc").value = "";
                document.getElementById("DiscURL").value = "";
                document.getElementById("PSU").value = "";
                document.getElementById("PSUURL").value = "";
                document.getElementById("Price").value = "";
            }
        }
        ) .catch(error => {
            console.log(error);
          })

});




document.getElementById('btn_update').addEventListener("click",function(){
	
	form=new FormData(); 
    
    form.append("ID",document.getElementById("computerID").value);
    form.append("Procesor",document.getElementById("Procesor").value);
    form.append("ProcesorURL",document.getElementById("ProcesorURL").value);
    form.append("Motherboard",document.getElementById("Motherboard").value);
    form.append("MotherboardURL",document.getElementById("MotherboardURL").value);
    form.append("Graphic",document.getElementById("Graphic").value);
    form.append("GraphicURL",document.getElementById("GraphicURL").value);
    form.append("RAM",document.getElementById("RAM").value);
    form.append("RAMURL",document.getElementById("RAMURL").value);
    form.append("Disc",document.getElementById("Disc").value);
    form.append("DiscURL",document.getElementById("DiscURL").value);
    form.append("PSU",document.getElementById("PSU").value);
    form.append("PSUURL",document.getElementById("PSUURL").value);
    form.append("Price",document.getElementById("Price").value);





    fetch('computerUpdate.php', {
        method: 'POST',
        body:  form
    })
    .then((resp) => {
        return resp.json();
    })
    .then((response) => {


            alert(response.success);

    }) 
    .catch((error) => {
        console.log(error);
    })
});

document.getElementById('btn_upload').addEventListener("click",function(){
	var plik=document.getElementById("plik").files[0];
	
	var formularz=new FormData(); //tworzymy nowy formularz do wysłania
	formularz.append("plik", plik); //dodajemy do formularza pole z naszym plikiem

    fetch('generator.php', {
        method: 'POST',
      //  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body:  formularz
    })
        .then((resp) => {
            console.log(resp);
            return resp.json();
        })
        .then((response) => {

            console.log(response);
        }
        ) .catch(error => {
            console.error(error)
          })

});