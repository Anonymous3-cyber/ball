const baller = document.querySelector('.ball')
document.body.addEventListener('click',function (event) {
    const y = event.clientY
    const x = event.clientX

    baller.style.top = y + "px"
    baller.style.left = x + "px"
})





