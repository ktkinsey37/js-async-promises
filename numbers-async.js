// Get Favorite Number Facts
let faveNumberSpace = $("#favorite-number-fact")
let faveURL = "http://numbersapi.com/12"

async function oneFaveNumFact(){
    faveFact = await axios.get(faveURL, {
        headers: {
            'Content-Type': 'application/json'
        }})
    faveNumberSpace.append(faveFact.data)
}

oneFaveNumFact()




// Get Multiple Number Facts
let multNumberSpace = $("#multiple-number-facts")
let multURL = "http://numbersapi.com/"
let numbers = [1, 2, 4, 8, 0] // Insert whatever numbers desired into this array
let newURL = multURL + numbers.toString()
async function multNumFacts(){
    multFacts = await axios.get(newURL, {
        headers: {
            'Content-Type': 'application/json'
}})
for (fact in multFacts.data){
    const li = document.createElement("li")
    li.innerHTML = multFacts.data[fact]
    multNumberSpace.append(li)
}}

multNumFacts()


// Get 4 Favorite Number Facts
let fave4NumberSpace = $("#four-number-facts")
let fave4URL = "http://numbersapi.com/12"

async function faveNum4Facts(){
    let fact = await axios.get(fave4URL, {
        headers: {
            'Content-Type': 'application/json'
        }})
    const li = document.createElement("li")
    li.innerHTML = fact.data
    fave4NumberSpace.append(li)
}

faveNum4Facts()
faveNum4Facts()
faveNum4Facts()
faveNum4Facts()