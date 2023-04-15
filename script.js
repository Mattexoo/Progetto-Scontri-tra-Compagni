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

let personaggio1 =0;
let personaggio2=0;

//scelta personaggio giocatore 1
a.addEventListener("click", function(){
     personaggio1 = "a";
     console.log(personaggio1);
});
b.addEventListener("click", function(){
     personaggio1 = "b";
     console.log(personaggio1);
});
c.addEventListener("click", function(){
     personaggio1 = "c";
     console.log(personaggio1);
});
d.addEventListener("click", function(){
     personaggio1 = "d";
     console.log(personaggio1);
});

//scelta personaggio giocatore 2
e.addEventListener("click", function(){
     personaggio2 = "e";
     console.log(personaggio2);
});
f.addEventListener("click", function(){
     personaggio2 = "f";
     console.log(personaggio2);
});
g.addEventListener("click", function(){
     personaggio2 = "g";
     console.log(personaggio2);
});
h.addEventListener("click", function(){
     personaggio2 = "h";
     console.log(personaggio2);
});

console.log(personaggio1);
console.log(personaggio2);
