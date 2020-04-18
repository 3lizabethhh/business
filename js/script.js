/*Scroll listener attached to body for parallax image and ScrollFire*/
function Scroll(){
    /* scrollX is the amount scrolled horizontally and scrollY is the amount scrolled vertically */
    var t = window.scrollY;
    /* get the parallax item and store in variable */
    var para = document.getElementById("para");
    
    /*
    y = background position in the div (this will shift as we scroll to create the parallax effect)
    x = how far we've scrolled from the top in pixels (this is our variable called t)
    m = how quickly to shift the image position
    b = the background position when x=0 (no scrolling)*/
    
    var m= -0.25;
    var b= 0;
    
    newY = m*t+b;
    
    /*assign new background Y position to parallax image*/
    para.style.backgroundPositionY = newY + "px";
    
    var t = window.scrollY;
            var nav = document.getElementById("nav");
                    
            var contactPicImage = document.getElementById("contactPicImage");
                if(t>3800){            
                contactPicImage.style.transform="scale(1.4,1.4)";     
                }
}

/*START of JS for Contact Section*/
/*Toggle show product ID textbox  */
function updateStatus(){
    var prodInfoStatus = document.getElementById("info");
    var prodIDLabel =document.getElementById("productIdLabel");
    var prodIDBox = document.getElementById("productId");

    if(prodInfoStatus.checked){
        prodIDLabel.className = "visible";
        prodIDBox.className = "textbox visible";
    } 
    else{
        prodIDLabel.className = "hidden";
        prodIDBox.className = "textbox hidden";
    }
}

/*Validates Name to be certain length with no numbers */
function checkName(){
    var nameBox= document.getElementById("name");
    var name=nameBox.value;
    var nums = new RegExp("[1234567890]")
    var containsNum = nums.test(name);
    
    if(name.length<7||containsNum ){
        nameBox.style.color="red";
    }
    else{
        nameBox.style.color = "green";
    }
}

/*Validates Email to be in a certain formate*/
function checkEmail(){
    var emailBox= document.getElementById("email");
    var email= emailBox.value;
    var format = new RegExp("[A-Za-z0-9]+@[A-Za-z0-9]+[.][A-Za-z0-9]+")
    var correctFormat = format.test(email);
    
    if(correctFormat==false){
        emailBox.style.color="red";
    }
    else{
        emailBox.style.color = "green";
    }
}

/*Validates ProductID to be one of the given products */
function checkProdID(){
    var IDBox= document.getElementById("productId");
    var ID= IDBox.value;
       
    if(ID=="dsf123"||ID=="fgd123"||ID=="abc123"||ID=="abg123"||ID=="dsf234"||ID=="fgd123"){
        IDBox.style.color="green";
    }
    else{
        IDBox.style.color = "red";
    }
}

function checkMsg(){
    var msgBox= document.getElementById("msg");
    var msg= msgBox.value;
       
    if(msg.length<10||msg.length>29){
        msgBox.style.color="red";
    }
    else{
        msgBox.style.color = "green";
    }
}

/*END of JS for Contact Section*/     

/*MODAL*/
