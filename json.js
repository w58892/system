send("");

function send(value) {

    fetch('read.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: "value=" + value
    })
        .then((resp) => {
            return resp.json();
        })
        .then((response) => {
            document.getElementById("buttons").innerHTML = "";
            document.getElementById("answer").innerHTML = "";
            document.getElementById("kontener").innerHTML="";
            if ('end' in response) {

                kontener = document.getElementById("kontener");
                kontener.innerHTML = "";

                addButton(response, "procesor");
                addButton(response, "płyta główna");
                addButton(response, "karta graficzna");
                addButton(response, "RAM");
                addButton(response, "dysk");
                addButton(response, "zasilacz");
                buttons();
            } else {

                document.getElementById("kontener").innerHTML = response.question;
                arrLength = response.answer.length;
                document.getElementById("answer").innerHTML = "";
                for (i = 0; i < arrLength; i++) {
                    node = document.createElement("button");
                    textnode = document.createTextNode(response.answer[i].value);

                    node.setAttribute("class", "answer");
                    node.setAttribute("value", response.answer[i].value);

                    node.appendChild(textnode);
                    document.getElementById("answer").appendChild(node);
                }
                buttons();
                listen();
            }
        })
}

function listen() {
    elements = document.getElementsByClassName("answer");

    myFunction = function () {
        attribute = this.getAttribute("value");
        send(attribute);
    };

    for (i = 0; i < elements.length; i++) {
        elements[i].addEventListener('click', myFunction, false);
    }
}

function addButton(response, value) {
    if (value in response.end) {
        createA = document.createElement('a');
        createAText = document.createTextNode(response.end[value].name);
        createA.setAttribute('href', "http://" + response.end[value].link);
        createA.setAttribute('target', "_blank");

        createA.appendChild(createAText);

        createLabel = document.createElement('label');
        createLabelText = document.createTextNode(value);
        createLabel.appendChild(createLabelText);
        createLabel.appendChild(createA);
        kontener.appendChild(createLabel);
    }
}

function buttons() {
    reset = document.createElement("button");
    reset.setAttribute("class", "reset");
    reset.setAttribute("value", "reset");
    textReset = document.createTextNode("reset");

    back = document.createElement("button");
    back.setAttribute("class", "reset");
    back.setAttribute("value", "back");

    textBack = document.createTextNode("cofnij");

    reset.appendChild(textReset);
    back.appendChild(textBack);

    document.getElementById("buttons").appendChild(reset);
    document.getElementById("buttons").appendChild(back);

    elements = document.getElementsByClassName("reset");

    sendReset = function () {
        value = this.getAttribute("value");

        fetch('reset.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: value

        }).then((resp) => {
            location.reload();
        })
            .then((response) => {
            })
    };

    for (i = 0; i < elements.length; i++) {
        elements[i].addEventListener('click', sendReset, false);
    }
}