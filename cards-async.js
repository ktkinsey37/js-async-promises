// Get a single new card from a new deck
async function drawASingleCardFromNewDeck(){
    const newDeck = await axios.get("http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
    const newCard = await axios.get(`http://deckofcardsapi.com/api/deck/${newDeck.data.deck_id}/draw/?count=1`)
    console.log(`${newCard.data.cards[0].value} of ${newCard.data.cards[0].suit}`)
}

drawASingleCardFromNewDeck()


// Get 2 new cards from a new deck
async function draw2CardsFromNewDeck(){
    const newDeck = await axios.get("http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
    const newCard1 = await axios.get(`http://deckofcardsapi.com/api/deck/${newDeck.data.deck_id}/draw/?count=1`)
    const newCard2 = await axios.get(`http://deckofcardsapi.com/api/deck/${newDeck.data.deck_id}/draw/?count=1`)
    console.log(`${newCard1.data.cards[0].value} of ${newCard1.data.cards[0].suit}`)
    console.log(`${newCard2.data.cards[0].value} of ${newCard2.data.cards[0].suit}`)
}

draw2CardsFromNewDeck()


// Draw cards until deck is exhausted
async function setup(){
    const fullNewDeck = await axios.get("http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
    let deck_id = fullNewDeck.data.deck_id
    $('#button').click(async function(){
        try{
            const newCard = await axios.get(`http://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`)
            $("#image-box").attr("src", newCard.data.cards[0].image)
        }
        catch{
            $("#image-box").hide()
            $('#button').hide()
            console.log("No more cards in this deck!")
        }
    })
}

setup()





// The below solution doesn't work becuase it's asking to call an await at the top level.
// Surely there's a way to handle this without resorting to the nested monstrosity above? This is what I originally had:

// async function getNewDeck(){
//     const fullNewDeck = await axios.get("http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
//     let deck_id = fullNewDeck.data.deck_id
//     return(deck_id)
// }

// let fullNewDeck = await getNewDeck()

// $('#button').click(drawAllCardsFromNewDeck)

// async function drawAllCardsFromNewDeck(fullNewDeck){
//     try{
//         const newCard = await axios.get(`http://deckofcardsapi.com/api/deck/${fullNewDeck.data.deck_id}/draw/?count=1`)
//         $("#image-box").attr("src", newCard.data.cards[0].image)
//     }
//     catch{
//         $("#image-box").hide()
//         $('#button').hide()
//         console.log("No more cards in this deck!")
//     }
// }