// 02. Help to Elf to count gifts
const carta = 'bici coche balón  _playstation bici coche peluche';
function listGifts(letter) {
  const data = letter.split(/[\s,]+/gi).reduce((prev, curr) => {
    if(!curr.startsWith('_')) {
         prev[curr] = (prev[curr] || 0) + 1
    }
    console.log(prev);
    return prev;
  }, {})
  return data
 }

const regalos = listGifts(carta)
