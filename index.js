const yearsDisplayed = 20

document.addEventListener('DOMContentLoaded', () => initialize())

function initialize() {
    fillYears()

    const year = document.querySelector('#year')
    year.addEventListener('change', () => {
        if (year.value){
            document.getElementById('submitRace').disabled = false
            findRaces(year.value)
            
        } else {
            document.getElementById('race').innerHTML = ''
            document.getElementById('submitRace').disabled = "true"
        }
        
    })

    document.getElementById('raceForm').addEventListener('submit', (e) => {
        e.preventDefault()
        findResults()
    })

    document.getElementById('latest').addEventListener('click', () => findLatest())

    loadVotes()
} 

function fillYears() {
    for(let i = 0; i < yearsDisplayed; i++){
        const element = document.createElement('option')
        element.value = 2023 - i
        element.innerText = `${2023 - i}`
        document.getElementById('year').append(element)
    }
}

function loadVotes() {
    
    fetch('http://localhost:3000/favorite')
    .then(res => res.json())
    .then(data => renderVotes(data))
}

function renderVotes(data) {
    document.getElementById('favList').innerHTML = ''

    data.forEach(race => {
        const element = document.createElement('div')
        element.className = "favItem"

        element.innerHTML = `
        <h2 class="gp">${race.name}</h2>
        <h3 class="race">Votes: ${race.votes}</h3>
        `

        const btn = document.createElement('button')
        btn.innerText = "Vote"
        btn.value = `${race.id}`
        btn.addEventListener('click', (e) => getVotes(e))
        element.append(btn)

        document.getElementById('favList').append(element)
    })
}

function getVotes(e) {
    const raceId = parseInt(e.target.value)
    
    fetch(`http://localhost:3000/favorite/${raceId}`)
    .then(res => res.json())
    .then(data => incrementVotes(data))
}

function incrementVotes(race) {
    
    fetch(`http://localhost:3000/favorite/${race.id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "votes": `${parseInt(race.votes) + 1}`
        }
        )
    })
    .then(res => res.json())
    .then(data => loadVotes())
    
}


function findLatest() {
    fetch('http://ergast.com/api/f1/2023/last/results.json')
    .then(res => res.json())
    .then(data => renderResults(data.MRData.RaceTable.Races[0]))
}


function findResults() {
    const year = document.getElementById('year').value
    const raceNumber = document.getElementById('race').value
    
    fetch(`http://ergast.com/api/f1/${year}/${raceNumber}/results.json`)
    .then(res => res.json())
    .then(data => renderResults(data.MRData.RaceTable.Races[0]))
}

function renderResults(data) {
    document.getElementById('results').innerHTML = ''
    const raceInfo = document.createElement('div')
    raceInfo.innerHTML = `
    <h2 id="resultsHeader">${data.season} ${data.raceName}</h2>
    `
    
    document.getElementById('results').append(raceInfo)

    data.Results.forEach((place) => {

        const position = document.createElement('div')
        position.innerHTML = `
        <hr>
        <h3>${place.position} - ${place.Driver.givenName} ${place.Driver.familyName}</h3>
        <h4>Team: ${place.Constructor.name}</h4>
        `
        position.className = 'position'
        const fast = document.createElement('p')
        if(place.FastestLap){            
            fast.innerText = `Fastest Lap: ${place.FastestLap.Time.time}`
            
        } else {
            fast.innerText = "No time set"
        } 
        position.append(fast)
        
        document.getElementById('results').append(position)
    })
}


function findRaces(year) {
    document.getElementById('race').innerHTML = ''
    fetch(`http://ergast.com/api/f1/${year}.json`)
    .then(res => res.json())
    .then(data => data.MRData.RaceTable.Races.forEach(addRace))
}

function addRace(race) {
    const day = new Date()
    const date_string = `${day.getFullYear()}-${day.getMonth() + 1}-${day.getDate()}`
    if(race.date < date_string){
        const option = document.createElement('option')
        option.value = race.round
        option.innerText = `${race.round} - ${race.raceName}`
        document.getElementById('race').append(option)
    }
    
}