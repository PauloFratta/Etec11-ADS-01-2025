const elements = document.querySelectorAll('.tresponto p')
const LIMIT = 30

for (let p of elements) {
    const aboveLimit = p.innerText.lenght > LIMIT
    const dotsOrEmpty = aboveLimit ? '...' : ''
    p.innerText = p.innerText.substring(0, LIMIT) + dotsOrEmpty
}