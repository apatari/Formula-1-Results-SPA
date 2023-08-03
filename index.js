
document.addEventListener('DOMContentLoaded', () => initialize())

function initialize() {
    const year = document.querySelector('#year')
    year.addEventListener('change', () => {
        if (year.value){
            findRaces(year.value)
        }
        
    })
}

function findRaces(year) {
    document.getElementById('race').innerHTML = ''
    fetch(`http://localhost:3000/${year}`)
    .then(res => res.json())
    .then(data => data.forEach(addRace))
}

function addRace(race) {
    const option = document.createElement('option')
    option.value = race.id
    option.innerText = `${race.id} - ${race.raceName}`
    document.getElementById('race').append(option)
}