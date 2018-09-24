window.addEventListener("load",function(){
window.onwheel = function(e) {
    var wHeight = window.innerHeight;
    var step =wHeight/20;
    if(e.deltaY<0){
        wHeight=- wHeight;
        var i=0;
        setInterval(function(){
             i++
             if(i<=20){
            scrollBy(0,-step)
             }
        },10) 
    }
    else{
        wHeight=+ wHeight;
        var i=0;
        setInterval(function(){
             i++
             if(i<=20){
            scrollBy(0,step)
             }
        },10) 
    }
    return false
}

window.onkeydown=function(event){
    var wHeight = window.innerHeight;
    var step =wHeight/20;
    if(event.keyCode==40){
       
        wHeight=+ wHeight;
        var i=0;
        setInterval(function(){
             i++
             if(i<=20){
            scrollBy(0,step)
             }
        },10) 
        return false
    }
    if(event.keyCode==38){
       
        wHeight=- wHeight;
        var i=0;
        setInterval(function(){
             i++
             if(i<=20){
            scrollBy(0,-step)
             }
        },10) 
        return false
    }
    
}
})