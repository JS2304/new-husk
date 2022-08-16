
function what1(){

   
    var fname =document.getElementById("input1").value;
    var lastname=document.getElementById("input2").value;
    var date=document.getElementById("input3").value;
    var phone=document.getElementById("input4").value;
    var email=document.getElementById("input5").value;
    var textarea=document.getElementById("input6").value;

    if(fname===""){
        alert("Please Enter your first Name");
    }
        if(lastname===""){
            alert("Please Enter your last Name");
        }  
            if(email===""){
                alert("Please Enter your email id");
            }
                if(phone===""){
                    alert("Please Enter your phone no");
                }
                    if(date===""){
                        alert("Please fill date properly");  
                    }
                      
    else{
        var Url="https://wa.me/+917000470889?text="
    + "first Name :"+ fname + "%0a"
    + "Last Name :"+ lastname + "%0a"
    + "Date :"+ date + "%0a"
    + "Phone No :"+ phone + "%0a"
    + "Email:"+ email +"%0a"
    + "Comments :"+ textarea;

    window.open(Url).focus();
    }
   

}





