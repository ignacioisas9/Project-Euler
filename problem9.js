// A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
// a^2 + b^2 = c^2
// For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2
// There exists exactly one Pythagorean triplet for which a + b + c = 1000. Find the product abc.

function pythagoreanProduct(number){
    triplets = findTriplets(number)
    pythagoreanTriplets = []
    for (let i = 0; i < triplets.length; i++){
        if (Math.pow(triplets[i][0], 2) + Math.pow(triplets[i][1], 2) === Math.pow(triplets[i][2], 2)) {
            console.log(triplets[i])
            pythagoreanTriplets.push(triplets[i])
        }
    }
    if (pythagoreanTriplets.length !== 0) {
        for (let i = 0; i < pythagoreanTriplets.length; i++){
            if (pythagoreanTriplets[i][0] >= pythagoreanTriplets[i][1] || pythagoreanTriplets[i][1] >= pythagoreanTriplets[i][2]) {
                pythagoreanTriplets.splice(i, 1)
                console.log(pythagoreanTriplets)
            }
        }
    }
    else {
        return 0
    }
    console.log(pythagoreanTriplets[0][0] * pythagoreanTriplets[0][1] * pythagoreanTriplets[0][2])
    return pythagoreanTriplets[0][0] * pythagoreanTriplets[0][1] * pythagoreanTriplets[0][2]
}

function findTriplets(number){
    triplet = []
    triplets = []
    for (let i = 1; i < number; i++){
        for (let j = 1; j < number; j++) {
            for (let k = 1; k < number; k++) {
                if (i + j + k === number){
                    triplet.push(i, j, k)
                    triplets.push(triplet)
                    triplet = []
                }
            }
        }
    }
    return triplets
}

pythagoreanProduct(1000)