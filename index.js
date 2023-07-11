var numberOfButtonDrum = document.querySelectorAll(".drum").length;
for (i = 0; i < numberOfButtonDrum; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){

        var buttonInnerHtml = this.innerHTML;
        makeSound(buttonInnerHtml);
        makeAnimation(buttonInnerHtml);

    })
    
}

document.addEventListener("keypress", function(event){
    makeSound(event.key);
    makeAnimation(event.key);
})

function makeSound(key){
    switch (key) {
        case "w":
            new Audio("sounds/tom-1.mp3").play();
            break;
        case "a":
            new Audio("sounds/tom-2.mp3").play();
            break;
        case "s":
            new Audio("sounds/tom-3.mp3").play();
            break;
        case "d":
            new Audio("sounds/tom-4.mp3").play();
            break;
        case "j":
            new Audio("sounds/snare.mp3").play();
            break;
        case "k":
            new Audio("sounds/kick-bass.mp3").play();
            break;
        case "l":
            new Audio("sounds/crash.mp3").play();
            break;
        default:
            console.log(buttonInnerHtml);
    }
}

function makeAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
}