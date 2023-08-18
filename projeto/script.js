const convertButton = document.querySelector(".convert-button")


function convertvalues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currenyValueToConvert = document.querySelector(".currency-value-to-convert")//valor em real
    const currenyValueConverted = document.querySelector(".currency-value")//outras moedas


    const dolarToday = 5.2

    const convertedvalue = inputCurrencyValue / dolarToday


    currenyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"

    }).format(inputCurrencyValue)


    currenyValueConverted.innerHTML = new Intl.NumberFormat("en-US",{
        style:"currency",
        currency:"USD"
    }).format(convertedvalue)

    console.log(convertedvalue)


}




convertButton.addEventListener("click", convertvalues)