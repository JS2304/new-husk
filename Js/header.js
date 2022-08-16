var header = document.querySelector("header");
	header.innerHTML+=`
		<div class="bg-grayy font2 position-relative">
			<div class="containerr">
				<div class="row">
					<div class="col-md-6 ">
						<div class="logo ">
							<h1> HUSH THE UNISEX SALON</h1>
						</div><!--styleing-column-->
					</div><!--column-->
					
					<div class="col-md-6 ">
						<div class="logo text-end">
						<div class="three-lineNew" onclick="clickable(menu)">
							<span class="fa fa-align-justify"></span>
						</div>
						</div><!--styleing-column-->
					</div><!--column-->
				</div><!--row-->
			</div><!--container-->
		</div><!--main-->
		
	`;

	
		var navBar=["Home","About","Services","Gallery","Contact Us"];
		var navBar_links=["#home","#aboutus","#services","#gallery","#appointment"];
		var navBarAlt=["Home","About","Services","Gallery","Contact Us"];

		
	
	header.innerHTML+=`
		<div class="font" >
			<div class="container">
				<div class="row">
					<div class="navi " id="menu">
						<div class="text-end px-1"><i class="material-icons" onclick="clickable(menu) "style="font-size:36px">close</i></div>
						<ul class="navigation list-unstyled ">
							
						</ul>
					</div><!--column-->
				</div><!--row-->
			</div><!--container-->
		</div><!--main-->
		
	`;
	
	var nav= document.querySelector(".navigation");

	
	
	for(i=0;i<navBar.length;i++){
		nav.innerHTML+=`
			
		<li><a href="${navBar_links[i]}" alt="${navBarAlt[i]}">${navBar[i]}</a></li>
	`;	
	}
		
		
		function clickable(menu){
			if(menu.style.opacity==0 || menu.style.visibility=="hidden"){
				menu.style.opacity=1;
				menu.style.visibility="visible";
				menu.style.left="-8px";

				
			}
			
			else{
				menu.style.opacity=0;
				menu.style.left="-408px";

				
			}
			
			
		}
		

		