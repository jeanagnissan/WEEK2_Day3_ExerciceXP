


/**
 * Créez un objet appelé famille avec quelques paires clé-valeur.
A l' aide d'une for inboucle, console.log les clés de l'objet.
À l' aide d'une for inboucle, console.log les valeurs de l'objet.
 */


// 1
let famille =  {
    papa : "ALex",
    maman: "Jeanne",
    nbrEnfant: 4,
    anneMariage: 14
}


// 2
for (const key in famille) {
    console.log(key);
}


// 3
for (const key in famille) {
    console.log(famille[key]);
}


