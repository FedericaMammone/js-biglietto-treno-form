// variabili globali
const costoAlKm = 0.21;
let kmDaPercorrere, anni;

// CALCOLO DEL PREZZO DEL BIGLIETTO DEL TRENO
// chiede all'utente quanti chilometri vuole percorrere
// let kmDaPercorrere = parseInt(prompt("Quanti km vuoi percorrere?"));
// console.log(kmDaPercorrere);

// chiedere all'utente l'eta
// let anni = parseInt(prompt("Quanti anni hai?"));
// console.log(anni);

// calcolare prezzo biglietto
let prezzoBiglietto = costoAlKm * kmDaPercorrere;
console.log(prezzoBiglietto);

// verificare la fascia di età

// se ha dai 17 anni in giù, applicare sconto del 20%
    // quindi calcolare prezzo da togliere
    if (anni <= 17) {
        let scontoDaFare = (prezzoBiglietto / 100) * 20;
        
        // quindi sottrarre lo sconto al prezzo biglietto
        let prezzoFinale1 = (prezzoBiglietto - scontoDaFare);
        console.log(prezzoFinale1);

        // Fornire messaggio all'utente
        messaggio = `Il prezzo del tuo biglietto è ${prezzoBiglietto.toFixed(2)}€, tuttavia, essendo minore di 18 anni, riceverai uno sconto del 20% quindi il nuovo totale è ${prezzoFinale1.toFixed(2)}€`;
    
    } else if (anni >= 65) { 
        // se ha dai 65 anni in su, applicare sconto del 40%
        // quindi calcolare prezzo da togliere
        let scontoDaFare = (prezzoBiglietto / 100) * 40;
        
        // quindi sottrarre lo sconto al prezzo biglietto
        let prezzoFinale2 = (prezzoBiglietto - scontoDaFare);
        console.log(prezzoFinale2);
        
        // Fornire messaggio all'utente
        messaggio = `Il prezzo del tuo biglietto è ${prezzoBiglietto.toFixed(2)}€, tuttavia, avendo un'età superiore ai 65 anni, riceverai uno sconto del 40% quindi il nuovo totale è ${prezzoFinale2.toFixed(2)}€`;
    
    } else {
        messaggio = `Il prezzo del tuo biglietto è ${prezzoBiglietto.toFixed(2)}€`;
    }
    

    document.getElementById("mio_id").innerHTML = messaggio;
    

    //----------------------


    document.getElementById("name").value = "";
    console.log(value);
