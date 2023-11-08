// Types utilitaires
// 1.1 Une instance du type Person
var johnTerry = {
    firstname: "John",
    lastname: "Terry",
    age: 38,
    nationality: "English",
    isCool: true
};
// 2.1 Une instance du type PartialPerson
var cristianoRonaldo = {
    firstname: "Cristiano",
    nationality: "Portuguese"
};
// 3.1 Une instance du type RequiredPerson
var lionelMessi = {
    firstname: "Lionel",
    lastname: "Messi",
    age: 35,
    nationality: "Argentinian",
    isCool: true // la propriété isCool était optionnelle (isCool?), elle ne l'est plus puissque "Required".
};
// 4.1 Une instance du type OmitTheAgeAndTheNationality
var steevenGerrard = {
    firstname: "Steeven",
    lastname: "Gerrard",
    isCool: true
};
// 5.1 Une instance du type pickingFirstnameAndLastnameFromPersonType
var thiagoSilva = {
    firstname: "Thiago",
    lastname: "Silva"
};
// 6.1 Une instance du type playerPosition
var keylorNavas = "goalkeeper";
// 7.1 Différentes instances du type playersPositionWithoutGoalkeeper
var aDefender = "defender";
var aMidfielder = "midfielder";
var aStriker = "striker";
// 8.1 Différentes instances du type ExtractingStrikerAndDefenderFromPlayersPosition
var erlingHaaland = "striker"; // Que deux choix possibles : striker ou defender.
// 9.1 Une instance du type ReadOnlyPerson
var marcoVerratti = {
    firstname: "Marco",
    lastname: "Verratti",
    age: 31,
    nationality: "Italian",
    isCool: true
};
// 10.1 Une instance du type NonNullablePasta
var myFavoritePastas = "Carbonara"; // Impossible d'assigner à null ou undefined
