document.getElementById('newTask').addEventListener("keypress", function(event) {
    if (event.key === 'Enter') {
        addNewTask()
    }
});

/* EXERCISE 5: 
            Add a new task to the list.
            Suggestion:
            - Use document.getElementById to get the UL item and the input text
            - Use the document.createElement to create the new List Item
            - Append the child to the UL
        */
const addNewTask = function () {
    let newTask = document.createElement('li')
    newTask.innerText = document.getElementById('newTask').value
    newTask.style.backgroundColor = document.getElementById('colorPicker').value
    if(newTask.innerText === ''){
        return
    }
    document.getElementById('myTaskList').appendChild(newTask)
    document.getElementById('newTask').value = ''
}

/* EXERCISE 6: 
            Create a method "removeLast" which removes the last item from the task list
        */
const removeLast = function () {
    let allLi = document.querySelectorAll('#myTaskList > li')
    allLi[allLi.length-1].remove()
}

/* EXERCISE 7: 
            Create a method "removeFirst" which removes the first item from the task list
        */
const removeFirst = function () {
    document.querySelector('#myTaskList > li').remove()
}

/* EXERCISE 8: 
        Create a method "getTasksAsArray" which returns, and prints to the console an array containing the tasks as string
        */
const getTasksAsArray = function () {
    let allLi = document.querySelectorAll('#myTaskList > li')
    let tasks = []
    for(li of allLi) {
        tasks.push(li.innerText)
    }
    return tasks
}

/* EXERCISE 9:
        Create a method "changeTaskBackgroundColor" which takes the color from the color picker with an 
        onchange event listener ad applies it as background to every list item
        */
const changeTaskBackgroundColor = function() {
    let color = document.getElementById('colorPicker').value
    let allLi = document.querySelectorAll('#myTaskList > li')
    for(li of allLi) {
        li.style.backgroundColor = color
    }
}

document.getElementById('colorPicker').addEventListener('change', function() {
    changeTaskBackgroundColor()
})
/* EXTRA */

/* EXERCISE 10: 
        Create a method "bubbleSort()" which sort the task list alphabetically using the bubble sort algorithm
        
        Use your spare time to beautify your task list via CSS.

        Suggestion:
        - Break the code into many function for semplicity 
        - Reuse the functions previously created
        */
const bubbleSort = function() {
    let array = Array.from(document.querySelectorAll('#myTaskList li'))
    let alphabet = '1234567890abcdefghijklmnopqrstuvwxyz'
    let sorted = []
    for(let i=0; i<array.length-1; i++){
        for(let x=0; x<array.length-1; x++) {
            let currentChar = array[x].innerText[0].toLowerCase()
            let nextChar = array[x+1].innerText[0].toLowerCase()
            let currentCharPos = alphabet.indexOf(currentChar)
            let nextCharPos = alphabet.indexOf(nextChar)
            if(currentCharPos < nextCharPos) {
                sorted.pop()
                sorted.push(array[x])
                sorted.push(array[x+1])
            } else {
                sorted.pop()
                sorted.push(array[x+1])
                sorted.push(array[x])
            }
            array = sorted.concat(array.slice(x+2, array.length))
        }
        array = sorted
        sorted = []
    }
    let allLi = document.querySelectorAll('#myTaskList > li')
    for(li of allLi) {
        li.remove()
    }
    let ul = document.getElementById('myTaskList')
    for(task of array) {
        ul.appendChild(task)
    }
}