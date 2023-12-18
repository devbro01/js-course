// vaqtlar,sana,secund - date

const now = new Date();

const today = now.getDate() < 10 ? "0" + now.getDate() : now.getDate();
const month = now.getMonth() < 10 ? "0" + now.getMonth() : now.getMonth();
const year = now.getFullYear();

console.log(`Bugun: ${today}, Oy: ${month}, Yil: ${year}`)
console.log(`Soat ${now.getHours()} : Minut ${now.getMinutes()} : Sekund ${now.getSeconds()}`)