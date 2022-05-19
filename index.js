let vShadow =document.querySelector(".vh");
let hShadow =document.querySelector(".hh");
let blur =document.querySelector(".bh");
let color =document.querySelector(".clr");
let info =document.querySelector(".dev");
let block = document.querySelector(".box");


hShadow.oninput = horizontolShadow;
vShadow.oninput = verticalShadow;
blur.oninput = blurShadow;
color.oninput = colorSet;

function horizontolShadow(){  
      block.style.boxShadow =`${hShadow.value}px ${vShadow.value}px ${blur.value}px ${color.value}`;

      info.innerHTML = `${hShadow.value}px ${vShadow.value}px ${blur.value}px ${color.value}`;
}

function verticalShadow(){  
      block.style.boxShadow =`${hShadow.value}px ${vShadow.value}px ${blur.value}px ${color.value}`;

      info.innerHTML = `${hShadow.value}px ${vShadow.value}px ${blur.value}px ${color.value}`;
}

function blurShadow(){  
      block.style.boxShadow =`${hShadow.value}px ${vShadow.value}px ${blur.value}px ${color.value}`;

      info.innerHTML = `${hShadow.value}px ${vShadow.value}px ${blur.value}px ${color.value}`;
}

function colorSet(){  
      block.style.boxShadow =`${hShadow.value}px ${vShadow.value}px ${blur.value}px ${color.value}`;

      info.innerHTML = `${hShadow.value}px ${vShadow.value}px ${blur.value}px ${color.value}`;
}

