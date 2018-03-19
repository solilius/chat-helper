console.log("hello from .js");
var visible = false;

function clicked(){
    var popup = document.getElementsByClassName('popup')[0];
    if (!visible){
        popup.style.visibility='visible';
        console.log("visible");
        visible = true;
    } else{
        popup.style.visibility='hidden';
        console.log("hidden");
        visible = false;
    }
}

