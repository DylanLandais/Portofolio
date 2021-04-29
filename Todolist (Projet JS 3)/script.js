let inputTask = document.getElementById('todo-task')

let addBtn = document.getElementById('add-button')

let list = document.getElementById('todo-list')

addBtn.addEventListener('click', function () {

  var newLi = document.createElement('li')
  var content = document.createTextNode(inputTask.value)

  newLi.appendChild(content)
  list.appendChild(newLi)
  inputTask.value = ''


})