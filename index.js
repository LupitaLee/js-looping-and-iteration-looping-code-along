// Code your solutions in this file
const array = ['Lisa', 'Laura', 'lupita']

const string = 'birday'

function writeCards(array, string){
    const newArray = []
    for(let i = 0 ; i < array.length; i++){
    newArray.push(`Thank you, ${array[i]}, for the wonderful ${string} gift!`);
    }
    return newArray;
}



function countDown(num){
    
    while (num >= 0){
        console.log(num--)
    }
}
