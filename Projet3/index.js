const img = document.querySelector('img');

// Selection des setters

const  Grayscale = document.getElementById('Gryscale');
const  Sepia = document.getElementById('Sepia');
const  Brightness = document.getElementById('Brightness');
const  Contrast = document.getElementById('Contrast');
const  hrotate = document.getElementById('hrotate');

// Gryscale 
Grayscale.addEventListener('input',(e)=>{
          let g = e.target.value+'%';
          img.style.setProperty('--grc',g);
          document.getElementById('gry').textContent='grayscale'+'('+ g+')'
     }
	)
// Sepia 
Sepia.addEventListener('input',(e)=>{
          let s = e.target.value+'%';
          img.style.setProperty('--sp',s);
          document.getElementById('sep').textContent='sepia'+'('+s+')'
     }
    )
//
Brightness.addEventListener('input',(e)=>{
          let b = e.target.value+'%';
          img.style.setProperty('--bg',b);
          document.getElementById('bri').textContent='brightness'+'('+b+')'
      
     }
    )
//
Contrast.addEventListener('input',(e)=>{
          let c = e.target.value+'%';
          img.style.setProperty('--cn',c);
          document.getElementById('con').textContent='contrast'+'('+c+')'
      
     }
    )
//
hrotate.addEventListener('input',(e)=>{
          let h = e.target.value+'deg';
          img.style.setProperty('--hg',h);
          document.getElementById('hug').textContent='hue-rotate'+'('+h+')'
      
     }
    )