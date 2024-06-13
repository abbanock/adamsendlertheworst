//import JSConfetti from 'js-confetti'


const container = document.querySelector('.container');
const yesBtn = document.querySelector('.yes');
const noBtn = document.querySelector('.no');
const kittyGif = document.querySelector('.neutral');
const happyKitty = document.querySelector('.happy');
const angryKitty = document.querySelector('.angry');
let noWidth = noBtn.style.width;
let noHeight = noBtn.style.height;



noBtn.addEventListener('click', event => {
    kittyGif.style.display = "none";
    angryKitty.style.display = "inline";

    let width = noBtn.offsetWidth;
    let height = noBtn.offsetHeight;
    let fontSize = parseInt(window.getComputedStyle(noBtn).fontSize);

    width *= 0.9;
    height *= 0.9;
    fontSize *= 0.9;

    noBtn.style.width = width + "px";
    noBtn.style.height = height + "px";
    noBtn.style.fontSize = fontSize + "px";

    if (noBtn.offsetWidth < 80) {
        noBtn.style.display = "none";
    }
})

yesBtn.addEventListener('click', event => {
    const jsConfetti = new JSConfetti({
        container
    })
    jsConfetti.addConfetti({
        confettiColors: [
    '#ff0a54', '#ff477e', '#ff7096', '#ff85a1', '#fbb1bd', '#f9bec7', 'red', 'blue', 'green', 'yellow', 'orange'
  ],
        confettiRadius: 5,
        confettiNumber: 500,
    })

    kittyGif.style.display = "none";
    angryKitty.style.display = "none";
    happyKitty.style.display = "inline";

})
