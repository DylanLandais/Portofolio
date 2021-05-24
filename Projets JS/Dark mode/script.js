const body = document.getElementById('body')
const logoMenu = document.getElementById('logo-menu')
const logo = document.getElementsByClassName('logo')
const cursorDarkMode = document.getElementById('cursor-dark-mode')
const cursorWhiteMode = document.getElementById('cursor-white-mode')
const btnDarkMode = document.getElementById('btn-dark-mode')
const descBtn = document.getElementById('desc-btn')


cursorDarkMode.addEventListener('click', function(){
    

    body.style.backgroundColor = "black"
    body.style.color = 'white'
    descBtn.innerText = 'White mode'

    cursorDarkMode.style.display = 'none'
    cursorWhiteMode.style.display = 'block'
    btnDarkMode.style.justifyContent = 'flex-end'
})

cursorWhiteMode.addEventListener('click', function(){
    

    body.style.backgroundColor = "white"
    body.style.color = 'black'
    
    descBtn.innerText = 'Dark mode'

    cursorDarkMode.style.display = 'block'
    cursorWhiteMode.style.display = 'none'
    btnDarkMode.style.justifyContent = 'flex-start'
})