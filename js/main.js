// 1. seleziona i bottoni
var btnGenera = document.getElementById('genera');
var btnAnnulla = document.getElementById('annulla');

// 2. al click del bottone genera 
btnGenera.addEventListener('click', 
    function() {
        
        // logica di generazione del biglietto 
        
        // 3. prendo i valori dei campi input e select
        var nome = document.getElementById('nome').value;
        // Controllo nome
        if ( !(isNaN(nome)) || nome == "") {
            alert("Inserisci un nome valido!");
            end;
        }
        
        var km = parseInt(document.getElementById('km').value);
        // Controllo km
        if ( isNaN(km) ) {
            alert("Inserisci il numero di km!");
            end;
        }
        
        var fasciaEta = document.getElementById('fascia').value;
        // Controllo select
        if ( document.getElementById('fascia').value == "" ) {
            alert("Scegli una fascia d'età!");
            end;
        }
        
        // 4. calcolo il prezzo in base alla fascia d'età
        var prezzo = km * 0.21;
        if ( fasciaEta == "minorenne" ) {
            // prezzo biglietto -20%
            prezzo = prezzo - ( (prezzo / 100) * 20 );
        } else if ( fasciaEta == "over") {
            //prezzo biglietto -40%
            prezzo = prezzo - ( (prezzo / 100) * 40 );
        } 
        
        // 5. stampo tutti i dati nel div del biglietto
        var iltuo = document.getElementById('iltuo');
        iltuo.style.display = "block";
        // 5a. iniettare nome passeggero
        document.getElementById('nome-passeggero').innerHTML = nome;
        // 5b. iniettare tipo offerta
        if ( fasciaEta == "minorenne" ) {
            document.getElementById('tipo-offerta').innerHTML = "Sconto minorenni";
        } else if ( fasciaEta == "over" ) {
            document.getElementById('tipo-offerta').innerHTML = "Sconto over 65";

        } else {
            document.getElementById('tipo-offerta').innerHTML = "Biglietto Standard"
        }
        // 5c. iniettare prezzo
        document.getElementById('totale').innerHTML = prezzo.toFixed(2) + " €";
        // 5d. iniettare carrozza e codice CP
        document.getElementById('carrozza').innerHTML = Math.floor( Math.random() * 10) + 1;
        document.getElementById('codice-cp').innerHTML = Math.floor( Math.random() * ( 99999 - 90000 ) ) + 90000;


        // rendi div visibile
        document.getElementById("biglietto").classList.add("open");
    }
);

// al click del bottone annulla 
btnAnnulla.addEventListener("click",
    function() {
        // nascondo il biglietto
        document.getElementById("biglietto").classList.remove("open");

        //reset tutti i campi input
        document.getElementById('nome').value = "";
        document.getElementById('km').value = "";
        document.getElementById('fascia').value = "";
        iltuo.style.display = "none";
        
    }
);
