let detail_tabs = document.getElementsByClassName("d-tab");
let content_tab = document.getElementsByClassName("content-tab");

function changeAboutTab(_id, current){
  for (detail_tab of detail_tabs){
    detail_tab.classList.remove("active");
    current.classList.add("active");
  }
  
  for (ct of content_tab){
    ct.classList.remove("active");
  }
  document.getElementById(_id).classList.add("active")
}

function myAlert(msg, delay){
  setTimeout(() => alert(msg), delay)
}