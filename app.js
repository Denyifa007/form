'use strict'
const form = document.querySelector('#newTaskForm')
const input = document.querySelector('#newTaskInput')
const listElement = document.querySelector('#tasks')

form.addEventListener('submit', (e) =>{
    // e.preventDefault() prevents the default state of a form from refreshing the page
    e.preventDefault()
    // console.log(input.value);
    const task = input.value
    if (!task) {
        alert('input fied must not be empty')
        
    } else {
        console.log('happy');
    }
    // creating div's and input fields
    // creating div with class of task
    const taskElement = document.createElement('div')
    taskElement.classList.add('task')
    // creating div with class of content
    const taskContentElement = document.createElement('div')
    taskContentElement.classList.add('content')
    const taskInputElement = document.createElement('input')
    taskInputElement.classList.add('text')
    taskInputElement.type = 'text'
    taskInputElement.value = task
    taskInputElement.setAttribute('readonly', 'readonly')
    // lets append input to the div of content using appendChild() method
    taskContentElement.appendChild(taskInputElement)
    const taskActionsElemnet = document.createElement('div')
    // taskActionsElemnet.classList.add('actions')
    const taskEditElement = document.createElement('button')
    taskEditElement.classList.add('edit')
    taskEditElement.innerText = 'Edit'

    // delete btn
    const taskDeleteElement = document.createElement('button')
    taskDeleteElement.classList.add('delete')
    taskDeleteElement.innerText = 'Delete'

    taskActionsElemnet.appendChild(taskEditElement)
    taskActionsElemnet.appendChild(taskDeleteElement)

    taskElement.appendChild(taskContentElement)
    taskElement.appendChild(taskActionsElemnet)
    listElement.appendChild(taskElement)
    input.value = ''

    taskEditElement.addEventListener('click', ()=> {
        if (taskEditElement.innerText === 'Edit') {
            taskInputElement.removeAttribute('readonly')
            taskEditElement.innerText = 'save'
            
        } else {
            taskInputElement.setAttribute('readonly', 'readonly')
            taskEditElement.innerText = 'edit'
        }
    })

    taskDeleteElement.addEventListener('click', function(){
        listElement.removeChild(taskElement)
    })
    

})