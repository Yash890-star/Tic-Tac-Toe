const allValues = document.querySelectorAll('button');
let track = 'X'; 
let values = [];
let i = 0;

function winingLogic(){
    if (allValues[0].textContent === allValues[1].textContent && allValues[1].textContent === allValues[2].textContent ||
        allValues[3].textContent === allValues[4].textContent && allValues[4].textContent === allValues[5].textContent ||
        allValues[6].textContent === allValues[7].textContent && allValues[7].textContent === allValues[8].textContent 
        )
        {
        alert(`${track} Wins`);
        }
    else if (
        allValues[0].textContent === allValues[3].textContent && allValues[3].textContent === allValues[6].textContent ||
        allValues[1].textContent === allValues[4].textContent && allValues[4].textContent === allValues[7].textContent ||
        allValues[2].textContent === allValues[5].textContent && allValues[5].textContent === allValues[8].textContent 
    ){
        alert(`${track} Wins`);
    }else if(
        allValues[0].textContent === allValues[4].textContent && allValues[4].textContent === allValues[8].textContent ||
        allValues[2].textContent === allValues[4].textContent && allValues[4].textContent === allValues[6].textContent
    ){
        alert(`${track} Wins`);
    }
    else if(i === 8){
        alert('Draw')
    }
}
function assignValues(ele){
    const hi = document.getElementById(ele);
    if (hi.textContent === 'X' || hi.textContent === 'O'){
        alert('already played');
    }
    else if (i % 2 === 0){
        track = 'X';
        hi.textContent = track;
        hi.style.borderBottomColor = '#e67e22';
        hi.style.transition = '0.75s';
        winingLogic();
        i++;
    }
    else{
        track = 'O';
        hi.textContent = track;
        hi.style.borderBottomColor = '#e67e22';
        hi.style.transition = '0.75s';
        winingLogic();
        i++;
    } 
}
function resetGame(){
    let j = 1;
    for (value of allValues){
        value.textContent = j;
        value.style.borderBottomColor = '#2ecc71';
        value.style.transition = '0.75s';
        j++;
    }
    allValues[9].textContent = 'Reset';
    i=0;
}

