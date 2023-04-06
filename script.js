//Personaggi giocatore 1
let a = document.getElementById("img1");
let b = document.getElementById("img2");
let c = document.getElementById("img3");
let d = document.getElementById("img4");

//Personaggi giocatore 2
let e = document.getElementById("img5");
let f = document.getElementById("img6");
let g = document.getElementById("img7");
let h = document.getElementById("img8");

//scelta personaggio giocatore 1
a.addEventListener("click", function(){
    let personaggio1 = a;
});
b.addEventListener("click", function(){
    let personaggio1 = b;
});
c.addEventListener("click", function(){
    let personaggio1 = c;
});
d.addEventListener("click", function(){
    let personaggio1 = d;
});

//scelta personaggio giocatore 2
e.addEventListener("click", function(){
    let personaggio2 = e;
});
f.addEventListener("click", function(){
    let personaggio2 = f;
});
g.addEventListener("click", function(){
    let personaggio2 = f;
});
h.addEventListener("click", function(){
    let personaggio2 = h;
});

console.log(personaggio1)
console.log(personaggio2)
