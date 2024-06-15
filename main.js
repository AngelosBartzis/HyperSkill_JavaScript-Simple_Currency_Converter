// Welcome to the Currency Converter!
// We have imported the 'sync-input' package for you.
// You will use this in later stages.
// This package allows you to get user input.
// Like so:
// let name = input("Type your name: ");
// let age = Number(input("Type your age: "));
const input = require('sync-input');
// Write your code here


//START OF STAGE 2.

/*const currencies = {
    USD: 1.0,
    JPY: 113.5,
    EUR: 0.89,
    RUB: 74.36,
    GBP: 0.75
};

const converter = () => {
console.log(`Welcome to Currency Converter!
1 USD equals 1 USD
1 USD equals 113.5 JPY
1 USD equals 0.89 EUR
1 USD equals 74.36 RUB
1 USD equals 0.75 GBP
I can convert USD to these currencies: JPY, EUR, RUB, USD, GBP
Type the currency you wish to convert: USD`);
const currencyFrom = input("To: ").toUpperCase();
    if (currencies[currencyFrom] === undefined) {
        console.log("Unknown currency");
    } else {
        const amount = Number(input("Amount: "));
      if (isNaN(amount)) {
            console.log("The amount has to be a number");
        } else if (amount < 1) {
            console.log("The amount cannot be less than 1");
        } else {
            const result = amount * currencies[currencyFrom];
            console.log(`Result: ${amount} USD equals ${result.toFixed(4)} ${currencyFrom}`);
        }
    }
}

converter();*/

//END OF STAGE 2.


//START OF STAGE 3.

/*const currencies = {
    USD: 1.0,
    JPY: 113.5,
    EUR: 0.89,
    RUB: 74.36,
    GBP: 0.75
};

const converter = () => {
console.log(`Welcome to Currency Converter!
1 USD equals 1 USD
1 USD equals 113.5 JPY
1 USD equals 0.89 EUR
1 USD equals 74.36 RUB
1 USD equals 0.75 GBP
What do you want to convert?`);
const currencyFrom = input("From: ").toUpperCase();
    if (currencies[currencyFrom] === undefined) {
        console.log("Unknown currency");
    } else {
    const currencyTo = input("To: ").toUpperCase();
    if (currencies[currencyTo] === undefined) {
        console.log("Unknown currency");
    } else {
        const amount = Number(input("Amount: "));
      if (isNaN(amount)) {
            console.log("The amount has to be a number");
        } else if (amount < 1) {
            console.log("The amount cannot be less than 1");
        } else {
            const result = amount / currencies[currencyFrom] * currencies[currencyTo];
            console.log(`Result: ${amount} ${currencyFrom} equals ${result.toFixed(4)} ${currencyTo}`);
        }
    }
  }
}

converter();*/

//END OF STAGE 3.

const currencies = {
    USD: 1.0,
    JPY: 113.5,
    EUR: 0.89,
    RUB: 74.36,
    GBP: 0.75
};

const converter = () => {
console.log(`Welcome to Currency Converter!
1 USD equals 1 USD
1 USD equals 113.5 JPY
1 USD equals 0.89 EUR
1 USD equals 74.36 RUB
1 USD equals 0.75 GBP`);
    while (true) {
  const answer = Number(input(`What do you want to do?
1-Convert currencies 2-Exit program\n`));
        if (answer === 2) {
            console.log("Have a nice day!");
            break;
        } else if (answer !== 2 && answer !== 1) {
            console.log("Unknown input");
        } else if (answer === 1) {
            console.log("What do you want to convert?");
            const currencyFrom = input("From: ").toUpperCase();
            if (currencies[currencyFrom] === undefined) {
                console.log("Unknown currency");
            } else {
                const currencyTo = input("To: ").toUpperCase();
                if (currencies[currencyTo] === undefined) {
                    console.log("Unknown currency");
                } else {
                    const amount = Number(input("Amount: "));
                    if (isNaN(amount)) {
                        console.log("The amount has to be a number");
                    } else if (amount < 1) {
                        console.log("The amount cannot be less than 1");
                    } else {
                        const result = amount / currencies[currencyFrom] * currencies[currencyTo];
                        console.log(`Result: ${amount} ${currencyFrom} equals ${result.toFixed(4)} ${currencyTo}`);
                    }
                }
            }
        }
    }
}

converter();