window.addEventListener('load',()=>{

    //global variable - local storage - getItem(), setItem(), removeItem()
    //convert todos from string to array and store it in todos global variable
    todos = JSON.parse(localStorage.getItem('todos')) || [];

    //generate nameInput variable with id name element, input box
    const nameInput = document.querySelector('#name');

    //generate newTodoForm variable with Entire Form Elements as a whole.
    const newTodoForm = document.querySelector('#new-todo-form');

    //generate username variable for local storege key 'username'
    const username = localStorage.getItem('username') || '';

    //nameInput box value will equal to local storage username value
    nameInput.value = username;

    //listen for any changes to the name input value, if so username key will equal new value.
    nameInput.addEventListener('change',(e)=>{
        localStorage.setItem('username',e.target.value);
    });

    newTodoForm.addEventListener('submit', (e)=>{
        const timeStamp = new Date().toLocaleString();
        e.preventDefault();
        const todo = {
            content: e.target.elements.content.value,
            category: e.target.elements.category.value,
            done: false,
            timeStamp: timeStamp,
        };

        //use push() method to add new todo array to todos group array
        todos.push(todo);

        //convert todos array to string and store it in localStorage bank "todos" session
        localStorage.setItem('todos', JSON.stringify(todos));

        //reset all elemnts in the form with reset() method
        e.target.reset();

        console.log(todos);
    });

});

