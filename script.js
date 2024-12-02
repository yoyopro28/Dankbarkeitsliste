// Überprüfen, ob das aktuelle Datum das Öffnen der Tür erlaubt
function canOpenDoor(doorNumber) {
    var today = new Date();
    var currentMonth = today.getMonth() + 1; // Monate sind von 0 bis 11
    var currentDate = today.getDate();

    return currentMonth === 12 && currentDate >= doorNumber;
}

// Allgemeine Funktion zum Öffnen einer Tür
function openDoor(div, doorNumber) {
    if (canOpenDoor(doorNumber)) {
        switch (doorNumber) {
            case 1:
                door1(div);
                break;
            case 2:
                door2(div);
                break;
            case 3:
                door3(div);
                break;
            case 4:
                door4(div);
                break;
            case 5:
                door5(div);
                break;
            case 6:
                door6(div);
                break;
            case 7:
                door7(div);
                break;
            case 8:
                door8(div);
                break;
            case 9:
                door9(div);
                break;
            case 10:
                door10(div);
                break;
            case 11:
                door11(div);
                break;
            case 12:
                door12(div);
                break;
            case 13:
                door13(div);
                break;
            case 14:
                door14(div);
                break;
            case 15:
                door15(div);
                break;
            case 16:
                door16(div);
                break;
            case 17:
                door17(div);
                break;
            case 18:
                door18(div);
                break;
            case 19:
                door19(div);
                break;
            case 20:
                door20(div);
                break;
            case 21:
                door21(div);
                break;
            case 22:
                door22(div);
                break;
            case 23:
                door23(div);
                break;
            case 24:
                door24(div);
                break;
            default:
                alert('Es gibt keine Tür mit dieser Nummer.');
                break;
        }
    } else {
        alert('Diese Tür kann noch nicht geöffnet werden.');
    }
}


// Funktionen für jede Tür
function door1(div) {
    div.innerHTML = 'Ich koche einmal was für dich';
    div.style.fontSize = '15px';
    div.style.backgroundColor = 'rgb(235, 118, 152)';
}

function door2(div) {
    div.innerHTML = 'Wir gehen auf den Weihnachtsmarkt';
    div.style.fontSize = '15px';
    div.style.backgroundColor = 'rgb(248, 150, 30)';
}

function door3(div) {
    div.innerHTML = 'Ich mache dir einen Tee';
    div.style.fontSize = '15px';
    div.style.backgroundColor = 'rgb(133, 193, 233)';
}

function door4(div) {
    div.innerHTML = 'Wir gehen in die Therme';
    div.style.fontSize = '15px';
    div.style.backgroundColor = 'rgb(63, 94, 251)';
}

function door5(div) {
    div.innerHTML = 'Ein gemütlicher Filmabend';
    div.style.fontSize = '15px';
    div.style.backgroundColor = 'rgb(255, 189, 67)';
}

function door6(div) {
    div.innerHTML = 'Ein Spaziergang Im Wald';
    div.style.fontSize = '15px';
    div.style.backgroundColor = 'rgb(172, 185, 52)';
}

function door7(div) {
    div.innerHTML = 'Ich lade dich zum Essen ein';
    div.style.fontSize = '15px';
    div.style.backgroundColor = 'rgb(182, 73, 38)';
}

function door8(div) {
    div.innerHTML = 'Wir machen zusammen den Türkranz';
    div.style.fontSize = '15px';
    div.style.backgroundColor = 'rgb(69, 179, 157)';
}

function door9(div) {
    div.innerHTML = 'Wir gehen beim Baklava Bäcker Frühstücken';
    div.style.fontSize = '15px';
    div.style.backgroundColor = 'rgb(242, 85, 96)';
}

function door10(div) {
    div.innerHTML = 'WIr backen Pizza zusammen';
    div.style.fontSize = '15px';
    div.style.backgroundColor = 'rgb(245, 203, 167)';
}

function door11(div) {
    div.innerHTML = 'Ich schreibe dir ein Gedicht';
    div.style.fontSize = '15px';
    div.style.backgroundColor = 'rgb(195, 123, 175)';
}

function door12(div) {
    div.innerHTML = 'Gemeinsamer Besuch im Museum';
    div.style.fontSize = '15px';
    div.style.backgroundColor = 'rgb(87, 154, 113)';
}

function door13(div) {
    div.innerHTML = 'Wir gehen shoppen';
    div.style.fontSize = '15px';
    div.style.backgroundColor = 'rgb(80, 116, 196)';
}

function door14(div) {
    div.innerHTML = 'Ich baue das Regal auf';
    div.style.fontSize = '15px';
    div.style.backgroundColor = 'rgb(255, 214, 165)';
}

function door15(div) {
    div.innerHTML = 'Kch mache einen Tag lang das was du sagst';
    div.style.fontSize = '15px';
    div.style.backgroundColor = 'rgb(202, 62, 71)';
}

function door16(div) {
    div.innerHTML = 'Wir gehen in ein Museum';
    div.style.fontSize = '15px';
    div.style.backgroundColor = 'rgb(159, 168, 218)';
}

function door17(div) {
    div.innerHTML = 'Ich singe ein Weihnachtslied für dich';
    div.style.fontSize = '15px';
    div.style.backgroundColor = 'rgb(204, 138, 129)';
}

function door18(div) {
    div.innerHTML = 'Ich mache dir Frühstück ans Bett';
    div.style.fontSize = '15px';
    div.style.backgroundColor = 'rgb(255, 206, 84)';
}

function door19(div) {
    div.innerHTML = 'Wir planen unsere Neujahrsvorsätze';
    div.style.fontSize = '15px';
    div.style.backgroundColor = 'rgb(130, 105, 83)';
}

function door20(div) {
    div.innerHTML = 'Wir gehen Cigköfte essen ';
    div.style.fontSize = '15px';
    div.style.backgroundColor = 'rgb(108, 122, 137)';
}

function door21(div) {
    div.innerHTML = 'Wir sehen uns alte Fotos an';
    div.style.fontSize = '15px';
    div.style.backgroundColor = 'rgb(207, 207, 196)';
}

function door22(div) {
    div.innerHTML = 'Ich lese dir etwas vor';
    div.style.fontSize = '15px';
    div.style.backgroundColor = 'rgb(233, 69, 96)';
}

function door23(div) {
    div.innerHTML = 'Wir kochen zusammen unser Lieblingsgericht';
    div.style.fontSize = '15px';
    div.style.backgroundColor = 'rgb(244, 164, 96)';
}

function door24(div) {
    div.innerHTML = 'Heiligabend zusammen verbringen';
    div.style.fontSize = '15px';
    div.style.backgroundColor = 'rgb(255, 105, 97)';
}

