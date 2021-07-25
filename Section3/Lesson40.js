/**
 Entre 0-11: Bom dia (hora < 12)
 Entre 12 -17: Boa tarde(hora > 12 && hora < 17)
 Entre 17 - 23: Boa noite(hora > 17 && hora < 24) 
 */
const hora = 24

if (hora < 12) {
  console.log(`Bom dia!!`)
} else if (hora > 12 && hora <= 17) {
  console.log("Boa tarde!!")
} else if (hora > 17 && hora < 24) {
  console.log("Boa noite!!")
} else {
  console.log("Bom dia!")
}
