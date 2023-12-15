let image = document.querySelector(".image");
let switchOn = document.querySelector(".switch-on");
let switchOff = document.querySelector(".switch-off");
let mySwitch = document.querySelector(".switch");


switchOn.addEventListener('click', function(){
    image.classList.add("on");
    image.classList.remove("off");
    mySwitch.classList.add("turn-on");
    mySwitch.classList.remove("turn-off");
    switchOn.classList.add("grayed");
    switchOff.classList.remove("grayed");
});

switchOff.addEventListener('click', function(){
    image.classList.add("off");
    image.classList.remove("on");
    mySwitch.classList.add("turn-off");
    mySwitch.classList.remove("turn-on");
    switchOn.classList.remove("grayed");
    switchOff.classList.add("grayed");
});
