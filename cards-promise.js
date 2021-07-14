// Get a single new card from a new deck
let newDeckPromise = axios.get("http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
newDeckPromise.then(res => {deck_id = res.data.deck_id
    return axios.get(`http://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`)})
    .then(res => console.log(`${res.data.cards[0].value} of ${res.data.cards[0].suit}`))


// Get 2 new cards from a new deck
let newerDeckPromise = axios.get("http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
newerDeckPromise.then(res => {deck_id = res.data.deck_id
    return axios.get(`http://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`)})
    .then(res => {console.log(`${res.data.cards[0].value} of ${res.data.cards[0].suit}`)
    return axios.get(`http://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`)})
    .then(res => {console.log(`${res.data.cards[0].value} of ${res.data.cards[0].suit}`)})

// Draw cards until deck is exhausted
let newestDeckPromise = axios.get("http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
$('#button').click(function(){
    newestDeckPromise.then(res => {deck_id = res.data.deck_id
    return axios.get(`http://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`)})
    .then(res => $("#image-box").attr("src", res.data.cards[0].image))
    .catch(err => {$("#image-box").hide()
                   $('#button').hide()
                   console.log("No more cards in this deck!")})
})