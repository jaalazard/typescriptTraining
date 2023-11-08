// Types utilitaires

// 1. Un type
type Person = {
    firstname: string,
    lastname: string,
    age: number | null,
    nationality: string,
    isCool?: boolean
}

// 1.1 Une instance du type Person
const johnTerry: Person = {
    firstname: "John",
    lastname: "Terry",
    age: 38,
    nationality: "English",
    isCool: true
}

// 2. Partial (Rend optionnelles toutes les propriétés du type servant de base.)
type PartialPerson = Partial<Person>;

// 2.1 Une instance du type PartialPerson
const cristianoRonaldo: PartialPerson = {
    firstname: "Cristiano",
    nationality: "Portuguese"
}

// 3. Required (Rend obligatoires toutes les propriétés du type servant de base. Le contraire de Partial.)
type RequiredPerson = Required<Person>;

// 3.1 Une instance du type RequiredPerson
const lionelMessi: RequiredPerson = {
    firstname: "Lionel",
    lastname: "Messi",
    age: 35,
    nationality: "Argentinian",
    isCool: true // la propriété isCool était optionnelle (isCool?), elle ne l'est plus puissque "Required".
}

// 4. Omit (Crée un nouveau type depuis le type de base, en omettant les propriétés mentionnées.)
type OmitTheAgeAndTheNationality = Omit<Person, "age" | "nationality">

// 4.1 Une instance du type OmitTheAgeAndTheNationality
const steevenGerrard: OmitTheAgeAndTheNationality = {
    firstname: "Steeven",
    lastname: "Gerrard",
    isCool: true
}

// 5 Pick (Crée un nouveau type depuis le type de base, contenant seulement les propriétés mentionnées. Le contraire de Omit.)
type PickingFirstnameAndLastnameFromPersonType = Pick<Person, "firstname" | "lastname">;

// 5.1 Une instance du type pickingFirstnameAndLastnameFromPersonType
const thiagoSilva: PickingFirstnameAndLastnameFromPersonType = {
    firstname: "Thiago",
    lastname: "Silva"
}

// 6. Union type (Crée un type dont les assignations possibles sont restreintes à une liste)
type PlayerPosition = "goalkeeper" | "defender" | "midfielder" | "striker";

// 6.1 Une instance du type playerPosition
const keylorNavas: PlayerPosition = "goalkeeper";
// const carloAncelotti: playerPosition = "Coach"; // Impossible, "coach n'est pas dans la liste"

// 7. Exclude (Crée un type à partir d'un Union Type, en excluant certaines valeurs de la liste)
type PlayersPositionWithouGoalkeeper = Exclude<PlayerPosition, "goalkeeper">;

// 7.1 Différentes instances du type playersPositionWithoutGoalkeeper
const aDefender: PlayersPositionWithouGoalkeeper = "defender";
const aMidfielder: PlayersPositionWithouGoalkeeper = "midfielder";
const aStriker: PlayersPositionWithouGoalkeeper = "striker";
// const aGoalkeeper: PlayersPositionWithouGoalkeeper = "goalkeeper"; // Impossible, "goalkeeper" a été exclu de la liste.

// 8. Extract (Crée un type à partir d'un Union Type, en conservant seulement certaines valeurs de la liste. Inverse de Exclude.)
type ExtractingStrikerAndDefenderFromPlayersPosition = Extract<PlayerPosition, "striker" | "defender">;

// 8.1 Différentes instances du type ExtractingStrikerAndDefenderFromPlayersPosition
const erlingHaaland: ExtractingStrikerAndDefenderFromPlayersPosition = "striker"; // Que deux choix possibles : striker ou defender.

// 9. Readonly (Crée un nouveau type en lecture seule, à partir d'un autre type)
type ReadOnlyPerson = Readonly<Person>;

// 9.1 Une instance du type ReadOnlyPerson
const marcoVerratti: ReadOnlyPerson = {
    firstname: "Marco",
    lastname: "Verratti",
    age: 31,
    nationality: "Italian",
    isCool: true
}

// marcoVerratti.age = 32; // Impossible, car marcoVerratti est du type ReadOnlyPerson, non le modifiable après assignation.

// 10. NonNullable (Crée un type depuis un autre, en excluant null et undefined. Garantie que des valeurs seront attribuées)
type Pastas = "Carbonara" | "Pesto" | "Bolognese" | undefined | null;
type NonNullablePastas = NonNullable<Pastas>;

// 10.1 Une instance du type NonNullablePasta
const myFavoritePastas: NonNullablePastas = "Carbonara"; // Impossible d'assigner à null ou undefined

