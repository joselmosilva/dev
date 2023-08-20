
const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")


function convertvalues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currenyValueToConvert = document.querySelector(".currency-value-to-convert")//valor em real
    const currenyValueConverted = document.querySelector(".currency-value")//outras moedas

    


    const dolarToday = 5.2
    const euroToday = 6.2

    

    if(currencySelect.valeu =="dolar"){
        currenyValueConverted.innerHTML = new Intl.NumberFormat("en-US",{
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)


    }
    if(currencySelect.valeu =="euro"){
        currenyValueConverted.innerHTML = new Intl.NumberFormat("de-DE",{
            style: "currency",
            currency:"EUR"
        }).format(inputCurrencyValue / euroToday)

    }


    currenyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"

    }).format(inputCurrencyValue)


   

   




}




convertButton.addEventListener("click", convertvalues)