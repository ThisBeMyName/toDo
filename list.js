// Creates a new todo list
var todos = [];

// Prompts the user which action they would like to do
var input = prompt("What would you like to do?");

// The while loop:
while(input !== "quit"){
	if(input === "list"){
 		listTodos();
	} else if (input === "new"){
		newItem();
	} else if (input === "delete"){
		deleteItem();
	}
	input = prompt("What would you like to do?");
}

console.log("Okay, you quit that app. Here is your list:");
console.log(todos);

//********FUNCTIONS********

// Console.log's the current list
function listTodos(){
	console.log("**********")
		todos.forEach(function(todo, i){
			console.log(i + 1 + ": " + todo)
		});
		console.log("**********")
}

// Adds a new item to the list
function newItem(){
	var newTodo = prompt("Enter a new todo");
	todos.push(newTodo);
}

// Deletes an item from the list
function deleteItem(){
	var index = prompt("Enter item number of todo to delete");
	--index
	todos.splice(index,1);
	console.log("Deleted Todo");
}
