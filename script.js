function mincost(arr) {
  if (!arr || arr.length === 0) {
    return 0;
  }

  
  arr.sort((a, b) => a - b);

  let totalCost = 0;
  while (arr.length > 1) {
    
    const smallest1 = arr.shift();
    const smallest2 = arr.shift();


    const currentCost = smallest1 + smallest2;
    totalCost += currentCost;

    
    let inserted = false;
    for (let i = 0; i < arr.length; i++) {
      if (currentCost <= arr[i]) {
        arr.splice(i, 0, currentCost);
        inserted = true;
        break;
      }
    }
    if (!inserted) {
      arr.push(currentCost);
    }
  }

  return totalCost;
}