// Starting in the top left corner of a 2 x 2 grid,
// and only being able to move to the right and down, 
// there are exactly 6 routes to the bottom right corner.
// How many such routes are there through a 20 x 20 grid?

function numberOfRoutes(x, y) {
    // easy way
    formula = factorialize(x  + y) / (factorialize(x) * factorialize(y))
    console.log(formula)
    return formula
}

function factorialize(num) {
    if (num < 0) 
        return -1;
    else if (num == 0) 
        return 1;
    else {
        return (num * factorialize(num - 1));
    }
}

numberOfRoutes(20, 20)