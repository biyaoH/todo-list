// init
let list = document.querySelector('#my-todo')
let doneList = document.querySelector('#my-done')
console.log(doneList)
const todos = ['Hit the gym', 'Read a book', 'Buy eggs', 'Organize office', 'Pay bills']
const done = []
for (let todo of todos) {
  addItem(todo)
}

function addItem(text) {
  let newItem = document.createElement('li')
  newItem.innerHTML = `
    <label for="todo">${text}</label>
    <i class="check fa fa-check-circle-o" style="cursor:pointer" aria-hidden="true"></i>
    <i class="delete fa fa-trash" style="cursor:pointer"></i>
  `
  list.appendChild(newItem)
}

// Create
const addBtn = document.querySelector('#addBtn')
addBtn.addEventListener('click', itemAdd)
// 鍵盤enter輸入
window.addEventListener('keypress', function (event) {
  if (event.keyCode === 13) itemAdd()
})

function itemAdd() {
  let inputValue = document.querySelector('#newTodo').value
  // 無內容即不產生新todo事項
  if (inputValue.replace(/(^s*)|(s*$)/g, "").length == 0) return
  addItem(inputValue)
}

// Delete and check
list.addEventListener('click', function (event) {

  if (event.target.classList.contains('check')) {
    //     完成 To Do 內容
    const checkIcon = event.target

    checkIcon.setAttribute("class", "check fa fa-check-circle")

    let li = event.target.parentElement
    // setTimeout(li.remove(), 9000)
    setTimeout((() => li.remove()), 1000)

    //     增加 Done 內容
    let text = event.target.parentElement.innerText
    let doneItem = document.createElement('li')

    doneItem.innerHTML = `
    <label for="done">${text}</label>
    <i class="delete fa fa-trash" style="cursor:pointer"></i>
  `
    doneList.appendChild(doneItem)

    //     刪除 To Do 內容
  } else if (event.target.classList.contains('delete')) {

    // event.target.classList.toggle('checked')
    let li = event.target.parentElement
    li.remove()

  }
})

//     刪除 Done 內容
doneList.addEventListener('click', function (event) {
  if (event.target.classList.contains('delete')) {

    let li = event.target.parentElement
    li.remove()

  }
})