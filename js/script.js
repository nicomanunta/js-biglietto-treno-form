// prompt per richiedere l'età
// let eta = document.getElementById("eta").innerHTML
// console.log(eta)
// // prompt per richiedere numero di km da percorrere
// let chilometri =
// console.log(numero_km)
// calcolare il prezzo del viaggio moltiplicando il numero dei km per il prezzo al km 0.21 € 




// let sconto;
// let message;
// if (eta < 18){
//     message = "Hai diritto ad uno sconto del 20%. Prezzo: "
//     let biglietto_scontato = biglietto - biglietto * 20 / 100
//     console.log(biglietto_scontato)
//     // limitare le cifre decimali fino a centesimi
//     let biglietto_finale = biglietto_scontato.toFixed(2)
//     console.log(biglietto_finale)
    
    
// }
// else if (eta > 65){
//     message = "Hai diritto ad uno sconto del 40%. Prezzo: "
//     let biglietto_scontato = biglietto - biglietto * 40 / 100
//     console.log(biglietto_scontato)
//     // limitare le cifre decimali fino a centesimi
//     let biglietto_finale = biglietto_scontato.toFixed(2)
//     console.log(biglietto_finale)
// }
// else{
//     biglietto = chilometri * 0.21;
//     // limitare le cifre decimali fino a centesimi
//     let biglietto_finale = biglietto.toFixed(2)
//     console.log(biglietto_finale)
    
// }



let button = document.querySelector(".btn")
button.addEventListener("click", function(){

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
     
        
    }
    else if (eta > 65){
        message = "Hai diritto ad uno sconto del 40%. Prezzo: "
        let biglietto_scontato = biglietto - biglietto * 40 / 100
        console.log(biglietto_scontato)
        // limitare le cifre decimali fino a centesimi
        let biglietto_finale = biglietto_scontato.toFixed(2)
        console.log(biglietto_finale)
    }
    else{
        biglietto = chilometri * 0.21;
        // limitare le cifre decimali fino a centesimi
        let biglietto_finale = biglietto.toFixed(2)
        console.log(biglietto_finale)
        
    }
})


