var signin = document.querySelector(".sign-in")
var signup = document.querySelector(".cotainer-registration")
var signin_header = document.querySelector("#header-signin")
var signup_header = document.querySelector("#header-signup")
// var active_product = document.querySelectorAll(".product-left-item")

// var login = true;

const isMenuMobile = document.querySelector(".menu-mobile");
const linear_gradient = document.querySelector(".backgroud")
const isMenuProduct = document.querySelector("#qualuuniem-mobile")
let ismenu2 = false;

function ActiveMenu2(){
  if(ismenu2){
    isMenuProduct.classList.remove('active-menu-2')
    document.querySelector("#qualuuuneim-menu2").style = "color:#333"
    ismenu2 = !ismenu2
  }
  else{
    isMenuProduct.classList.add('active-menu-2')
    document.querySelector("#qualuuuneim-menu2").style = "color:#fff"
    ismenu2 = !ismenu2

  }
}

function OpenMenu(){
  isMenuMobile.style = "left:0px"
  linear_gradient.style = "display:block"

}
function CloseMenu(){
  isMenuMobile.style = "left:-200px"
  linear_gradient.style = "display:none"


}
if(isActiveMenu === true){
  // isMenuMobile.style = "left:0px"
  console.log(123)
}



function signupF(){
   signin.classList.remove('active')
   signup.classList.add('active')

   signin_header.classList.remove('active-header')
   signup_header.classList.add('active-header')
}
function signinF(){
    signup.classList.remove('active')
    signin.classList.add('active')

    signup_header.classList.remove('active-header')
    signin_header.classList.add('active-header')
 }


 var btn_cart = document.querySelectorAll(".btn-cart")


var x = document.querySelectorAll('.content-right-item')
var content = document.querySelectorAll('.content-lef-member')
 function slider_test2(a){
   for(let i=0;i<4;i++){
     if(a==i){
       if(a===0){
         x[0].classList.add("active-don")
         x[1].classList.remove("active-lin")
         x[2].classList.remove("active-an")
         x[3].classList.remove("active-chom")
         content[0].classList.add("active-left")
         content[1].classList.remove("active-left")
         content[2].classList.remove("active-left")
         content[3].classList.remove("active-left")
       }
       if(a===1){
         x[1].classList.add("active-lin")
         x[0].classList.remove("active-don")
         x[2].classList.remove("active-an")
         x[3].classList.remove("active-chom")
         content[0].classList.remove("active-left")
         content[1].classList.add("active-left")
         content[2].classList.remove("active-left")
         content[3].classList.remove("active-left")
       }
       if(a===2){
         x[0].classList.remove("active-don")
         x[1].classList.remove("active-lin")
         x[2].classList.add("active-an")
         x[3].classList.remove("active-chom")
         content[0].classList.remove("active-left")
         content[1].classList.remove("active-left")
         content[2].classList.add("active-left")
         content[3].classList.remove("active-left")
       }
       if(a===3){
         x[0].classList.remove("active-don")
         x[1].classList.remove("active-lin")
         x[2].classList.remove("active-an")
         x[3].classList.add("active-chom")
         content[0].classList.remove("active-left")
         content[1].classList.remove("active-left")
         content[2].classList.remove("active-left")
         content[3].classList.add("active-left")
       }
     }
   }
 }



