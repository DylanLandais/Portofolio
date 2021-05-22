
const digiClock = document.getElementsByClassName('digi-clock')
const hoursBox = document.getElementById('hours')
const minBox = document.getElementById('minutes')
const secBox = document.getElementById('seconds')

function setDate() {

    const now = new Date()
    var hours = now.getHours()
    var minutes = now.getMinutes()
    var seconds = now.getSeconds()
    
    hoursBox.textContent = hours

    minBox.textContent = minutes

    secBox.textContent = seconds
    
}



setInterval(setDate, 1000)
