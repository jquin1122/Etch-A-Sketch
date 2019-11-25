const gridBtn = document.querySelector('#ClrGrid');
gridBtn.addEventListener('click', newGrid);

const borderBtn = document.querySelector('#BorderBtn');
borderBtn.addEventListener('click', borderToggle);

const BWBtn = document.querySelector('#BWBtn');
BWBtn.addEventListener('click', setBlack);

const RCBtn = document.querySelector('#RCBtn');
RCBtn.addEventListener('click', setRandom);
//button assignments

let stylusColor = "black";

function newGrid(){
    let container = document.querySelector('#gridContainer');

    while(container.hasChildNodes()){
        container.removeChild(container.firstChild);
    }
    let size = prompt('What size would you like the grid?:');
    createGrid(size);
}

function createGrid(gridSize){
    let container = document.querySelector('#gridContainer');
    container.style.gridTemplateColumns = "";
    let gridSpaces = gridSize * gridSize;

    for(i = 0; i < gridSpaces; i++){
        container.appendChild(document.createElement('div'));
        container.lastChild.classList.add('item');
        container.lastChild.addEventListener('mouseover', setColor);
    }
    for(j = 0; j < gridSize; j++){
        container.style.gridTemplateColumns += " auto";
    }
    container.style.gridTemplateColumns += ";";
}

function setColor(e){
    if(stylusColor == "black"){
        this.style.backgroundColor = "black";
    }else if(stylusColor == "random"){
        let letters = '0123456789ABCDEF';
        let color = '#';
        for(i = 0; i < 6; i++){
            color += letters[Math.floor(Math.random() * 16)];
        }
        if(this.style.backgroundColor == ""){
            this.style.backgroundColor = color;
        }else{
            switch(this.style.filter){
                case "":
                    this.style.filter = "brightness(90%)";
                    break;
                case "brightness(90%)":
                    this.style.filter = "brightness(80%)";
                    break;
                case "brightness(80%)":
                    this.style.filter = "brightness(70%)";
                    break;
                case "brightness(70%)":
                    this.style.filter = "brightness(60%)";
                    break;
                case "brightness(60%)":
                    this.style.filter = "brightness(50%)";
                    break;
                case "brightness(50%)":
                    this.style.filter = "brightness(40%)";
                    break;
                case "brightness(40%)":
                    this.style.filter = "brightness(30%)";
                    break;
                case "brightness(30%)":
                    this.style.filter = "brightness(20%)";
                    break;
                case "brightness(20%)":
                    this.style.filter = "brightness(10%)";
                    break;
                default:
                        this.style.filter = "brightness(0%)";
            }
        }
        
    }
}

function borderToggle(){
    let items = document.querySelectorAll('.item');
    let item = document.querySelector('.item');

    if(item.style.border == ""){
    items.forEach(item => {
        item.style.border = "1px solid black";
    });
    }else{
        items.forEach(item => {
            item.style.border = "";
        });
    }
}

function getRandomColor(){
    let letters = '0123456789ABCDEF';
    let color = '#';
    for(i = 0; i < 6; i++){
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function setBlack(){
    stylusColor = "black";
}

function setRandom(){
    stylusColor = "random";
}
//createGrid(100);