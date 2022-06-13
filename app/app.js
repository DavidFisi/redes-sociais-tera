const menuIconBtn = document.querySelector("#btn");
const sidebar = documento.querySelector(".sidebar");

menuIconBtn.addEventListener("click", ()=>{
  sidebar.classlist.toggle("open")
})