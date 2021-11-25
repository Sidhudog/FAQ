var toggles = document.querySelectorAll(".fas.open.fa-caret-down");
var listcontents = document.querySelectorAll(".listcontent");
var lists = document.querySelectorAll(".lists");
toggles.forEach((p,i)=>{
    p.addEventListener('click',function(){
        if(p.classList.contains("open")){
            p.classList.remove("open", "fa-caret-down");
            p.classList.add("close", "fa-times-circle");
            listcontents[i].style.display="block"
            lists[i].style.height="90px"
        }
        else{
            p.classList.remove("close", "fa-times-circle");
            p.classList.add("open", "fa-caret-down");
           listcontents[i].style.display = "none";
            lists[i].style.height = "50px";
        }
    })
})

