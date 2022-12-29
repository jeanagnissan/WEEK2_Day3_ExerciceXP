



let color = ["jaune", "blanc", "noir", "rouge", "orange"];


// 2 => Bouclez à travers le tableau et pendant que vous bouclez console.log une chaîne
for (let index = 0; index < color.length; index++) {
    console.log(`Mon choix n° ${index}  est ${color[index]}`);
}


// 3 
let sufixe = ["st", "nd", "rd", "th", "th"];
for (let index = 0; index < color.length; index++) {
    console.log(`Mon choix ${index}${sufixe[index]}  est ${color[index]}`);
}

