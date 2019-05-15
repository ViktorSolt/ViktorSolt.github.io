function show(event){
  var target = event.target;
  var link = document.getElementsByClassName('active');
  var hidebar = document.getElementsByClassName('hidebar');
  var maintext = document.getElementsByClassName('main_text');
  link[0].style.marginLeft= 0 + "%";
  hidebar[0].classList.add("bar");
  hidebar[0].classList.remove("hidebar");
  maintext[0].style.top = 70 + "px";
  target.classList.add('hidebar');
  target.classList.remove('bar');
}

 function hide(){
   var link = document.getElementsByClassName('active');
   var bar = document.getElementsByClassName('bar');
   var hidebar = document.getElementsByClassName('hidebar')
   var maintext = document.getElementsByClassName('main_text');
   link[0].style.marginLeft= -55 + "%";
   bar[0].classList.add('hidebar');
   bar[0].classList.remove('bar');
   maintext[0].style.top = 0 + "px";;
   hidebar[0].classList.add("bar");
   hidebar[0].classList.remove("hidebar");
 }
