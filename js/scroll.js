window.addEventListener("load",function(){
window.onwheel = function(e) {
    var wHeight = window.innerHeight;
    if(e.deltaY<0){
        wHeight=- wHeight;
        scrollBy(0,wHeight)
    }
    else{
         wHeight=+ wHeight;
        scrollBy(0,wHeight)
    }
    return false
}

window.onkeydown=function(event){
    var wHeight = window.innerHeight;
    if(event.keyCode==40){
       
        wHeight=+ wHeight;
        scrollBy(0,wHeight)
    }
    if(event.keyCode==38){
       
        wHeight=- wHeight;
        scrollBy(0,wHeight)
    }
    return false
}
})