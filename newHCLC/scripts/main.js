/********************* News Slide *********************/
var slideIndex = 0;

function plusSlides(n)
{
  showSlides(slideIndex += n);
}

function currentSlide(n)
{
  showSlides(slideIndex = n);
}

function showSlides(n)
{
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++)
  {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++)
  {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}       
                
function carousel()
{
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++)
    {  
        x[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > x.length)
    {
        slideIndex = 1
    } 
    x[slideIndex-1].style.display = "block"; 
    setTimeout(carousel, 20000); 
  
    for (i = 0; i < dots.length; i++)
    {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}

/********************* Donate *********************/
function openWin()
{
  window.open("https://www.paypal.com/us/home");
}


/****************Volunteer*************************/
function submitWin()
{
  location.href = "thankyousubmit.html";
}

function thankYouMsg() {
    document.getElementById("thankyou").style.display = "block";
    location.href = "#a1";
}

/********************* responsive navbar *********************/
                
function openNav() {                   
    document.getElementById("mySidenav").style.width = "40%";               
}               
function closeNav() {                 
    document.getElementById("mySidenav").style.width = "0";                  
}