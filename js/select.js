function getTextElementValueById(elementId){
    const textElement = document.getElementById(elementId);
    const textElementValue =textElement.innerText;
    return textElementValue;
}

function setTextElementValueById(elementId, newValue){
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
    return;
}




document.getElementById('select-btn').addEventListener('click', function (){
    const playerValue = getTextElementValueById('player-name');
    setTextElementValueById('select-field', playerValue);
    const messiName = getTextElementValueById('second-field');
    setTextElementValueById('order-field', messiName);
    // const playerValue = getTextElementValueById('player-name');
    // setTextElementValueById('select-field', playerValue);
    
    // const playerName = document.getElementById('player-name');
    // const playerNameList = playerName.innerText;
    // const selectField = document.getElementById('select-field');
    // selectField.innerText=playerNameList;
     
})