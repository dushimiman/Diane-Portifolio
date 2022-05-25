//tyiping annimation
var typed = new Typed(".typing", {
    strings: ["Web Designer", "Web Developer", "Graphical Design"],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true

})

//aside

const nav = document.querySelector("nav"),
    navList = nav.querySelector("li"),
    totalNavList = navList.length;
for (i = 0; i < totalNavList; i++) {
    console.log(navList[i])
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function () {
        for (let j = 0; j < totalNavList; j++) {
            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active")
    })
}
const navTogglerBtn = document.querySelector(".nav-toggler"),
    aside = document.querySelector(".aside");
navTogglerBtn.addEventListener("click", () => {
    asideSectionTogglerBtn();
})
function asideSectionTogglerBtn() {
    aside.classList.toggle("open");
}
// validation

// function validation(){
//    var fname = document.getElementById("fname").value;
//    var lname = document.getElementById("lname").value;
//    var country = document.getElementById("country").value;
//    var message = document.getElementById("message").value;
//   var text;
//   error_message.style.padding = "10px";

//   if(fname.length <5){
//       text = "Please Enter Valid name";
//       error_message.innerHTML = text;
//       return false
//   }
//   return false;
// }
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

function myFun() {
    var correct_way = /^[A-Za-z]+$/;
    var a = document.getElementById("fname").value;

    if (a == "") {
        document.getElementById("Message").innerHTML = "** Please Enter your First Name";
        return false;

    }
  
    if (a.length < 3) {
        document.getElementById("Message").innerHTML = "** First name must be 3 character";
        return false;
    }
    if (a.length > 20) {
        document.getElementById("Message").innerHTML = "** First name must be less than 20 character";
        return false;
    }
    if(a.match(correct_way))
    true;
    else{
        document.getElementById("Message").innerHTML = "** Only alphabets are allowed here ";
        return false;  
    }
}