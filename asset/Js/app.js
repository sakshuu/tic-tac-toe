gsap.from(".box", {
    opacity: 0,
    duration: 5,
    stagger: {
        each: 0.4,
        grid: "auto",
        from: "center"

    }
});
var chance = true;
var redWinCount = 0
var yellowWinCount = 0
var total = 0
var draw = 0
// var total = redWinCount + yellowWinCount
function game(arg) {
    var box = document.querySelector(arg).classList;
    // var redClassCheck = box.contains("bg-red")
    // alert(redClassCheck)
    // var yellowClassCheck = box.contains("bg-yellow")
    // alert(yellowClassCheck)
    if (!(box.contains("bg-red") || box.contains("bg-yellow"))) {

        chance ? box.add("bg-red") : box.add("bg-yellow")
        chance = !chance
        gsap.to(arg, { scale: 0.5, duration: 0.5 })

    }
    checkWinner()
    if (checkFill()) {
        draw++
        resetGame()
    }
}
function checkWinner() {
    isWinner("#box1", "#box2", "#box3", "bg-red") && resetGame()
    isWinner("#box4", "#box5", "#box6", "bg-red") && resetGame()
    isWinner("#box7", "#box8", "#box9", "bg-red") && resetGame()
    isWinner("#box1", "#box4", "#box7", "bg-red") && resetGame()
    isWinner("#box2", "#box5", "#box8", "bg-red") && resetGame()
    isWinner("#box3", "#box6", "#box9", "bg-red") && resetGame()
    isWinner("#box1", "#box5", "#box9", "bg-red") && resetGame()
    isWinner("#box3", "#box5", "#box7", "bg-red") && resetGame()

    isWinner("#box1", "#box2", "#box3", "bg-yellow") && resetGame()
    isWinner("#box4", "#box5", "#box6", "bg-yellow") && resetGame()
    isWinner("#box7", "#box8", "#box9", "bg-yellow") && resetGame()
    isWinner("#box1", "#box4", "#box7", "bg-yellow") && resetGame()
    isWinner("#box2", "#box5", "#box8", "bg-yellow") && resetGame()
    isWinner("#box3", "#box6", "#box9", "bg-yellow") && resetGame()
    isWinner("#box1", "#box5", "#box9", "bg-yellow") && resetGame()
    isWinner("#box3", "#box5", "#box7", "bg-yellow") && resetGame()
}
function isWinner(id1, id2, id3, color) {
    var box1 = document.querySelector(id1).classList.contains(color)
    var box2 = document.querySelector(id2).classList.contains(color)
    var box3 = document.querySelector(id3).classList.contains(color)
    if (box1 && box2 && box3) {
        color === "bg-red" ? redWinCount++ : yellowWinCount++
        return true
    }
    return false

}
function resetGame() {
    for (var i = 1; i <= 9; i++) {
        document.querySelector(`#box${i}`).classList.remove("bg-red", "bg-yellow")
    }
    gsap.to(".box", { scale: 1, duration: 0.5 });
    total++
    displayCount()
    return true
}

function checkFill() {
    return isFill("#box1")
        && isFill("#box2")
        && isFill("#box3")
        && isFill("#box4")
        && isFill("#box5")
        && isFill("#box6")
        && isFill("#box7")
        && isFill("#box8")
        && isFill("#box9")

}
function isFill(arg) {
    return document.querySelector(arg).classList.contains("bg-red") || document.querySelector(arg).classList.contains("bg-yellow")
}
function displayCount() {
    document.querySelector("#redWin").innerHTML = redWinCount
    document.querySelector("#yellowWin").innerHTML = yellowWinCount
    document.querySelector("#total").innerHTML = total
    document.querySelector("#draw").innerHTML = draw

}