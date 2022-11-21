const countryArray={
     1:"Afghanistan",
     2:"Afrique du Sud",
     3:"Allemagne",
     4:"Dominique",
     5:"Erythrée",
     6:"Fidji",
     7:"France",
     8:"Guinée",
     9:"Guyana",
     10:"Zambie",
     11:"Ukraine",
     12:"République Centrafricaine",
     13:"Ghana",
     14:"Guatemala",
     15:"Géorgie",
     16:"Burundi",
     17:"Burkina Faso"
}
const capital = {
      1:"Kaboul",
      2:"Pretoria",
      3:"Berlin",
      4:"Roseau",
      5:"Asmara",
      6:"Suva",
      7:"Paris",
      8:"Conakry",
      9:"Georgetown",
      10:"Lusaka",
      11:"Kiev",
      12:"Bangui",
      13:"Accra",
      14:"Guatemala",
      15:"Tbilissi",
      16:"Bujumbura",
      17:"Ouagadougou"
}
let points = 0;

 const gameBoucle =() =>{
const country = document.querySelector('#country');
let rdm1 = Math.floor(Math.random()*17)+1
country.textContent=countryArray[`${rdm1}`]

     let answ = Math.ceil(Math.random()*3)
for (var i = 1; i<=3; i++) {
       if(i==answ){
     const choices = document.querySelector('.choices');
     const btn = document.createElement("button");
     btn.textContent=capital[`${rdm1}`]
     choices.appendChild(btn)

       }else{
          let rdm2= Math.floor(Math.random()*17)+1
          const choices = document.querySelector('.choices');
          const btn = document.createElement("button");
          btn.textContent=capital[`${rdm2}`]
          choices.appendChild(btn)
       }
}
const btns = document.querySelectorAll('button');
 btns.forEach((btn)=>{
     btn.addEventListener('click',()=>{
          const earn =document.querySelector('.earn');
          const choices = document.querySelector('.choices')

          if(btn.textContent===capital[`${rdm1}`]){
              points+=10;
              earn.textContent=points + " Points";

          }else{
            points-=10; 
              earn.textContent=points + " Points";
          }
         choices.innerHTML="";
          gameBoucle();
     })
 })

 }
gameBoucle()