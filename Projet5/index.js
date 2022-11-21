const btns = document.querySelectorAll('.btn');
const screen = document.querySelector('#res')
const equal = document.querySelector('#eq')
const clean = document.querySelector('#cl')
const onoff = document.querySelector('#on')
const son = ()=>{
	const audio = new Audio();
	audio.src="ring.mp3";
	audio.play() ;
}
 
onoff.addEventListener("click",()=>{
	 screen.classList.toggle("allume");
})

btns.forEach((bt)=>{

	bt.addEventListener('click', (e)=>{
		son();
       screen.textContent += e.target.id;
	})
})
equal.addEventListener("click",()=>{
	 screen.textContent = eval( screen.textContent)
})

clean.addEventListener("click",()=>{
	 screen.textContent ="";
})
