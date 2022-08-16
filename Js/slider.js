
var slider =document.querySelectorAll(".slide");
console.log(slider);
var zero=0;
function slid(x){

    if(x==slider.length){
        zero=0;
        x=0;
    }
    if(x==-1){
        zero=slider.length -1;
        x=slider.length -1;
        
    }

   
    for(i=0;i<slider.length;i++){
        slider[i].style.display="none";
    }

    slider[x].style.display="block";
   
}
slid(zero);

function clickme(y){
    zero=zero+y;
    slid(zero);
}




