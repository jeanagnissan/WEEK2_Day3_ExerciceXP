


// Partie I - Examen Des Tableaux

const people = ["Greg", "Mary", "Devon", "James"];
console.log(people);

// Écrivez du code pour supprimer "Greg" du peopletableau.
people.shift();
console.log(people);

// Écrivez le code pour remplacer "James" par "Jason".
people[3] = "Jason";
console.log(people);

//Écrivez du code pour ajouter votre nom à la fin du peoplet ableau.
people.push("Agnissan");
console.log(people);

//Écrivez le code qui console.logs l'index de Mary
console.log(people.indexOf("Mary"));

// Écrivez du code pour faire une copie du people tableau
console.log(people.slice(1,4));

// Écrivez le code qui donne l'index de "Foo
console.log(people.indexOf("Foo"));
/* 6
 il renvoie -1 car la chaine Foo ne se trouve pas dans le tableau people
 */

// Créez une variable appelée lastdont la valeur est le dernier élément du tableau
let last =  people[people.length - 1];



// Partie II - Boucles

// À l'aide d'une boucle, parcourez le peopletableau et console.log chaque personne.
for (const item of people) {
    console.log(item);
}

// À l'aide d'une boucle, parcourez le peopletableau et quittez la boucle après avoir console.log "Jason"
let i = 0;
while (i < people.length) {
  if (people[i] == "Jason") {
    console.log(people[i]);
    break;
  } 
  i++;
}














