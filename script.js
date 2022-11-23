const items = [
    { name:"rice", price: 500 },
    { name:"beans", price: 340 },
    { name:"yam", price: 690 },
    { name:"peach", price: 5000 },
    { name:"grains", price: 50 },
    { name:"maize", price: 800 }
]

const filteredPrices = items.filter((prices) => {
    return prices.price <= 900
});

console.log(filteredPrices)