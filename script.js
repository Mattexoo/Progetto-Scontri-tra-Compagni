let html=document.querySelector("main");
let htmlTitolo=document.querySelector("header")
let css=document.querySelector("head");
let timerDiv;
let personaggio1;
let personaggio2;
let bottoneP1;
let bottoneP2;
let bool1= false;
let bool2= false;
var tempo = 10;
let timer10sec, timer1sec;

//generazione di un numero casuale da 0-3
function personaggioCasuale(){
  return Math.floor(Math.random() * 4);
}

//creazione della pagina di scelta del personaggio e selezione di essi
function sceltaPersonaggio(){    
     let i=` 
      <button  onclick="risultato()" ></button>
     <section class="schermi">
     <div id="schermo1">
       <section class="selezioneP">
         <div class="imgP"><img src="./img/goldrake-dx/goldrake-logo.jpg" alt="logo" id="img1"></div>
         <div class="imgP"><img src="./img/gundam-dx/gundam-logo.jpg" alt="logo" id="img2"></div>
       </section>
       <section class="selezioneP">
         <div class="imgP"><img src="./img/jeeg-robot-dx/jeeg-robot-logo.jpg" alt="logo" id="img3"></div>
         <div class="imgP"><img src="./img/mazinga-dx/mazinga-logo.jpg" alt="logo" id="img4"></div>
       </section>
       <section class="selezioneP">
       <div class="imgP"><img src="./img/dadoCasuale.png" alt="logo" id="img9"></div>
       </section>
     </div>
     <div id="schermo2">
       <section class="selezioneP">
         <div class="imgP"><img src="./img/goldrake-dx/goldrake-logo.jpg" alt="logo" id="img5"></div>
         <div class="imgP"><img src="./img/gundam-dx/gundam-logo.jpg" alt="logo" id="img6"></div>
       </section>
       <section class="selezioneP">
         <div class="imgP"><img src="./img/jeeg-robot-dx/jeeg-robot-logo.jpg" alt="logo" id="img7"></div>
         <div class="imgP"><img src="./img/mazinga-dx/mazinga-logo.jpg" alt="logo" id="img8"></div>
       </section>
       <section class="selezioneP">
       <div class="imgP"><img src="./img/dadoCasuale.png" alt="logo" id="img10"></div>
       </section>
     </div>
   </section>
   <section class="schermi">
   <div id="btnsceltaG1Avvenuta">
   <button class="btnsceltaAvvenuta btn btn-success" id="confermaG1" onclick="cambiaValore1()" value=0 disabled>CONFERMA</button>
   </div>
   <div id="btnsceltaG2Avvenuta">
   <button class="btnsceltaAvvenuta btn btn-success" id="confermaG2" onclick="cambiaValore2()" value=0 disabled>CONFERMA</button>
   </div>
   </section>
     `
     let j= `
     <meta charset="UTF-8">
     <meta http-equiv="X-UA-Compatible" content="IE=edge">
     <!-- initial-scale è a 1.2 così lo zoom è settato a 120% -->
     <meta name="viewport" content="width=device-width, initial-scale=1.2">
     <link href="css/personaggi.css" rel="stylesheet" type="text/css"/>
     <script src="dati.js" defer ></script>
     <script src="script.js" defer ></script>
     <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
     <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
     <title>Robot War</title>
     `
     let k= `
     <section id="title">
     <h1>SCEGLI IL TUO PERSONAGGIO</h1>
     </section>
     `
     htmlTitolo.innerHTML=k;
     css.innerHTML=j;
     html.innerHTML= i;

     //Personaggi giocatore 1
     let a = document.getElementById("img1");
     let b = document.getElementById("img2");
     let c = document.getElementById("img3");
     let d = document.getElementById("img4");
     let l = document.getElementById("img9");

     //Personaggi giocatore 2
     let e = document.getElementById("img5");
     let f = document.getElementById("img6");
     let g = document.getElementById("img7");
     let h = document.getElementById("img8");
     let m = document.getElementById("img10");
     
      
     let confermaG1= document.getElementById("confermaG1");
     let confermaG2= document.getElementById("confermaG2");


     //scelta personaggio giocatore 1
      a.addEventListener("click", function(){
      personaggio1 = personaggiGiocatore1[0];
      console.log(personaggio1);
      confermaG1.disabled=false;
      });
      b.addEventListener("click", function(){
            personaggio1 = personaggiGiocatore1[1];
            console.log(personaggio1);
            confermaG1.disabled=false;
      });
      c.addEventListener("click", function(){
            personaggio1 = personaggiGiocatore1[2];
            console.log(personaggio1);
            confermaG1.disabled=false;
      });
      d.addEventListener("click", function(){
            personaggio1 = personaggiGiocatore1[3];
            console.log(personaggio1);
            confermaG1.disabled=false;
      });
      l.addEventListener("click", function(){
        personaggio1 = personaggiGiocatore1[personaggioCasuale()];
        console.log(personaggio1);
        confermaG1.disabled=false;
      });

     //scelta personaggio giocatore 2
     e.addEventListener("click", function(){
          personaggio2 = personaggiGiocatore2[0];
          console.log(personaggio2);
          confermaG2.disabled=false;
     });
     f.addEventListener("click", function(){
          personaggio2 = personaggiGiocatore2[1];
          console.log(personaggio2);
          confermaG2.disabled=false;
     });
     g.addEventListener("click", function(){
          personaggio2 = personaggiGiocatore2[2];
          console.log(personaggio2);
          confermaG2.disabled=false;
     });
     h.addEventListener("click", function(){
          personaggio2 = personaggiGiocatore2[3];
          console.log(personaggio2);
          confermaG2.disabled=false;
     });
     m.addEventListener("click", function(){
      personaggio2 = personaggiGiocatore2[personaggioCasuale()];
      console.log(personaggio2);
      confermaG2.disabled=false;
     });
}

