let colors = [
    "Yellow",
    "Blue",
    "Red",
    "Green",
    "Brown",
    "Teal",
    "Silver",
    "Purple",
    "Gray",
    "Orange",
    "Maroon",
    "Aquamarine",
    "Coral",
    "Fuchsia",
    "Wheat",
    "Lime",
    "Crimson",
    "Khaki",
    "Magenta",
    "Plum",
    "Olive",
    "Cyan"
];
let removedColors = [
];

let colorsDiv = document.getElementById("colors");
let removedColorsDiv = document.getElementById("removedColors");

function updateColors(){
    colorsDiv.innerHTML = "";
    removedColorsDiv.innerHTML = "";
    for(i in colors){
        colorsDiv.innerHTML += `<button id="c${i}" onclick="removeColor(${i})" style="display:inline;background-color:${colors[i]};color:${colors[i]};">1</button>`;
    }
    for(i in removedColors){
        removedColorsDiv.innerHTML += `<button id="rc${i}" onclick="removeRemovedColor(${i})" style="display:inline;background-color:${removedColors[i]};color:${removedColors[i]};">1</button>`;
    }
}

updateColors();

function removeColor(i){
    removed = colors.splice(i,1);
    removedColors.push(removed);
    updateColors();
}

function removeRemovedColor(i){
    removed = removedColors.splice(i,1);
    colors.push(removed);
    updateColors();
}

function add(num){
    for(i=0;i<num;i++){
        new Circle(Math.floor(Math.random()*width-40)+20,Math.floor(Math.random()*height-40)+20,3,colors[Math.floor(Math.random() * colors.length)]).setVelocity((Math.random()*10)-5,(Math.random()*10)-5);
    }
}

document.getElementById("add").addEventListener("click",()=>{
    let num = document.getElementById("num").value;
    document.getElementById("number").innerText = gameObjects.length;
    add(num);
    document.getElementById("number").innerText = gameObjects.length;
});

document.getElementById('remove').addEventListener("click",()=>{
    document.getElementById("number").innerText = gameObjects.length;
    let num = document.getElementById("num").value;
    for(let i = 0;i<num;i++){
        gameObjects.pop();
    }
    document.getElementById("number").innerText = gameObjects.length;
});