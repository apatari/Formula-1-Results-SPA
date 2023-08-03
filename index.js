
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

        const position = document.createElement('div')
        position.innerHTML = `
        <hr>
        <h3>${place.position} - ${place.Driver.givenName} ${place.Driver.familyName}</h3>

        `

        // if(place.FastestLap){
        //     const fast = place.FastestLap.Time.time
        // } else {
        //     const fast = "No time set"
        // } //Use this logic to add the value to the fastest lap time
        
        document.getElementById('results').append(position)
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