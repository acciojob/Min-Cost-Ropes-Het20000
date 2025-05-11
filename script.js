function mincost(arr) {
    // Turn the array into a min-heap using sort
    arr.sort((a, b) => a - b);

    let cost = 0;

    while (arr.length > 1) {
        // Remove two smallest ropes
        let first = arr.shift();
        let second = arr.shift();

        let newRope = first + second;
        cost += newRope;

        // Insert the new rope and keep array sorted
        let index = arr.findIndex(x => x > newRope);
        if (index === -1) {
            arr.push(newRope);
        } else {
            arr.splice(index, 0, newRope);
        }
    }

    return cost;
}
