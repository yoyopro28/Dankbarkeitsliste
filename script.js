// Überprüfen, ob das aktuelle Datum das Öffnen der Tür erlaubt
function canOpenDoor(doorNumber) {
    var today = new Date();
    var currentMonth = today.getMonth() + 1; // Monate sind von 0 bis 11
    var currentDate = today.getDate();
    return currentMonth === 12 && currentDate >= doorNumber;
}

// Initialisiere die Türen basierend auf gespeicherten Daten
function initializeDoors() {
    document.querySelectorAll('.door').forEach((div) => {
        const doorNumber = parseInt(div.textContent, 10);
        const isOpened = localStorage.getItem(`door-${doorNumber}`) === 'opened';

        if (isOpened) {
            // Öffne die Tür direkt, ohne Animation
            openDoor(div, doorNumber, false, true);
        }
    });
}

// Funktion zum Öffnen oder Schließen einer Tür
function toggleDoor(div, doorNumber) {
    if (!canOpenDoor(doorNumber)) {
        alert('Diese Tür kann noch nicht geöffnet werden.');
        return;
    }

    // Prüfen, ob die Tür bereits geöffnet wurde
    if (div.classList.contains('opened')) {
        closeDoor(div, doorNumber); // Tür schließen
    } else {
        openDoor(div, doorNumber); // Tür öffnen
    }
}

// Funktion, um die Tür zu öffnen
function openDoor(div, doorNumber, save = true, noAnimation = false) {
    div.classList.add('opened');

    if (noAnimation) {
        div.classList.add('no-animation');
    } else {
        div.classList.remove('no-animation'); // Animation erlauben, wenn nicht aus `initializeDoors`
    }

    if (save) {
        localStorage.setItem(`door-${doorNumber}`, 'opened'); // Speichere den Zustand
    }
    switch (doorNumber) {
        case 1:
            div.innerHTML = 'Ich mache dir einen Tee';
            div.style.fontSize = '15px';
            div.style.backgroundColor = 'rgb(235, 118, 152)';
            break;
        case 2:
            div.innerHTML = 'Ich kaufe dir diese blauen Ohrrdsdsdsdinge';
            div.style.fontSize = '15px';
            div.style.backgroundColor = 'rgb(248, 150, 30)';
            break;
        case 3:
            div.innerHTML = 'Ich koche einmal was für dich';
            div.style.fontSize = '15px';
            div.style.backgroundColor = 'rgb(133, 193, 233)';
            break;
        case 4:
            div.innerHTML = 'Wir gehen in die Therme';
            div.style.fontSize = '15px';
            div.style.backgroundColor = 'rgb(63, 94, 251)';
            break;
        case 5:
            div.innerHTML = 'Ein gemütlicher Filmabend';
            div.style.fontSize = '15px';
            div.style.backgroundColor = 'rgb(255, 189, 67)';
            break;
        case 6:
            div.innerHTML = 'Ein Spaziergang im Wald';
            div.style.fontSize = '15px';
            div.style.backgroundColor = 'rgb(172, 185, 52)';
            break;
        case 7:
            div.innerHTML = 'Ich lade dich zum Essen ein';
            div.style.fontSize = '15px';
            div.style.backgroundColor = 'rgb(182, 73, 38)';
            break;
        case 8:
            div.innerHTML = 'Wir machen zusammen den Türkranz';
            div.style.fontSize = '15px';
            div.style.backgroundColor = 'rgb(69, 179, 157)';
            break;
        case 9:
            div.innerHTML = 'Wir gehen beim Baklava-Bäcker Frühstücken';
            div.style.fontSize = '15px';
            div.style.backgroundColor = 'rgb(242, 85, 96)';
            break;
        case 10:
            div.innerHTML = 'Wir backen Pizza zusammen';
            div.style.fontSize = '15px';
            div.style.backgroundColor = 'rgb(245, 203, 167)';
            break;
        case 11:
            div.innerHTML = 'Ich schreibe dir ein Gedicht';
            div.style.fontSize = '15px';
            div.style.backgroundColor = 'rgb(195, 123, 175)';
            break;
        case 12:
            div.innerHTML = 'Gemeinsamer Besuch im Museum';
            div.style.fontSize = '15px';
            div.style.backgroundColor = 'rgb(87, 154, 113)';
            break;
        case 13:
            div.innerHTML = 'Wir gehen shoppen';
            div.style.fontSize = '15px';
            div.style.backgroundColor = 'rgb(80, 116, 196)';
            break;
        case 14:
            div.innerHTML = 'Ich baue das Regal auf';
            div.style.fontSize = '15px';
            div.style.backgroundColor = 'rgb(255, 214, 165)';
            break;
        case 15:
            div.innerHTML = 'Ich mache einen Tag lang das, was du sagst';
            div.style.fontSize = '15px';
            div.style.backgroundColor = 'rgb(202, 62, 71)';
            break;
        case 16:
            div.innerHTML = 'Wir gehen in ein Museum';
            div.style.fontSize = '15px';
            div.style.backgroundColor = 'rgb(159, 168, 218)';
            break;
        case 17:
            div.innerHTML = 'Ich singe ein Weihnachtslied für dich';
            div.style.fontSize = '15px';
            div.style.backgroundColor = 'rgb(204, 138, 129)';
            break;
        case 18:
            div.innerHTML = 'Ich mache dir Frühstück ans Bett';
            div.style.fontSize = '15px';
            div.style.backgroundColor = 'rgb(255, 206, 84)';
            break;
        case 19:
            div.innerHTML = 'Wir planen unsere Neujahrsvorsätze';
            div.style.fontSize = '15px';
            div.style.backgroundColor = 'rgb(130, 105, 83)';
            break;
        case 20:
            div.innerHTML = 'Wir gehen Cigköfte essen';
            div.style.fontSize = '15px';
            div.style.backgroundColor = 'rgb(108, 122, 137)';
            break;
        case 21:
            div.innerHTML = 'Wir sehen uns alte Fotos an';
            div.style.fontSize = '15px';
            div.style.backgroundColor = 'rgb(207, 207, 196)';
            break;
        case 22:
            div.innerHTML = 'Ich lese dir etwas vor';
            div.style.fontSize = '15px';
            div.style.backgroundColor = 'rgb(233, 69, 96)';
            break;
        case 23:
            div.innerHTML = 'Wir kochen zusammen unser Lieblingsgericht';
            div.style.fontSize = '15px';
            div.style.backgroundColor = 'rgb(244, 164, 96)';
            break;
        case 24:
            div.innerHTML = 'Heiligabend zusammen verbringen';
            div.style.fontSize = '15px';
            div.style.backgroundColor = 'rgb(255, 105, 97)';
            break;
    }
}

// Funktion, um die Tür zu schließen
function closeDoor(div, doorNumber) {
    div.classList.remove('opened');
    div.classList.remove('no-animation'); // Entferne `no-animation` beim Schließen
    localStorage.removeItem(`door-${doorNumber}`); // Entferne den Zustand aus dem Speicher
    div.innerHTML = doorNumber; // Zeigt die Nummer der Tür an
    div.style.fontSize = '35px'; // Setzt die Schriftgröße zurück
    div.style.backgroundColor = 'rgb(245, 67, 54)'; // Setzt die ursprüngliche Hintergrundfarbe zurück
}

// Initialisiere Türen beim Laden der Seite
window.onload = initializeDoors;
