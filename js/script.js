//tyiping annimation
var typed = new Typed(".typing", {
    strings: ["Web Designer", "Web Developer", "Graphical Design"],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true

})


function validation() {
    var form = document.getElementById("form");
    var email = document.getElementById("email").value;
    var text = document.getElementById("text");
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email.match(pattern)) {
        form.classList.add("valid");
        form.classList.remove("invalid");
        text.innerHTML = "Your Email Address is Valid";
        text.style.color = "#00ff00";

    }
    else {
        form.classList.remove("valid");
        form.classList.add("invalid");
        text.innerHTML = "Please Enter Valid Email";
        text.style.color = "#ff0000";


    }
    if (email == "") {
        form.classList.remove("valid");
        form.classList.remove("invalid");
        text.innerHTML = "";
        text.style.color = "#00ff00";

    }

}
function validateFirstName(){
  var fname = document.getElementById("fname").value;

    if (fname.length < 3) {
        document.getElementById("Message").innerHTML = "** First name must be 3 character";
        return false;
    }
    if (fname.length > 20) {
            document.getElementById("Message").innerHTML = "** First name must be less than 20 character";
            return false;
        }
}
function validateLastName(){
    var lname = document.getElementById("lname").value;
    if (lname.length < 3) {
        document.getElementById("message").innerHTML = "** Last name must be 3 character";
        return false;
    }
}
function validateTextField(){
    var subject = document.getElementById("subject").value;

    if (subject.length < 3) {
        document.getElementById("Messages").innerHTML = "**Subject is too short";
        return false;
    }
}


function myFun() {
    validateFirstName();
    validateLastName();
    validateTextField();
 
    // var correct_way = /^[A-Za-z]+$/;
    // var a = document.getElementById("fname").value;
    // var b =document.getElementById("lname").value
    

    // if (a == "") {
    //     document.getElementById("Message").innerHTML = "** Please Enter your First Name";
      

    // }
    
    // if (b == "") {
    //     document.getElementById("Message").innerHTML = "** Please Enter your Last Name";
    //     return false;

    // }
  
    // if (a.length < 3) {
    //     document.getElementById("Message").innerHTML = "** First name must be 3 character";
    //     return false;
    // }
    // if (a.length > 20) {
    //     document.getElementById("Message").innerHTML = "** First name must be less than 20 character";
    //     return false;
    // }
    // if(a.match(correct_way))
    // true;
    // else{
    //     document.getElementById("Message").innerHTML = "** Only alphabets are allowed here ";
    //     return false;  
    // }
}

document.querySelector(".submit-button").addEventListener("click",myFun())

// const menu_toggle = document.querySelector('.menu-toggle');
// const aside = document.querySelector('.aside');
// menu_toggle.addEventListener('click',() =>{
//     menu_toggle.classList.toggle('nav');
//     aside.toggle.classList('nav')
    
// })
