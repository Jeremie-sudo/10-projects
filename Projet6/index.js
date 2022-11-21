
const input = document.querySelector("input")
const names =document.querySelectorAll('.client')

input.addEventListener('input',(e)=>{
	let  content = e.target.value 
	names.forEach((name)=>{

	   if (name.textContent.indexOf(content) >=0) {
	          name.style.display=""
	   }
	    else{
	    	 name.style.display="none"
	    }
})


})
