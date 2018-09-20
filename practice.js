//check for 0 modulo
//puts modulos in object 

function makeChange(amt, coins){
    if (coins.length === 0) return NaN;
    if (coins.length === 1){
        if (amt % coins[0] === 0) return amt / coins;
        else return NaN;
    }
    let obj = {};
    coins.sort((a,b) => b - a);
    let minChange = Number.MAX_SAFE_INTEGER;
    coins.forEach((num) => {
        if(amt % num === 0){
            let change = amt / num;
            if (change < minChange) minChange = change;
        }else {
           return; 
        }
    });
}

const makeChange2 = (n, coins) => {
    const numOfCoins = (new Array(n + 1)).fill(Infinity);
    numOfCoins[0] = 0;
    coins.forEach(coin => {
      for (let amount = 0; amount < numOfCoins.length; amount++) {
        if (coin <= amount) {
          numOfCoins[amount] = Math.min(numOfCoins[amount], numOfCoins[amount - coin] + 1);
        }
      }

    });
    return numOfCoins[n] !== Infinity ? numOfCoins[n] : NaN;
  };

console.log('returns 2', makeChange2(14, [10, 7, 1]));
console.log('returns 2', makeChange2(4, [3, 1, 2]));