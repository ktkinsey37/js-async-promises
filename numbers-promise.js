// Get Favorite Number Facts
let faveNumberSpace = $("#favorite-number-fact")
let faveURL = "http://numbersapi.com/12"
let favoriteNumberPromise = axios.get(faveURL, {
    headers: {
        'Content-Type': 'application/json'
    }})

favoriteNumberPromise.then(res => faveNumberSpace.append(res.data))




// Get Multiple Number Facts
let multNumberSpace = $("#multiple-number-facts")
 let multURL = "http://numbersapi.com/"
 let numbers = [1, 2, 4, 8, 0] // Insert whatever numbers desired into this array
 let newURL = multURL + numbers.toString()
 let multNumberPromise = axios.get(newURL, {
    headers: {
        'Content-Type': 'application/json'
    }})

// multNumberPromise.then(res => res.forEach(multNumberSpace.append(res.data))) This line doesn't work, but I'd be curious to talk through why

multNumberPromise.then(res => {
    for (fact in res.data){
        const li = document.createElement("li")
        li.innerHTML = res.data[fact]
        multNumberSpace.append(li)
    }
} )



// Get 4 Favorite Number Facts
let fave4NumberSpace = $("#four-number-facts")
let fave4URL = "http://numbersapi.com/12"
let favoriteNumber4Promise = axios.get(fave4URL, {
    headers: {
        'Content-Type': 'application/json'
    }})

favoriteNumber4Promise.then(res => {
    const li = document.createElement("li")
    li.innerHTML = res.data
    fave4NumberSpace.append(li)
    return axios.get(fave4URL)
}).then(res => {
    const li = document.createElement("li")
    li.innerHTML = res.data
    fave4NumberSpace.append(li)
    return axios.get(fave4URL)
}).then(res => {
    const li = document.createElement("li")
    li.innerHTML = res.data
    fave4NumberSpace.append(li)
    return axios.get(fave4URL)
}).then(res => {
    const li = document.createElement("li")
    li.innerHTML = res.data
    fave4NumberSpace.append(li)
    return axios.get(fave4URL)
})