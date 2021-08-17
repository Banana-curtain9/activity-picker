let random_number = 0
input.onButtonPressed(Button.A, function () {
    random_number = randint(1, 6)
    if (random_number == 1) {
        basic.showString("PE with Joe")
    } else if (random_number == 2) {
        basic.showString("Watch A Movie")
    } else if (random_number == 3) {
        basic.showString("Play a Board Game")
    } else if (random_number == 4) {
        basic.showString("Hello!")
    } else if (random_number == 4) {
        basic.showString("Tidy Room")
    } else if (random_number == 5) {
        basic.showString("Play Card Game")
    } else if (random_number == 6) {
        basic.showString("Tidy Room")
    } else {
        basic.showString("ERROR 404")
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("PLEASE PRESS BUTTON A")
})
input.onButtonPressed(Button.B, function () {
    basic.showString("PLEASE PRESS BUTTON A")
})
