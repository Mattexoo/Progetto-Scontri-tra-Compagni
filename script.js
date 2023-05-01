let html=document.querySelector("main");
let htmlTitolo=document.querySelector("header")
let css= document.querySelector("head");
function sceltaPersonaggio(){    
     let a=`
     <section id="schermi">
     <div id="schermo1">
       <section class="selezioneP">
         <div class="imgP"><img src="./img/goldrake/goldrake-logo.jpg" alt="logo" id="img1"></div>
         <div class="imgP"><img src="./img/gundam/gundam-logo.jpg" alt="logo" id="img2"></div>
       </section>
       <section class="selezioneP">
         <div class="imgP"><img src="./img/jeeg-robot/jeeg robot-logo.jpg" alt="logo" id="img3"></div>
         <div class="imgP"><img src="./img/mazinga/mazinga-logo.jpg" alt="logo" id="img4"></div>
       </section>
     </div>
     <div id="schermo2">
       <section class="selezioneP">
         <div class="imgP"><img src="./img/goldrake/goldrake-logo.jpg" alt="logo" id="img5"></div>
         <div class="imgP"><img src="./img/gundam/gundam-logo.jpg" alt="logo" id="img6"></div>
       </section>
       <section class="selezioneP">
         <div class="imgP"><img src="./img/jeeg-robot/jeeg robot-logo.jpg" alt="logo" id="img7"></div>
         <div class="imgP"><img src="./img/mazinga/mazinga-logo.jpg" alt="logo" id="img8"></div>
       </section>
     </div>
   </section>
   <section id="sceltaAvvenuta">
   <button id="btnsceltaAvvenuta" onclick="generaGame()">INIZIA LO SCONTRO</button>
   </section>
     `
     let b= `
     <meta charset="UTF-8">
     <meta http-equiv="X-UA-Compatible" content="IE=edge">
     <!-- initial-scale è a 1.2 così lo zoom è settato a 120% -->
     <meta name="viewport" content="width=device-width, initial-scale=1.2">
     <link href="css/personaggi.css" rel="stylesheet" type="text/css"/>
     <script src="script.js" defer ></script>
     <title>Robot War</title>
     `
     let c= `
     <section id="title">
     <h1>SCEGLI IL TUO PERSONAGGIO</h1>
     </section>
     `
     htmlTitolo.innerHTML=c;
     css.innerHTML=b;
     html.innerHTML= a;
}
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

let personaggio1= '';
let personaggio2= '';

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

function generaGame(){  
     let a=`
     <meta charset="UTF-8">
     <meta http-equiv="X-UA-Compatible" content="IE=edge">
     <!-- initial-scale è a 1.2 così lo zoom è settato a 120% -->
     <meta name="viewport" content="width=device-width, initial-scale=1.2">
     <script src="script.js" defer ></script>
     <title>Robot War</title>
     <link href="css/gioco.css" rel="stylesheet" type="text/css"/>
     `
     let b=`
     <section id="schermi">
      <div id="schermo1">
        <article class="lifebar">
          <img src="img/lifebar.png" alt="Lifebar non disponibile" height="100px" width="300px">
        </article>
        <img id="imgP" src="img/goldrake/godrake-fermo.png" height="400px" width="300px">
        <div class="mosse">
          <section>
            <button id="attacco1" class="mossa">ATTACCO</button>
            <img  id="fulmine" src="./img/animazioni/fulmine-removebg-preview.png" alt="animazione non disponibile">
            <img  id="nuvola" src="./img/animazioni/nuvola.png" alt="animazione non disponibile">
          </section>
          <section>
            <button id="difesa1" class="mossa">DIFESA</button>
            <img id="scudo1" src="./img/animazioni/scudo-goldake-removebg-preview.png" alt="animazione non disponibile">
          </section>
          <section>
            <button class="ulti" id="ulti1">ULTI</button>
            <img  id="pugno" src="./img/animazioni/pugno-removebg-preview.png" alt="animazione non disponibile">
          </section>
        </div>
      </div>
      <!--
      <div id="turno">
        <h3>Tocca a:</h3>
        <h1>Giocatore 1 / Giocatore 2</h1>
      </div>
      -->
      <div id="schermo2">
        <article class="lifebar">
          <img src="img/lifebar.png" alt="Lifebar non disponibile" height="100px" width="300px">
        </article>
        <img src="img/gundam/gundam-fermo.png" height="400px" width="300px">
        <div class="mosse">
          <section> 
            <button id="attacco2" class="mossa">ATTACCO</button>
            <img  id="colpo" src="./img/animazioni/colpo-removebg-preview.png" alt="animazione non disponibile">
          </section>
          <button id="difesa2" class="mossa">DIFESA</button>
          <img  id="scudo2" src="./img/animazioni/scudo-gundam-removebg-preview.png" alt="animazione non disponibile">
          <section>          
            <button class="ulti" id="ulti2">ULTI</button>
            <img id="spada" src="./img/animazioni/spada-removebg-preview.png" alt="animazione non disponibile">
          </section>
        </div>
    </section>
    </div>
     `
     let c= `
     <section class="title">
     <h1>E' ORA DI COMBATTERE!</h1>
     <h3>Che vinca il migliore -_-</h3>
     </section>
     `
     css.innerHTML=a;
     html.innerHTML=b;
     htmlTitolo.innerHTML=c;
}
