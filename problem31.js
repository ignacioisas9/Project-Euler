// In the United Kingdom the currency is made up of pound (£) and pence (p). There are eight coins in general circulation:
// 1p, 2p, 5p, 10p, 20p, 50p, £1 (100p), and £2 (200p).
// It is possible to make £2 in the following way:
// 1×£1 + 1×50p + 2×20p + 1×5p + 1×2p + 3×1p
// How many different ways can £2 be made using any number of coins?

const total = 200

// for 5 pences:
// 5
// 2 + 2 + 1
// 2 + 1 + 1 + 1
// 1 + 1 + 1 + 1 + 1
// 4 ways

// for 10 pences:
// 10
// 5 + 5
// 5 + 2 + 2 + 1
// 5 + 2 + 1 + 1 + 1
// 5 + 1 + 1 + 1 + 1 + 1
// 2 + 2 + 2 + 2 + 2
// 2 + 2 + 2 + 2 + 1 + 1
// 2 + 2 + 2 + 1 + 1 + 1 + 1
// 2 + 2 + 1 + 1 + 1 + 1 + 1 + 1
// 2 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1
// 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1
// 11 ways

function waysOfMakingTwoPounds(){
    let ways = 1
    const coins = [200, 100, 50, 20, 10, 5, 2, 1]
    for (let coin = 1; coin < coins.length; coin++){
        for (let i = 1; i < coins.length; i++){
            let sum = coins[coin]
            if (sum < total){
                sum += coins[i]
            } 
            if (sum === total){
                ways++
            }
        }
    }
    return ways
}

console.log(waysOfMakingTwoPounds())