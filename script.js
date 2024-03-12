
// 
    const banner = document.querySelector(".banner")
function changeBg(bg, title, lorem) {
    const img_title = document.querySelector(".content .img-title")
    const p = document.querySelector(".content p")
    const contents = document.querySelectorAll(".content")
    banner.style.background = `url('${bg}')`
    banner.style.backgroundSize = "cover"
    banner.style.backgroundPosition = 'center'

    img_title.getAttribute('src')
    img_title.setAttribute("src", title)
    p.innerHTML = lorem
}