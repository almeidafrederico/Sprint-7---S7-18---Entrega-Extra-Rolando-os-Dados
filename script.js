count =[
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
];


function rollOfDice(){
    return Math.floor(Math.random() * 6 + 1)
}

function rollTwoDice(turn){
    for(let i = 0; i<turn; i++){
        let resultrollTwoDice = rollOfDice()+rollOfDice()
        count[resultrollTwoDice]++;
    }
}

function resultTwoDice(turn){
    rollTwoDice(turn);
    let rolls           = document.getElementById("rolls");
    let graphs          = document.getElementById("graphs");
    for(let i = 2; i<=12; i++){
        let li          = document.createElement("li");
        let p           = document.createElement("div");
        p.classList.add(`${i}`);
        p.classList.add("graph");
        p.style.height = `${count[i]}px`
        li.innerText    = `${i}: ${count[i]}`;
        p.innerText     = `${i}:${count[i]}`;
        rolls.appendChild(li);
        graphs.appendChild(p);
    }
}

resultTwoDice(1000)