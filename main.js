// show menu
const navUl = document.querySelector("nav ul")
const navToggle = document.querySelector("nav .nav-toggle")

navToggle.addEventListener("click", () => {
    navUl.classList.toggle("show")
})

// close menu after clicking on any li
const allLis = document.querySelectorAll("nav ul li")
allLis.forEach(li => {
    li.addEventListener("click", () => {
        navUl.classList.remove("show")
    })
})

// scroll to top
const scrollBtn = document.querySelector(".scroll-btn")
const navBar = document.querySelector("header")

window.onscroll = () => {
    // header on scrolling
    if(window.scrollY >= 400){
        navBar.classList.add("show")
    }
    if (window.scrollY === 0){
        navBar.classList.remove("show")
    }

    // scroll to top btn
    if(window.scrollY >= 600){
        scrollBtn.classList.add("active")
    }
    else{
        scrollBtn.classList.remove("active")
    }
}

scrollBtn.addEventListener("click", () => {
    window.scrollTo({
        top:0,
        left:0,
        behavior: "smooth",
    })
})