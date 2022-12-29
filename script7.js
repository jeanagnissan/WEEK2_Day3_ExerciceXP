

const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

// 2
let stockFirst = "";
for (const name of names.sort()) {
    console.log(name);
    stockFirst  =  stockFirst + name[0];
}

console.log(stockFirst);