//tyiping annimation
var typed = new Typed(".typing", {
    strings:["Web Designer", "Web Developer", "Graphical Design"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true

})

//aside

const nav = document.querySelector("nav"),
navList = nav.querySelector("li"),
totalNavList = navList.length;
for(i=0 ; i<totalNavList ; i++){
    console.log(navList[i])
    const a= navList[i].querySelector("a");
    a.addEventListener("click", function()
    {
        for(let j=0; j<totalNavList; j++){
            navList[j].querySelector("a").classList.remove("active");
        }
      this.classList.add("active")
    })
}
const navTogglerBtn = document.querySelector(".nav-toggler"),
aside =document.querySelector(".aside");
navTogglerBtn.addEventListener("click", () =>
{
    asideSectionTogglerBtn();
})
function asideSectionTogglerBtn()

{
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
function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }