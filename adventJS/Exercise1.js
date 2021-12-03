// 01. Count sheeps to sleep
const ovejas = [
  { name: 'Noa', color: 'azul' },
  { name: 'Euge', color: 'rojo' },
  { name: 'Navidad', color: 'rojo' },
  { name: 'Ki Na Ma', color: 'rojo'}
];

export default function contarOvejas(ovejas) {
  const regex = /[n][a]/gi;
  return ovejas.filter(oveja => {
    if(oveja.color === 'rojo' && regex.test(oveja.name)) {
      return oveja;
    }
  })
}
const ovejasFiltradas = contarOvejas(ovejas)

console.log(ovejasFiltradas)

// OUtput
// [{ name: 'Navidad', color: 'rojo' },
//  { name: 'Ki Na Ma', color: 'rojo' }]