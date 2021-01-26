let botoncito = document.querySelector('#btn');
botoncito.addEventListener('click', changeTheExcuse);

function changeTheExcuse() {
    let pronoun = ['the', 'our'];
    let adj = ['great', 'big'];
    let noun = ['jogger', 'racoon'];
    let final = ['.io', '.net'];

    let whoD = pronoun[random()];
    let actionD = adj[random()];
    let whatD = noun[random()];
    let finallyD = final[random()];

    let excuse = `${whoD}${actionD}${whatD}${finallyD}`;

    let paragraph = document.querySelector('#excuse');
    paragraph.innerHTML = excuse;

}
function random(){
    return Math.floor(Math.random() * (2 - 0) + 0);
}