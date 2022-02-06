const todoReducer = (state: Array<Todo> = [], action: TodoPayload) => {
  const todosCopy = [...state];

  switch (action.type) {
    case "ADD":
      todosCopy.push(action.payload);
      return todosCopy;
    case "REMOVE":
      return [...state.filter((todo) => todo !== action.payload)];
    case "EDIT":
      const foundTodo = todosCopy.find((todo) => todo.id === action.payload.id);

      if (!foundTodo) return state;

      foundTodo.date = action.payload.date;
      foundTodo.name = action.payload.name;

      return todosCopy;
    case "COMPLETE":
      return completeTodo(todosCopy, action.payload);
    default:
      return state;
  }
};

const completeTodo = (todos: Array<Todo>, referencedTodo: Todo) => {
  const foundTodo = todos.find((todo) => todo.id === referencedTodo.id);

  if (!foundTodo) return todos;

  // Toggle todo completion state
  if (foundTodo.completedDate) {
    foundTodo.completedDate = undefined;
  } else {
    foundTodo.completedDate = new Date();
  }

  return todos;
};

export default todoReducer;
