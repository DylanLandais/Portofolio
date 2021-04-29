//USER 1
const pseudo1 = document.getElementById('pseudo1')
const input1 = document.getElementById('input1')
const send1 = document.getElementById('send1')

//USER 2
const pseudo2 = document.getElementById('pseudo2')
const input2 = document.getElementById('input2')
const send2 = document.getElementById('send2')

//ZONE D'AFFICHAGE DES MESSAGES

const chatZone = document.getElementById('chat')

//FONCTION USER 1

let displayMessage1 = () => {
  var newElement = document.createElement('p')
  var newContent = document.createTextNode(pseudo1.value + ' dit :  ' + input1.value + ' ')
  
  
  chatZone.appendChild(newElement)
  newElement.appendChild(newContent)

  

  var currentElement = chatZone
  document.body.insertAdjacentHTML(newElement, currentElement)

}

//FONCTION USER 2

let displayMessage2 = () => {
  var newElement = document.createElement('p')
  var newContent = document.createTextNode(pseudo2.value + ' dit :  ' + input2.value + ' ')
  
  chatZone.appendChild(newElement)
  newElement.appendChild(newContent)


  var currentElement = chatZone
  document.body.insertAdjacentHTML(newElement, currentElement)

}

//Listeners

send1.addEventListener('click', displayMessage1)
send2.addEventListener('click', displayMessage2)