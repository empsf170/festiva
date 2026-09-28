
document.addEventListener("DOMContentLoaded",()=>{
 const path=location.pathname.split("/").pop()||"index.html";
 document.querySelectorAll(".nav-link").forEach(a=>{if(a.getAttribute("href")===path)a.classList.add("active")});
 document.querySelectorAll("[data-year]").forEach(e=>e.textContent=new Date().getFullYear());
 const back=document.querySelector(".back-top");
 window.addEventListener("scroll",()=>{if(back)back.style.display=scrollY>450?"grid":"none"});
 if(back)back.addEventListener("click",e=>{e.preventDefault();scrollTo({top:0,behavior:"smooth"})});
 document.querySelectorAll("form").forEach(form=>form.addEventListener("submit",e=>{
  e.preventDefault();const b=form.querySelector("button[type=submit]");
  if(b){const t=b.textContent;b.textContent="Submitted";setTimeout(()=>b.textContent=t,2200)}
 }));
});
