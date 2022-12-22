


// document.write("Vusal")
// document.write("Xumar")
// document.write("Aysel")
// document.write("Hafiz")
// document.write("Fatime")


var names = [
    "Vusal",
    "Xumar",
    "Aysel",
    "Hafiz",
    "Fatime"
]


// var person = ["Adile","Aynur","Tahire","Fenomen","Venom"]


var travel = [
    ["Vusal","Hafiz","Rza"],
    ["Xumar","Aysel","Fatime",
        [
        'Tahire ve Aynur', true, "2+2", [
            "Maraqlı"
        ],
        ],
        ["IATC","ADNSU"]
    ],
    ["Azərbaycan","Italiya","Argentina","Türkiyə"]
]

console.log(travel[2][0][0])
console.log(travel[2][3][5])
console.log(travel[0][0][2])
console.log(travel[1][2][5])
console.log(travel[1][3][3][0][6])
// Xumar,ADNSU,IATC
// Menim adim Xumardir. Men ADNSU telebesiyem ve IATCde tehsil aliram.

console.log("menim adim"+" " + travel[1][2]+"dir."+"Men"+" "+travel[1][4][1]+" telebesiyem"+" ve "+travel[1][4][0]+"de tehsil aliram.")
// Azərbaycan = A
// Türkiyə    = y
// Vusal      = s
// Fatime     = e
// Maraqlı    = l

// console.log(travel[1][4][1])

// console.log(person[1]+" "+names[3] +" - "+names[3][0])

// console.log("Men "+names[2]+" ve "+names[4]+" super refiqeyik.")