var todoList = {
    todos: [],
    
    addTodos: function(todoText) {
        this.todos.push({
            todoText: todoText,
            completed: false
        });
    },
    changeTodos: function(position, todoText) {
        this.todos[position].todoText = todoText;
    },
    deleteTodos: function(position) {
        this.todos.splice(position, 1);
    },
    toggleCompleted: function(position) {
        var todo = this.todos[position];
        todo.completed = !todo.completed;
    },
    toggleAll: function() {
        var totalTodos = this.todos.length;
        var completedTodos = 0;
        
        this.todos.forEach(function(todo){
            if (todo.completed === true) {
                completedTodos++;
            }
        });
        
        this.todos.forEach(function(todo){
            //case 1 if everythings true make everything false
            if (completedTodos === totalTodos) {
                todo.completed = false;
            } else {
              // case 2 otherwase make everthing true
              todo.completed = true;
            }
        });
    }
};

var handlers = {
    addTodos: function(){
        var addTodoTextInput = document.getElementById("addTodoTextInput");
        todoList.addTodos(addTodoTextInput.value);
        addTodoTextInput.value = '';
        view.displayTodos();
    },
    
    changeTodos: function(){
        var changeTodoPositionInput = document.getElementById("changeTodoPositionInput");
        var changeTodoTextInput = document.getElementById("changeTodoTextInput");
        todoList.changeTodos(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
        changeTodoPositionInput.value = '';
        changeTodoTextInput.value = '';
        view.displayTodos();
    },
    
    deleteTodos: function(position){
        todoList.deleteTodos(position);
        view.displayTodos();
    },
    
    toggleCompleted: function(){
        var toggleCompletedPositionInput = document.getElementById("toggleCompletedPositionInput");
        todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
        toggleCompletedPositionInput.value = '';
        view.displayTodos();
    },
    
    toggleAll: function(){
        todoList.toggleAll();
        view.displayTodos();
    }
}

var view = {
    displayTodos: function(){
        var todosUl = document.querySelector('ul');
        todosUl.innerHTML = '';
        
        todoList.todos.forEach(function(todo, position){
            var todoLi = document.createElement('li');
            var todoTextWithCompletion = '';
            
            if (todo.completed === true){
                todoTextWithCompletion = '(x) ' + todo.todoText;
                } else {
                    todoTextWithCompletion = '( ) ' + todo.todoText;
                    }
            
            todoLi.id = position
            todoLi.textContent = todoTextWithCompletion;
            todoLi.appendChild(this.createDeleteButton());
            todosUl.appendChild(todoLi);
        }, this);
        
    },
    createDeleteButton : function(){
        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'deleteButton';
        return deleteButton;
    },
    setupEventListeners : function(){
        var todosUl = document.querySelector('ul');

        todosUl.addEventListener('click', function(){
            var elementClicked = event.target;
    
            if (elementClicked.className === 'deleteButton'){
            handlers.deleteTodos(parseInt(elementClicked.parentNode.id));
            };
        });
    }
};

view.setupEventListeners();