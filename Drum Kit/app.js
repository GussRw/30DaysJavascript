function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
}


function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');

}

window.addEventListener('keydown', playSound);

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

let counter = 6;
let time = 400;
setTimeout(()=>{
    setInterval(() => {
        playSound({keyCode: 83});

        if (counter % 4 == 0)
            playSound({keyCode: 65});
        if (counter % 2 == 0 && !(counter % 4 == 0))
            playSound({keyCode: 71});
        if (counter % 8 == 0)
            playSound({keyCode: 68});

        if (counter % 2 == 0 && counter % 8 == 0)
            setTimeout(() => {
                playSound({keyCode: 71});
                setTimeout(() => {
                    playSound({keyCode: 72});
                }, time+time+time+(time/2))
            }, time / 2)

        counter++;
    }, time)
},5000);

