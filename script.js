let btn=document.querySelector(" .dark");

btn.onclick = function(){
    document.body.classList.toggle("ahza");
      if (document.body.classList.contains("ahza")) {
        btn.textContent = "Light Mode";
    } else {
        btn.textContent = "Dark Mode";
    }
   
}
