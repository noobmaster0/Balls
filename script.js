let colors = [
    "Yellow",
    "Blue",
    "Red",
    "Green",
    "Brown",
    "Azure",
    "Ivory",
    "Teal",
    "Silver",
    "Purple",
    "Navy blue",
    "Pea green",
    "Gray",
    "Orange",
    "Maroon",
    "Charcoal",
    "Aquamarine",
    "Coral",
    "Fuchsia",
    "Wheat",
    "Lime",
    "Crimson",
    "Khaki",
    "Hot pink",
    "Magenta",
    "Olden",
    "Plum",
    "Olive",
    "Cyan"
    ];

function add(num){
    for(i=0;i<num;i++){
        new Circle(Math.random()*1000,Math.random()*750,3,colors[Math.floor(Math.random() * colors.length)]).setVelocity((Math.random()*20)-10,(Math.random()*20)-10);
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