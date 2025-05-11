function mincost(arr) {
    arr.sort((a, b) => a - b);
    let cost = 0;

    while (arr.length > 1) {
        let first = arr.shift();
        let second = arr.shift();
        let sum = first + second;
        cost += sum;

        // Insert in sorted position
        let index = arr.findIndex(x => x > sum);
        if (index === -1) {
            arr.push(sum);
        } else {
            arr.splice(index, 0, sum);
        }
    }

    return cost;
}

module.exports = { mincost };
