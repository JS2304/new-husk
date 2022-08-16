var social=document.querySelector(".social ul");

var l=["www.google.com","www.facebook.com","www.instagram.com","www.twitter.com","www.youtube.com"];
var links=['<i class="fa fa-google"></i>','<i class="fa fa-facebook"></i>','<i class="fa fa-instagram"></i>','<i class="fa fa-twitter"></i>','<i class="fa fa-youtube-play"></i>'];
for(var i=0;i<links.length;i++){
    social.innerHTML+=`
        
            <li><a href="${l[i]}">${links[i]}</a></li>
        
        
    `;
    var li=document.querySelectorAll(".social ul li");
    var aa=document.querySelectorAll(".social ul li a");
    
    li[i].style.display="inline";
    li[i].style.margin="0px 10px";
    li[i].style.cursor="pointer";
    social.style.display="inline";
    social.style.position="absolute";
    social.style.right="20px";
    aa[i].style.color="white";

}



