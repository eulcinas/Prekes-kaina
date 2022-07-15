"use strict"

do {
    var kaina = prompt("Kokia prekės kaina?")
    kaina = Number(kaina)
} while(isNaN(kaina)) {
    var bepvm = kaina / 121 * 100
    var pvm = kaina - bepvm
    var kaina1 = kaina.toFixed(2)
    var pvm1 = pvm.toFixed(2)
    var bepvm1 = bepvm.toFixed(2)
}

console.log("Prekės kaina su PVM: " + kaina1 + " €")
console.log("PVM: " + pvm1 + " €")    
console.log("Prekės kaina be PVM: " + bepvm1 + " €")

