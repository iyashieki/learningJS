 class Currency {
    constructor(){
        this.url =  " https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_HxbhnCrlfw4PzXlGuELWJX2jEX6A9QimZMHSpkqb&base_currency=";

    }
    async exchange(amount, firstCurrency, secondCurrency){
        const response = await fetch(`${this.url}${firstCurrency}`);
        const result = await response.json();
        //console.log(result.data.secondCurrency);
        const exchangedResult = amount * result.data[secondCurrency];

        return exchangedResult;
    }
 }