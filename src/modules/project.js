export const ProjectFactory = (name) => {
    const todos = [];
    
    return {
        name,
        id: Date.now().toString(),
        todos,
        addTodo(todo) {
            todos.push(todo);
        },
        removeTodo(todoId) {
            const index = todos.findIndex(todo => todo.id === todoId);
            if (index !== -1) {
                todos.splice(index, 1);
            }
        }
    };
};