let todoList = document.getElementById('todoList');

todoList.addEventListener('click', function(event) {
    if(event.target.tagName === 'LI') {
        event.target.classList.toggle('checked')
        console.log("Li Working now")
    }
})

let count = 0;

const handleTodo = () => {
    let inputTodo = document.getElementById('inputTodo');
    let nodeLI = document.createElement('li');
    let error = document.getElementById('error');
    let span = document.createElement('span')
    let txt = document.createTextNode('\u00D7')
    
    // let i = parseInt(count.textContent);

    if(inputTodo.value !== '') {
        nodeLI.append(inputTodo.value)
        todoList.appendChild(nodeLI);
        error.style.display = 'none'
        count++
        document.getElementById('count').innerHTML = count;
    } else {
        error.style.display = 'block'
    }
    inputTodo.value = '';

    span.className = 'close'
    span.appendChild(txt)
    nodeLI.appendChild(span)

    span.onclick = function() {
        let li = this.parentElement;
        li.style.display = 'none'
        count--
        document.getElementById('count').innerHTML = count;
    }

}