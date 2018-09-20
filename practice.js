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

console.log('returns 2', makeChange(14, [10, 7, 1]));