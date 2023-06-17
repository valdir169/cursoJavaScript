const d = document;

export function digitalClock(clock, playBtn, stopBtn) {
    let clockTemp;
    d.addEventListener("click", e => {
        if (e.target.matches(playBtn)) {

            clockTemp = setInterval(() => {
                let clockHour = new Date().toLocaleTimeString();
                d.querySelector(clock).innerHTML = `<h3>${clockHour}</h3>`;
            }, 1000);
            e.target.disabled = true;
        }

        if (e.target.matches(stopBtn)) {
            clearInterval(clockTemp);
            d.querySelector(clock).innerHTML = null;
            d.querySelector(playBtn).disabled = false;
        }
    })
}


export function alarm(sound, playBtn, stopBtn) {
    let alarmTemp;
    const $alarm = d.createElement("audio");
    $alarm.src = sound;

    d.addEventListener("click", e => {
        if(e.target.matches(playBtn)) {
            alarmTemp = setTimeout(() => {
                    $alarm.play();
            }, 2000);
            e.target.disabled = true;
        }
        
        if(e.target.matches(stopBtn)) {
            clearTimeout(alarmTemp);
            $alarm.pause();
            $alarm.currentTime = 0;
            d.querySelector(playBtn).disabled = false;
        }
    });
}

