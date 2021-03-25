
//########################### Fonction background parallax  #############

(function() {

    document.addEventListener("mousemove", parallax);
    const elem = document.querySelector("#parallax");
    function parallax(e) {
        let _w = window.innerWidth/2;
        let _h = window.innerHeight/2;
        let _mouseX = e.clientX;
        let _mouseY = e.clientY;
        let _depth1 = `${50 - (_mouseX - _w) * 0.06}% ${50 - (_mouseY - _h) * 0.06}%`;
        let _depth2 = `${50 - (_mouseX - _w) * 0.06}% ${50 - (_mouseY - _h) * 0.06}%`;
        let _depth3 = `${50 - (_mouseX - _w) * 0.06}% ${50 - (_mouseY - _h) * 0.06}%`;
        let x = `${_depth3}, ${_depth2}, ${_depth1}`;
        elem.style.backgroundPosition = x;
    }

})();

//########################### page de chargement  #############

function preloader(){
        document.getElementById("chargement").style.display = "none";
}
window.onload = preloader

//########################### animation des barre du menu  #############

document.getElementById('croixm').addEventListener('click', function () {
    
    var barreh = document.getElementById("barreh");
    var barreb = document.getElementById("barreb");
    var nav = document.getElementById("navbar");
    var contents = document.getElementsByClassName("ctn");
    
    if (barreh.classList.contains('clicked') && barreb.classList.contains('clicked2')) {
        //condition sur le clique des barre pour enlever l'animation si déja clicker 
        barreh.classList.remove('clicked');
        barreb.classList.remove('clicked2');
        //retrait de la classe pour reinitialiser à l'animation de base
        nav.classList.remove('avance');
        for ( var i = 0; i <contents.length;i++){
            //enlever le deplacement des different contenu de la page 
            contents[i].classList.remove('margectn');
        }
    } else {
        //mettre une marge sur tout les contenu du site lorsque le menu est ouvert
        for ( var i = 0; i <contents.length;i++){
            contents[i].classList.add('margectn');
        }
        barreh.classList.add('clicked');
        barreb.classList.add('clicked2');
        nav.classList.add('avance');

    }
});

//########################### Garder les liens du menu centrer au scroll de la souris  #############

function isElementOutViewport(el){
    var rect = el.getBoundingClientRect();
    return rect.bottom < 0 || rect.right < 0 || rect.left > window.innerWidth || rect.top > window.innerHeight;
}
window.onscroll = function() {
    var scroll = (document.documentElement.scrollTop ||
        document.body.scrollTop);
    var barreh = document.getElementById("barreh");
    var barreb = document.getElementById("barreb");
    var nav = document.getElementById("navbar");
    var parallax = document.getElementById("parallax");

    if(scroll>30&& !isElementOutViewport(parallax)&& barreh.classList.contains('clicked') && barreb.classList.contains('clicked2')){
        console.log(scroll);
        document.getElementById('liens-menu').style.paddingTop =  'calc('+scroll+'px + '+scroll+'px)';
    }
}
    
//########################### deplacement d'elements dans sont contener (ancienne page contact  #############
//
// var x,y;
// var dragdiv =  document.getElementsByClassName("mydiv");
// var click = false;
//
// var i;
// for (i = 0; i < dragdiv.length; i++) {
//     console.log(dragdiv[i]);
//     dragdiv[i].addEventListener('mousedown', function(e) {
//         click = true
//         this.style.filter = 'drop-shadow(0 0 1vh black)';
//         this.style.zIndex= '90';
//     });
//     dragdiv[i].addEventListener('mouseup', function(e) {
//         click = false;
//         this.style.filter = 'drop-shadow(0 0 0 black)';
//         this.style.zIndex= '15';
//     });
//
//
//     dragdiv[i].addEventListener('mousemove', function(event) {
//         if (click) {
//
//             x = event.clientX;
//             y = event.clientY;
//
//
//             // dragdiv[i] ='calc('+x+'px - 350px)';
//             // dragdiv[i].clientTop ='calc('+y+'px - 350px)';
//
//             this.style.left = 'calc('+x+'px - 350px)';
//             this.style.top  = 'calc('+y+'px - 150px)';
//         }else{
//
//         }
//     });
// }

//########################### désactiver les navbars du site   #############

    function desactiver(e){
        return false
    }

function reactiver(){
    return true
}

//internet explorer version 4 et plus
document.onselectstart=new Function ("return false")
//internet explorer version 6
if (window.sidebar){
    document.onmousedown=desactiver
    document.onclick=reactiver
}

//########################### script pour ajouter un mon mail au presse papier de l'utilisateur   #############

var d= document.getElementById("mail-copie")
var contentHolder = document.getElementById("content-holder");
d.addEventListener("click", function() {
    var range = document.createRange();
    range.selectNode(contentHolder);
    document.getSelection().addRange(range);
    document.execCommand('copy');
    alert("email copié");
}, false);