function cambiaValore1(){
  bottoneP1=document.getElementById("btnsceltaG1Avvenuta");
  let a=`<button id="confermaG1" class="btnsceltaAvvenuta btn btn-success" value="1">CONFERMA</button>`;
  bottoneP1.innerHTML=a;
  bool1=true;
  controllaValore();
}

function cambiaValore2(){
  bottoneP2=document.getElementById("btnsceltaG2Avvenuta");
  let a=`<button id="confermaG2" class="btnsceltaAvvenuta btn btn-success" value="1">CONFERMA</button>`;
  bottoneP2.innerHTML=a
  bool2=true;
  controllaValore();
}

function controllaValore(){
  setTimeout(controlla(), 500);
}
let vita1= 10;
let vita2= 10; 
function controlla(){
  if(bool1==true && bool2==true){
    vita1=10;
    vita2=10;
    generaGame();
    timerDiv = document.getElementById("turno");
    gioco();
  }
}

function generaGame(){  
     let a=`
     <meta charset="UTF-8">
     <meta http-equiv="X-UA-Compatible" content="IE=edge">
     <!-- initial-scale è a 1.2 così lo zoom è settato a 120% -->
     <meta name="viewport" content="width=device-width, initial-scale=1.2">
     <script src="dati.js" defer ></script>
     <script src="script.js" defer ></script>
     <script src="gioco.js" defer ></script>
     <title>Robot War</title>
     <link href="css/gioco.css" rel="stylesheet" type="text/css"/>
     <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
     <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
     `
     let b=`
     <section id="schermi">
      <div id="schermo1">
        <article class="lifebar">
        <img src="./img/barra vita/BarraVita-10.png" alt="Lifebar non disponibile" height="100px" width="300px">
        </article>
        <img src="${personaggio1}" height="400px" width="300px">
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
      <div id="turno">
        <h3>Tocca a:</h3>
        <h1>Giocatore 1 / Giocatore 2</h1>
      </div>
      <div id="schermo2">
        <article class="lifebar">
          <img src="./img/barra vita/BarraVita-10.png" alt="Lifebar non disponibile" height="100px" width="300px">
        </article>
        <img src="${personaggio2}" height="400px" width="300px">
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

function gioco(){
let btnAt1 = document.getElementById("attacco1");
let btnAt2 = document.getElementById("attacco2");
let btnDif1 = document.getElementById("difesa1");
let btnDif2 = document.getElementById("difesa2");
let btnUlt1 = document.getElementById("ulti1");
let btnUlt2 = document.getElementById("ulti2");
let scelta1=0;
let scelta2=0;

//mosse 1
btnAt1.addEventListener("click",function(){
  scelta1=1;
});
btnDif1.addEventListener("click",function(){
  scelta1=2;
});
btnUlt1.addEventListener("click",function(){
  scelta1=3;
});


//mosse2
btnAt2.addEventListener("click",function(){
  scelta2=1;
});
btnDif2.addEventListener("click",function(){
  scelta2=2;
});
btnUlt2.addEventListener("click",function(){
  scelta2=3;

});

avviaTimer();


}
function avviaTimer(){
  timer10sec = setInterval(startCombattimento, 10000);
}

function startCombattimento(){
  
  console.log("RESET");

  if (tempo != 0) {
    timer1sec = setInterval(function(){
      timerDiv.textContent = tempo;
      tempo--;
      if (tempo == 0){
        console.log("2) tempo == 0");
        clearInterval(timer1sec);

        tempo = 10;
        
        clearInterval(timer10sec);
        setTimeout(function(){
          avviaTimer();
        }, 3000);
      }
      
    }, 1000); 
  }

}

function risultato(){
  window.open("classifica.html");
}

function classifica(){
  
}
