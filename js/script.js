
let button = document.querySelector(".btn")
button.addEventListener("click", function(){
    let nome = document.getElementById("nome").value
    let cognome = document.getElementById("cognome").value
    let chilometri = document.getElementById("chilometri").value
    let eta = document.getElementById("eta").value;
    let biglietto = chilometri * 0.21

    if (eta < 18){
        message = "Hai diritto ad uno sconto del 20%. Prezzo: "
        let biglietto_scontato = biglietto - biglietto * 20 / 100
        console.log(biglietto_scontato)
        // limitare le cifre decimali fino a centesimi
        let biglietto_finale = biglietto_scontato.toFixed(2)
        console.log(biglietto_finale)
        document.getElementById("biglietto").innerHTML = message + biglietto_finale + "€";

        
    }
    else if (eta > 65){
        message = "Hai diritto ad uno sconto del 40%. Prezzo: "
        let biglietto_scontato = biglietto - biglietto * 40 / 100
        console.log(biglietto_scontato)
        // limitare le cifre decimali fino a centesimi
        let biglietto_finale = biglietto_scontato.toFixed(2)
        console.log(biglietto_finale)
        document.getElementById("biglietto").innerHTML = message + biglietto_finale + "€";

    }   
    else{
        biglietto = chilometri * 0.21;
        // limitare le cifre decimali fino a centesimi
        let biglietto_finale = biglietto.toFixed(2)
        console.log(biglietto_finale)
        document.getElementById("biglietto").innerHTML = biglietto_finale + "€";

    }
    let dati = `${nome} ${cognome}`
    document.getElementById("dati").innerHTML = dati
   

})


