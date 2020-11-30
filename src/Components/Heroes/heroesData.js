import warriorImg from "../../Assets/img/heroes/warrior.png";
import mageImg from "../../Assets/img/heroes/mage.png";
import archerImg from "../../Assets/img/heroes/archer.png";

let heroData = {
    warrior: {
        img: warriorImg,
        alt: "Warrior with shield and sword",
        exp: 0,
        level: 1,
        name: "Roirroaw",
        stats: {
            hp: 180,
            tp: 65,
            mp: 25
        },
        skills: [
            {
                name: "Heavenly Slash",
                dmg: 5
            }
        ]
    },
    mage: {
        img: mageImg,
        exp: 0,
        level: 1,
        name: "Egam",
        stats: {
            hp: 90,
            tp: 10,
            mp: 80
        },
        skills: [
            {
                name: "Arcana Blast",
                dmg: 8
            }
        ]
    },
    archer: {
        img: archerImg,
        exp: 0,
        level: 1,
        name: "Rehcra",
        stats: {
            hp: 130,
            tp: 65,
            mp: 45
        },
        skills: [
            {
                name: "Dragon Pierce",
                dmg: 7
            }
        ]
    }
}

export default heroData;