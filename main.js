const userFullNameInput = document.querySelector(".userFullNameInput");


const numberKmInput = document.querySelector(".travelKm");


const passengerAgeInput = document.querySelector(".age");


const generateButton = document.querySelector(".generate");
generateButton.addEventListener("click",
    function () {
        let userFullNameValue = userFullNameInput.value;
        document.querySelector(".userFullName").innerHTML = userFullNameValue;

        let offer = "Standard Price"
        let priceKm = 0.21;
        let numberKm = numberKmInput.value;
        let travelPrice = numberKm * priceKm;
        let passengerAge = passengerAgeInput.value;

        if (passengerAge < 18) {
            let percentage = (travelPrice * 20) / 100;
            travelPrice = (travelPrice - percentage).toFixed(2);
            offer = "Discount Price";
            console.log("prezzo scontato per minoreni", travelPrice + '€');


        } else if (passengerAge < 65) {
            travelPrice = numberKm * priceKm;
            console.log("prezzo senza nessun tipo di sconto, intero", travelPrice + '€');

        } else {
            let percentage = (travelPrice * 40) / 100;
            travelPrice = (travelPrice - percentage).toFixed(2);
            offer = "Discount Price";
            console.log("prezzo scontato per over 65", travelPrice + '€');

        }

        document.querySelector(".offer").innerHTML = offer;

        let carriage = Math.floor(Math.random() * 10);
        document.querySelector(".carriage").innerHTML = carriage;

        let cp = Math.floor(Math.random() * 9999);
        document.querySelector(".cp").innerHTML = cp;

        document.querySelector(".cost").innerHTML = travelPrice + '€';

    }
);

const cancelButton = document.querySelector(".cancel");
cancelButton.addEventListener("click",
    function () {
        passengerAgeInput.value = "";
        userFullNameInput.value = "";
        numberKmInput.value = "";

    }
);