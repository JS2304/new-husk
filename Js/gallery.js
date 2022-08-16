var galleryimg = document.querySelector("#Gbox");

var galleryImage=["g1.webp","g2.webp","g3.webp","g4.webp","g5.webp","g8.webp","g7.webp","g6.webp"];

for(i=0;i<galleryImage.length;i++){
    galleryimg.innerHTML+=`
    <div class="col-md-4">
        <div class="gallery-img">
             <img src="img/${galleryImage[i]}" class="img-thumbnail">
        </div><!--styling-column-->
    </div>      
       
    `;
}

console.log(galleryimg);
