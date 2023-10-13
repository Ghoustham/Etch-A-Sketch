console.log('hala world')
let num = 1;

const createSquares = (num)=> {

    const divSelector = document.querySelector('div');

    for(let i= 0; i <= num;i++ ){
        const newSquare = document.createElement('div');
        newSquare.classList.add('squares');

        divSelector.append(newSquare);
    }
    





}

createSquares(num);