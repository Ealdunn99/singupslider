// "use strick";
//////1//5ci tapsiriqla biryerde isdiyir!!!
let run=0;
const button = document.querySelector(".button")
let bar = document.querySelector(".bar")
let color = parseFloat(getComputedStyle( document.querySelector(".color")).width)
button.addEventListener("click",function(){
    document.querySelector(".text").classList.add("textnon")
    let stop=1;
    let a=()=>{
        bar.addEventListener("click",function(){
            clearInterval(aa)
            stop=0;
            color=0;
            document.querySelector(".color").style.width=color+"%";
            document.querySelector(".text").classList.add("textnon")
        })
        bar.onmouseover=function(){
            clearInterval(aa)
            document.querySelector(".text").classList.remove("textnon")
        }
        let aa= setInterval(()=>{
            if (color===100) {
                clearInterval(aa)
                document.querySelector(".bar").classList.add("non")
                document.querySelector(".button").classList.add("non")
                setTimeout(function(){ 
                    document.querySelector(".bar").classList.add("non2")
                    ; }, 2000);
    
                    setTimeout(function(){ 
                        document.querySelector(".sms").classList.add("smsyes")
                        ; }, 2000);
               
            }
            else{
                if (tst==1) {
                    
                
                 color +=5;
                 [...document.querySelectorAll(".inputsent")].forEach(li=>{
                    li.value=""

                });
                [...document.querySelectorAll(".red")].forEach(li=>{
                    li.classList.remove("red")
                    
                });
          document.querySelector(".color").style.width=color+"%";
                }else{clearInterval(aa)}
            }
           
          
    
        },1000);
    }

    a()
    
    bar.onmouseout=function(){
        if (stop==1) {
            a()
            document.querySelector(".text").classList.add("textnon")
        }
    }

    
    
    

});



///////////////////////2

[...document.querySelectorAll(".imglist .img")].forEach(li=>{
li.addEventListener("click",function(){
    document.querySelector(".slider").classList.add("yes")
    document.querySelector(".left ").classList.add("yes")
    document.querySelector(".right ").classList.add("yes")
    document.querySelector(".close ").classList.add("yes")
    document.querySelector(".active").classList.remove("active")
    this.classList.add("active")
document.querySelector(".slider .img2").src=this.src;})});

document.querySelector(".right").addEventListener("click",function(){
    
    if (document.querySelector(".active").nextElementSibling) {
        document.querySelector(".slider .img2").src=document.querySelector(".active").nextElementSibling.src
document.querySelector(".active").nextElementSibling.classList.add("active")
document.querySelector(".active").classList.remove("active");
        
    } else {
        document.querySelector(".slider .img2").src=document.querySelector(".imglist").firstElementChild.src
document.querySelector(".imglist").firstElementChild.classList.add("active")
document.querySelector(".imglist").lastElementChild.classList.remove("active");
    }
})

document.querySelector(".left").addEventListener("click",function(){

    if (document.querySelector(".active").previousElementSibling) {
        document.querySelector(".slider .img2").src=document.querySelector(".active").previousElementSibling.src
document.querySelector(".active").previousElementSibling.classList.add("active")
document.querySelector(".active").nextElementSibling.classList.remove("active")
    } else {
        document.querySelector(".slider .img2").src=document.querySelector(".imglist").lastElementChild.src
        document.querySelector(".imglist").lastElementChild.classList.add("active")
document.querySelector(".imglist").firstElementChild.classList.remove("active");
    }
;});

document.querySelector(".close").addEventListener("click",function(){
    [...document.querySelectorAll(".yes")].forEach(li=>{
        li.classList.remove("yes")
        });
    });




/////////////////////////3

let tst=0;//color un duzgunimput gozdemesi ucun
let passw =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,99}$/;
button.addEventListener("click",function(){
    [...document.querySelectorAll(".inputsent")].forEach(li=>{
        me=li.value.trim()
    if (me=="") {
        run=0;
        tst=0;
        li.classList.add("red")
        setTimeout(function(){ 
            li.classList.remove("red")
            ; }, 2000);
        // [...document.querySelectorAll(".box")].forEach(li=>{li.classList.add("yes")})
        // document.querySelector(".box2").classList.add("yes")
        
    } 
    else {
        if (run==1) {
            tst=1;
            
            [...document.querySelectorAll(".box")].forEach(li=>{li.classList.remove("yes")})
            document.querySelector(".box2").classList.remove("yes")
        }
       

    }

});
   
})


const name = document.querySelector('.name')
const surname = document.querySelector('.Surname')
const email = document.querySelector('.Email')
const password = document.querySelector('.Password')

name.onkeyup=()=>{
    const inputmessega =name.value.trim()
    setTimeout(function(){ 
        if ([...inputmessega].length==0) {
            setTimeout(function(){ 
            document.getElementById("errorname").classList.remove("yes")
            run=1;
            ; }, 6000);
        }
   
    if ([...inputmessega].length<3) {
       
        document.getElementById("errorname").classList.add("yes")
        run=0;
       
    }
    else{
        document.getElementById("errorname").classList.remove("yes")
        run=1;
    }
    ; }, 2000);
}
surname.onkeyup=()=>{
    const inputmessega =surname.value.trim()
    setTimeout(function(){ 
   
    if ([...inputmessega].length==0) {
        setTimeout(function(){ 
        document.getElementById("errorSurname").classList.remove("yes")
        run=1;
        ; }, 6000);
    }
    
    if ([...inputmessega].length<3) {
        document.getElementById("errorSurname").classList.add("yes")
        run=0;
    }
    else{
        document.getElementById("errorSurname").classList.remove("yes")
        run=1;
    }
    ; }, 2000);
}
email.onkeyup=()=>{
    const inputmessega =email.value.trim()
    setTimeout(function(){ 
    

    if ([...inputmessega].length==0) {
        setTimeout(function(){ 
        document.getElementById("errorEmail").classList.remove("yes")
        run=1;
        ; }, 6000);
    }
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputmessega)){
        document.getElementById("errorEmail").classList.remove("yes")
        run=1;
    }
    else{
        document.getElementById("errorEmail").classList.add("yes")
        run=0;
    }
    ; }, 1000);
}
password.onkeyup=()=>{
    const inputmessega =password.value.trim()
    setTimeout(function(){ 
    
    if ([...inputmessega].length==0) {
        setTimeout(function(){ 
        document.getElementById("errorPassword").classList.remove("yes")
        run=1;
        ; }, 6000);
    }
    if (inputmessega.match(passw)){
        document.getElementById("errorPassword").classList.remove("yes")
        run=1;
    }
    else{
        document.getElementById("errorPassword").classList.add("yes")
        run=0;
    }
    ; }, 1000);
}