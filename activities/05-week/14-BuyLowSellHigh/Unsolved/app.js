
// Buy Low, Sell High -- Starter Code


// Stock Prices
var stockPrices = [1.32, 1.14, 1.45, 1.20, 1.34, 1.74, 1.18, 1.90, 1.1];


// Your Biggest Profit function
var biggestProfit = function(stockArray, sharesBought) {
// checkto make sure the array is greater than 2
if (stockArray.length > 2 ){


//set up an intial minPrice
var minPrice = stockArray[0];
//set out initial maxProfit
var maxProfit = stockArray[1] - stockArray[0];
//loop over (for loop) the array skipping the first value, since it is min price an cant sell
for (var i = 1; i <stoockArra.length; i ++){
//set temp hold to the current price value
    var currentPrice = stockArry[i];
//potientalProfit is the currentPrice - minPrice
    var potientalProfit = currentPrice - minPrice;
//if max profit is less than the current potiental profit , update max profit
    if (maxPrice > currentPrice) {
        minPrice= currentPrice;
    }
//if minPrice is more that currentPrice, update min price
    if (minPrice > currentPrice){
        minPrice = currentPrice;
    }
}
      //outside of the loop
// multiply the maxProfit by the number of shares to ge total and return it
    return maxPrice * sharesBought;
//else error stating that you need at least 2 prices

} else {
    console.log("Error you need at least 2 prices");
}

// A Call to your Biggest Profit function.
biggestProfit(stockPrices, 10000);

// NOTE: This should return 7600,
// because you could have bought it at 1.14 per share
// and then sold it at 1.90 per share.
// 1.90 - 1.14 = 0.76. 0.76 * 10000 is 7600.
