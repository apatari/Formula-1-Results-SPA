
document.addEventListener('DOMContentLoaded', () => initialize())

function initialize() {
    const year = document.querySelector('#year')
    year.addEventListener('change', () => {
        if (year.value){
            findRaces(year.value)
        } else {
            document.getElementById('race').innerHTML = ''
        }
        
    })

    document.getElementById('raceForm').addEventListener('submit', (e) => {
        e.preventDefault()
        findResults()
    })
}
function findResults() {
    const year = document.getElementById('year').value
    const raceNumber = document.getElementById('race').value
    
    fetch(`http://localhost:3000/${year}/${raceNumber}`)
    .then(res => res.json())
    .then(data => renderResults(data))
}

function renderResults(data) {
    data.Results.forEach((place) => {
        if(place.FastestLap){
            console.log(`Fastest lap: ${place.FastestLap.Time.time}`)
        } else {
            console.log('No time set')
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