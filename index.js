// Code your solutions in this file
const card =[]

function writeCards(array, eventName){
    for(let i = 0; i< array.length; i++){
      card.push(`Thank you, ${array[i]}, for the wonderful ${eventName} gift!`)
    }
return card
}

function countDown(posititveInteger){
    while(posititveInteger >= 0){
        console.log(posititveInteger--);
    }
}