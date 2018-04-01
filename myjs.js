var button = document.getElementById("menuButton");
var openedByClick = undefined;
var main = document.getElementById('main');
main.addEventListener('click',function (e){
    var drawer = document.getElementById('drawer');
    console.log('ajkshd');;
    if(openedByClick==true && openedByClick!==undefined){
        drawer.classList.toggle('open');
        openedByClick=false;
    }
   
});
button.addEventListener('click',createRipple);
function createRipple(e){
    console.log('jlaskjd');
    var circle = document.createElement("div");
    this.appendChild(circle);
    var d = Math.max(this.clientWidth, this.clientHeight);
    circle.style.width = circle.style.height = d +'px';
    circle.style.left = e.clientX - this.offsetLeft - d/2 + 'px';
    circle.style.top = e.clientY - this.offsetTop - d/2 + 'px';
    circle.classList.add('ripple');
    setTimeout(function(){
        button.removeChild(circle);
    },1000);
    
}
button.addEventListener('click',toggleNavBar);
function toggleNavBar(e){
    console.log('hello;');
    openedByClick = true;
    var drawer = document.getElementById('drawer');
    drawer.classList.toggle('open');
    e.stopPropagation();
    
}


var remButton= document.getElementById("addRem");
remButton.addEventListener('click',function(e){
    var timeDateDiv=document.getElementById("remDivId");
    timeDateDiv.classList.toggle('remdivopen');
    e.stopPropagation();
});