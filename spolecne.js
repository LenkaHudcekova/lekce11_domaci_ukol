const menuButtonElm = document.querySelector("#menu-tlacitko")

const menuPolozkyElm = document.querySelector("#menu-polozky")

menuButtonElm.addEventListener("click",(e) =>{
    menuPolozkyElm.classList.toggle("show")
    if(menuPolozkyElm.classList.contains("show")) {
        const iElm = document.querySelector("i")
        iElm.classList.remove("fa-bars")
        iElm.classList.add("fa-xmark")
    } else {
        const iElm = document.querySelector("i")
        iElm.classList.remove("fa-xmark")
        iElm.classList.add("fa-bars")
    }
})

