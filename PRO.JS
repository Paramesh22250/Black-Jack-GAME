function randomcard() {
    return Math.floor(Math.random() * 13) + 1
}
let sum = 0
let cards=[]
let c = document.getElementById("c")
let s = document.getElementById("s")
let p = document.getElementById("content")
function startgame(){
    bj=false
    isAlive = true
    let c1 = randomcard()
    let c2 = randomcard()
    cards = [c1, c2]
    sum=c1+c2
    game()
}
function game() {
    c.textContent="CARDS :"
    for (let i = 0; i < cards.length; i++) {
        c.textContent += cards[i] + " "
    }
    s.textContent="SUM :"+sum
    su()
}

function newc() {
    if (isAlive===true && bj===false) {
        let ncard = randomcard()
        cards.push(ncard)
        sum+=ncard
        game()
    }
}
function su() {
    if (sum < 21) {
        p.textContent = "Do you want to pick a new card"
    }
    else if (sum === 21) {
        p.textContent = "you won the Game"
        bj=true
    }
    else {
        p.textContent = "you are out of Game"
        isAlive = false
    }
}