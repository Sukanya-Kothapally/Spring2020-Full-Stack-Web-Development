// Enter your code here
let heightdiv = document.getElementById('height');
let widthdiv = document.getElementById('width');

window.addEventListener('resize',onresize)
onresize();

function onresize() 
{
    heightdiv.innerHTML = (window.innerHeight);
    widthdiv.innerHTML = (window.innerWidth);
};