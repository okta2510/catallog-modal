console.log('initialize....');


var slideIndex = 1;
var tabIndex = 1;
var modal = document.getElementById('modal'),
    bg = document.getElementById("modal-backdrop")
showSlides(slideIndex);
showTab();


// function loop() {
//   var slides = document.getElementsByClassName("catalogSlide");
//   var i;
//   for(i=0,i<slides.length,i++){
//
//     currentSlide();
//   }
// }

// modal
function showModal(){
  modal.style.display = "block";
  bg.style.display = "block";
  currentSlide(1);
  currentTab(1);
}

function hideModal(){
  modal.style.display = "none";
  bg.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        bg.style.display = "none";
    }
}

function currentTab(n){
  showTab(tabIndex = n);
}
function showTab(n){
  var i;
  var tabs = document.getElementsByClassName("tab-pane");
  var dots = document.getElementsByClassName("dot-tab");
  if (n > tabs.length) {tabeIndex = 1}
  if (n < 1) {tabIndex = tabs.length}

  for (i = 0; i < tabs.length; i++) {
      tabs[i].style.display = "none";
      dots[i].className.replace("active", "");
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("active", "");
  }
  // .classList.add("otherclass");
  tabs[tabIndex-1].style.display = " block ";
  dots[tabIndex-1].className += " active ";
}

// slider

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("catalogSlide");
  var dots = document.getElementsByClassName("dot");
  // setInterval(loop, 2000);

  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}

  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("fa-dot-circle-o", "fa-circle-o");
  }

  slides[slideIndex-1].style.display = " block ";
  dots[slideIndex-1].className += " fa-dot-circle-o ";
}
