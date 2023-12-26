console.log('hala world')
let num = 0 ;

const playerNumber = ()=> {
    
    
        const takeNumberPLayer = prompt('Please enter a number from 1 to 100 for the numbers of squares');
        const sizeOfGrid = takeNumberPLayer;
        
        return sizeOfGrid;
          
}

createAboard();

const buttonOnClick = document.querySelector('.buttonmenu');
    
buttonOnClick.addEventListener('click', () => {
    
    num = playerNumber();
    createSquares(num);
    activePen();

})


const createSquares = (num)=> {
    
    const divSelector = document.querySelector('.container');
    divSelector.style.gridTemplateColumns = `repeat(${num},1fr)`;
    divSelector.style.gridTemplateRows = `repeat(${num},1fr)`;
    num = num * num;

    while (divSelector.firstChild){
        divSelector.removeChild(divSelector.firstChild);
    }
    
    for(let i= 0; i < num;i++ ){
        
        const newSquare = document.createElement('div');
        
        newSquare.classList.add('squares');
        
        divSelector.append(newSquare);
        
    }
}



// Create a function that when i hover the squares they changes the color of his background 


function activePen(){
    const squareSelector  = document.querySelectorAll('.squares')
    
    squareSelector.forEach(square => {
        square.addEventListener('mouseenter',()=>{
            square.style.backgroundColor = 'red';
        })
        
    });
}


function createAboard(){

    const menuSelector = document.querySelector('#menu');
    const createNewButton = document.createElement('button');
    
    createNewButton.classList.add('buttonmenu');

    createNewButton.textContent = 'Generate Grid';
    
    menuSelector.appendChild(createNewButton);


    
}


