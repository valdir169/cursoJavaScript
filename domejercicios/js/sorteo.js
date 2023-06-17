const d = document;

export default function draw(btn, selector) {
    // const getWinner = (selector) => {
    //     const $player = d.querySelectorAll(selector),
    //         ramdom = Math.floor(Math.random() * $player.length),
    //         winner = $player[ramdom];

    //     // console.log($player, ramdom, winner);

    //     return `El ganador es : ${winner.textContent}`;

    // }

    d.addEventListener("click", e => {
        if (e.target.matches(btn)) {
            let result = getWinner(selector);
            alert(result);
            // console.log(result); 
        }
    })
}

const getWinnerCommnet = (selector) => {
    const $players = d.querySelectorAll(


        
    )

}