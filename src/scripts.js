document.querySelectorAll("[s-tag-switch]").forEach(element => {
    element.addEventListener("input",function(){
        if(this.checked){
            this.setAttribute("checked","true")
        }else{
            this.removeAttribute("checked")
        }
    })
});  