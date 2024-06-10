let random_number = Math.floor(Math.random()*100+1)

const submit = document.querySelector("#subt") 
const user_input = document.querySelector("#guessField") 
const guess_slot = document.querySelector(".guesses") 
const remaining = document.querySelector(".lastResult") 
const low_or_high= document.querySelector(".lowOrHi")
const start_over= document.querySelector(".resultParas")


const p = document.createElement("p")

let prev_guess = []
let num_guess = 1
let play_game = true

if (play_game) {
    submit.addEventListener("click", function(e){
        e.preventDefault()
        const guess = parseInt(user_input.value)
        console.log(guess);
        validate_guess(guess)
    })
}

function validate_guess(guess) {
    if (isNaN(guess)) {
        alert("please enter a valid number")
    } else if(guess<1){
        alert("please enter a number more than 1")
    } else if (guess>100){
        alert("please enter a number more than 100")
    } else {
        prev_guess.push(guess)
        console.log(prev_guess);
        if (num_guess >= 2) {
            display_guess(guess)
            display_message(`game over. Random number was ${random_number}`)
            end_game()
        } else {
            display_guess(guess)
            check_guess(guess)
        }
    }
}



function check_guess(guess) {
    if (guess === random_number) {
        display_message("you guessed it right")
        end_game()
    } else if (guess < random_number) {
        display_message("your message is too low")
    } else if (guess > random_number){
        display_message("your message is too high")
    }
}

function display_guess(guess) {
    user_input.value = ""
    guess_slot.innerHTML +=`${guess} `
    num_guess++
    remaining.innerHTML = `${11-num_guess}`
}

function display_message(message) {
    low_or_high.innerHTML = `<h2>${message}</h2>`
}

function end_game() {
    user_input.value=""
    user_input.setAttribute("disabled",'')
    p.classList.add("button")
    p.innerHTML= `<h2 id="new_game">start new game</h2>`
    start_over.appendChild(p)
    play_game= false
    new_game()
}


function new_game() {
    const new_game_button = document.querySelector("#new_game")

    new_game_button.addEventListener("click", function(e){
        play_game = true
        random_number = Math.floor(Math.random()*100+1)
        prev_guess =[]
        num_guess=1
        guess_slot.innerHTML =""
        remaining.innerHTML =""
        user_input.removeAttribute("disabled")
        start_over.removeChild(p)
        // location.reload()
        play_game = true 
    })
    
}




