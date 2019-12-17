// Buy Low, Sell High -- Starter Code


// Stock Prices
var stockPrices = [1.32, 1.14, 1.45, 1.20, 1.34, 1.74, 1.18, 1.90, 1.1];


// Your Biggest Profit function
var biggestProfit = function(stockArray, sharesBought) {
    // Check to make sure the array is greater than 2
    if (stockArray.length > 2) {
        // Set up initial minPrice, can't buy earlier than first value
        var minPrice = stockArray[0];
        // Set our initial maxProfit, first opportunity to sell is second number
        var maxProfit = stockArray[1] - stockArray[0];
        // Loop over the array, skipping the first value, since its the minPrice and we can't sell whenn we buy
        for (var i = 1; i < stockArray.length; i++) {

            // Temp variable to hold the current price
            var currentPrice = stockArray[i];
            // potentialProfit is the currentPrice minus the the minPrice
            var potentialProfit = currentPrice - minPrice;
            // if maxProfit is less than the current potential profit, update the maxProfit
            if (maxProfit < potentialProfit) {
                maxProfit = potentialProfit;
            }
            // if minPrice is more than the currentPrice, update the minPrice
            if (minPrice > currentPrice) {
                minPrice = currentPrice;
            }
        }
        // OUTSIDE OF FOR LOOP

        // Multiply the maxProfit by the number of shares to get total, and return it
        return maxProfit * sharesBought;
    }
    // Else error stating that you need at least 2 prices.
    else {
        console.log("Error you need at least 2 prices");
    }
};

// A Call to your Biggest Profit function.
biggestProfit(stockPrices, 10000);

// NOTE: This should return 7600,
// because you could have bought it at 1.14 per share
// and then sold it at 1.90 per share.
// 1.90 - 1.14 = 0.76. 0.76 * 10000 is 7600.