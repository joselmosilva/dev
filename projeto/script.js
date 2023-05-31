const convertButton = document.querySelector(".convert-button")

function convertValues(){
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const CurrencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const CurrencyValueConverted = document.querySelector(".currency-value-converted")


    const dolarToday = 5.2

    const convertdValue = inputCurrencyValue / dolarToday


    CurrencyValueToConvert. innerHTML = new Intl.NumberFormat("pt-BR", {
        style:"currency",
        currency:"BRL"
    }).format(inputCurrencyValue)


    CurrencyValueConverted. innerHTML = new Intl.NumberFormat("en-US", {
        style:"currency",
        currency:"USD"
    }).format(convertdValue)


    



    
}


convertButton.addEventListener("click",convertValues)
