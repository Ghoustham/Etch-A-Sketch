console.log('hala world')
let num = 0 ;

const playerNumber = ()=> {
    const takeNumberPLayer = prompt('Please enter a number from 1 to 100 for the numbers of squares');
    const sizeOfGrid = takeNumberPLayer;
    return sizeOfGrid;
}

num = playerNumber();

const createSquares = (num)=> {
    
    const divSelector = document.querySelector('.container');
    divSelector.style.gridTemplateColumns = `repeat(${num},1fr)`;
    divSelector.style.gridTemplateRows = `repeat(${num},1fr)`;
    num = num * num;
    
    for(let i= 0; i < num;i++ ){
        
        const newSquare = document.createElement('div');
        
        newSquare.classList.add('squares');
        
        divSelector.append(newSquare);
        
    }
}

createSquares(num);

// Create a function that when i hover the squares they changes the color of his background 


function activePen(){
    const squareSelector  = document.querySelectorAll('.squares')
    
    squareSelector.forEach(square => {
        square.addEventListener('mouseenter',()=>{
            square.style.backgroundColor = 'red';
        })
        
    });
}


activePen();