let botoncito = document.querySelector('#btn');
botoncito.addEventListener('click', changeTheExcuse);

function changeTheExcuse() {
    let pronoun = ['the', 'our'];
    let adj = ['great', 'big'];
    let noun = ['jogger', 'racoon'];

    let whoD = pronoun[random()];
    let actionD = adj[random()];
    let whatD = noun[random()];

    let excuse = `${whoD} ${actionD} ${whatD}.com`;

    let paragraph = document.querySelector('#excuse');
    paragraph.innerHTML = excuse;

}
function random(){
    return Math.floor(Math.random() * (1 - 0) + 0);
}