var preloder = document.getElementById("preloder");
preloder.style.width = window.innerWidth + "px";
preloder.style.height = window.innerHeight + "px";
var mainText = document.getElementById("main");

function animateHeading(text, i) {
    document.getElementById("heading").innerHTML = text.substring(0, i);
    i++;
    if (i > text.length) {
        animateSubheading("multifunctional company", 1);
        return;
    }
    setTimeout("animateHeading('" + text + "'," + i + ")", 500);
}

function animateSubheading(text, i) {
    document.getElementById("subheading").innerHTML = text.substring(0, i);
    i++;
    if (i > text.length) {
        setInterval(
            function() {
                $('.preloader-text').animate({
                    opacity: 0.3
                }, 700).animate({
                    opacity: 1
                }, 700);

            }, 0);
        return;
    }
    setTimeout("animateSubheading('" + text + "'," + i + ")", 100);
}

function animateHeadingNew(text, i) {
    document.getElementById("heading_new").innerHTML = text.substring(0, i);
    console.log('Привет')
    i++;
    if (i > text.length) {
        animateSubheadingNew("multifunctional company", 1);
        return;
    }
    setTimeout("animateHeadingNew('" + text + "'," + i + ")", 300);
}

function animateSubheadingNew(text, i) {
    document.getElementById("subheading_new").innerHTML = text.substring(0, i);
    i++;
    
    
    setTimeout("animateSubheadingNew('" + text + "'," + i + ")", 50);
}


function animatePreloader() {
    animateHeading("metod", 1);
}

function animateMain() {
    animateHeadingNew("metod", 1);
    console.log("Hi!")
}
$(document).ready(function() {
    animatePreloader();
    animateMain();
});


window.addEventListener("load", function() {
    preloder.style.display = "none";
    var mouse = document.getElementById("mous"); // start
    var mtop = mouse.style.marginTop;
    mouse.style.marginTop = 25 + "px";
    var interval;
    var i = 1;

    interval = setInterval(function() {
        if (i == 1) {
            mouse.style.marginTop = 20 + "px";
            i = 0
        } else {
            mouse.style.marginTop = 25 + "px";
            i = 1
        }
    }, 200)

    // end
    //**var inp= document.getElementsByClassName("calc_field");
    //* for(var i=0;i<inp.length;i++){
    //*   inp[i].onfocus= function(e){
    //*       if(i==0){
    //*     document.getElementsByClassName("calc_field")[0].placeholder='dfg';}
    //*   }
    //*}
    var shar = document.getElementById("share");
    var ii;
    shar.addEventListener("mouseover", function() {
        interval = setInterval(function() {
            i++;
            shar.style.transform = 'rotate(-' + (i += 90) + 'deg)';
        }, 50)


    }, false)
    shar.addEventListener("mouseout", function() {
            clearInterval(interval);
        }, false) // end

}, false)