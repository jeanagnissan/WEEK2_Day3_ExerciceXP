

// 1
const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}

// 2
console.log("nombre d'étages du bâtiment : " + building.numberOfFloors);

// 3
console.log("nombre d'appartements à l'étages 1 : " + building.numberOfAptByFloor.firstFloor);
console.log("nombre d'appartements l'étages 3 : " + building.numberOfAptByFloor.thirdFloor);

// 4
console.log("nom du deuxième locataire : " + building.nameOfTenants[1]);
console.log("nombre de pièces qu'il possède dans son appartement : " + building.numberOfRoomsAndRent.dan[0]);

// 4
let andRentSarah = building.numberOfRoomsAndRent.sarah[1];
let andRentDavid = building.numberOfRoomsAndRent.david[1];
let andRentDan = building.numberOfRoomsAndRent.dan[1];

// 5
if(andRentSarah + andRentDavid  > andRentDan){
    building.numberOfRoomsAndRent.dan[1] =  1200;
}

console.log(building);