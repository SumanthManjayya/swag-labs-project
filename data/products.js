const products = {
  backpack: {
    name: 'Sauce Labs Backpack',
    price: '$29.99',
    slug: 'sauce-labs-backpack',
  },
  bikeLight: {
    name: 'Sauce Labs Bike Light',
    price: '$9.99',
    slug: 'sauce-labs-bike-light',
  },
  onesie: {
    name: 'Sauce Labs Onesie',
    price: '$7.99',
    slug: 'sauce-labs-onesie',
  },
  fleeceJacket: {
    name: 'Sauce Labs Fleece Jacket',
    price: '$49.99',
    slug: 'sauce-labs-fleece-jacket',
  },
};

const sortOptions = {
  nameAsc: 'Name (A to Z)',
  nameDesc: 'Name (Z to A)',
  priceLowToHigh: 'Price (low to high)',
  priceHighToLow: 'Price (high to low)',
};

const sortedPricesLowToHigh = [
  '$7.99',
  '$9.99',
  '$15.99',
  '$15.99',
  '$29.99',
  '$49.99',
];

module.exports = { products, sortOptions, sortedPricesLowToHigh };
