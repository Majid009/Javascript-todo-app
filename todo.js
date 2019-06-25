
let todos = [
  { title: "Coding" , isDone:false},
]

function printTodos(){
  
todos.forEach((todo)=>{
  //Creating Element and Adding to DOM
  let list = document.querySelector('#list');
  let li = document.createElement('li');
  let checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.setAttribute('id' , 'checkbox');
  let deleteButton = document.createElement('button');
  deleteButton.innerHTML='x';
  deleteButton.setAttribute('id','delete-button');
   li.appendChild(checkbox);
   li.appendChild(document.createTextNode(todo.title));
   li.appendChild(deleteButton);
   li.setAttribute('id','item');
   if(todo.isDone){
      li.classList.add('checked');
      checkbox.checked=true;
   }
   list.appendChild(li);
});

}

printTodos(); // calling printTodos function


// ================================ Add Todo =======================================
document.querySelector('#add-todo-button').addEventListener('click' , ()=>{
   
   let todo = document.querySelector('#input-todo').value;

   if(todo == ''){
       // handle this empty 
   } else{
     todos.push({title:todo , isDone:false}); // adding to array 
   //Creating Element and Adding to DOM
   let list = document.querySelector('#list');
   let li = document.createElement('li');
   let checkbox = document.createElement('input');
   checkbox.type = 'checkbox';
   document.querySelector('#input-todo').value='';
   checkbox.addEventListener('change' , function(){
    if(this.checked){
      let currentTodo = this.nextSibling.wholeText;
      todos.forEach((todo)=>{
        if(todo.title === currentTodo){
          this.parentNode.classList.add("checked");
          todo.isDone = true;
        }
      })
      
    } else{
      let currentTodo = this.nextSibling.wholeText;
      todos.forEach((todo)=>{
        if(todo.title === currentTodo){
          this.parentNode.classList.remove("checked");
          todo.isDone = false;
        }
      })
    }
   });
   checkbox.setAttribute('id' , 'checkbox');
   li.appendChild(checkbox);
   li.appendChild(document.createTextNode(todo));
   li.setAttribute('id','item');
   let deleteButton = document.createElement('button');
   deleteButton.innerHTML='x';
   deleteButton.addEventListener('click', ()=>{
    
      li.remove();
      // deleting from Array via filter
      let todo_remove = deleteButton.previousSibling.wholeText;
      todos = todos.filter((todo) => todo.title != todo_remove);
      
   })
   deleteButton.setAttribute('id','delete-button');
   li.appendChild(deleteButton);
   list.appendChild(li);
   }
   
});

// ============================= update Todo ========================================
let allitems = document.querySelectorAll('#checkbox');
allitems.forEach((item,index) =>{

  allitems[index].addEventListener('change', function(){
    if(this.checked){
      let currentTodo = this.nextSibling.wholeText;
      todos.forEach((todo)=>{
        if(todo.title === currentTodo){
          this.parentNode.classList.add("checked");
          todo.isDone = true;
        }
      })
      
    } else{
      let currentTodo = this.nextSibling.wholeText;
      todos.forEach((todo)=>{
        if(todo.title === currentTodo){
          this.parentNode.classList.remove("checked");
          todo.isDone = false;
        }
      })
    }
    
  });

});

// ================================= Delete Todo ==========================================
let allDeleteButtons = document.querySelectorAll('#delete-button');
allDeleteButtons.forEach((button , index)=>{
  allDeleteButtons[index].addEventListener('click',()=>{
    let li = allDeleteButtons[index].parentNode;
    let todo_remove = allDeleteButtons[index].previousSibling.wholeText;
    li.remove();
    // deleting from Array via filter
    todos = todos.filter((todo) => todo.title != todo_remove);
  });
})




