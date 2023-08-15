const convertButton = document.querySelector(".convert-button")


function  convertvalues(){
    const inputCurrencyValue = document.querySelector(".input-currency").value

    const dolarToday = 5.2

    const convertedvalue = inputCurrencyValue / dolarToday 

    console.log("inputCurrencyValue")
}




convertButton.addEventListener("click",  convertvalues)