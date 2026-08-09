/**
 * Parse a price string like "$29.99" into a number.
 * @param {string} price
 * @returns {number}
 */
function parsePrice(price) {
  return Number(price.replace('$', ''));
}

/**
 * Verify that a list of price strings is sorted in ascending order.
 * @param {string[]} prices
 * @returns {boolean}
 */
function isAscendingPriceOrder(prices) {
  const numericPrices = prices.map(parsePrice);
  return numericPrices.every(
    (price, index) => index === 0 || price >= numericPrices[index - 1],
  );
}

module.exports = { parsePrice, isAscendingPriceOrder };
