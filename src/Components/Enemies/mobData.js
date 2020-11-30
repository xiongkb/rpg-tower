import bat from "../../Assets/img/enemies/bat.png"
import batKing from "../../Assets/img/enemies/batKing.png"
import carrot from "../../Assets/img/enemies/carrot.png"
import carrotKing from "../../Assets/img/enemies/carrotKing.png"
import eyeball from "../../Assets/img/enemies/eyeball.png"
import eyeballKing from "../../Assets/img/enemies/eyeballKing.png"
import mushroom from "../../Assets/img/enemies/mushroom.png"
import mushroomKing from "../../Assets/img/enemies/mushroomKing.png"

let monsterData = {
    bat: {
        img: bat,
        name: "Batti",
        hp: 65,
        bdmg: 5,
    },
    batKing: {
        img: batKing,
        name: "King Battias",
        hp: 350,
        bdmg: 25,
    },
    carrot: {
        img: carrot,
        name: "Carroka",
        hp: 90,
        bdmg: 2,
    },
    carrotKing: {
        img: carrotKing,
        name: "King Vitmina",
        hp: 420,
        bdmg: 18,
    },
    eyeball: {
        img: eyeball,
        name: "Icu",
        hp: 38,
        bdmg: 12,
    },
    eyeballKing: {
        img: eyeballKing,
        name: "King Itenticle",
        hp: 240,
        bdmg: 62,
    },
    mushroom: {
        img: mushroom,
        name: "Mushee",
        hp: 57,
        bdmg: 7,
    },
    mushroomKing: {
        img: mushroomKing,
        name: "King Murumspor",
        hp: 666,
        bdmg: 13,
    },
};

export default monsterData;