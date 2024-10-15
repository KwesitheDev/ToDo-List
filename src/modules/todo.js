export const TodoFactory = (title, description, dueDate, priority) => {
    return {
        title,
        description,
        dueDate,
        priority,
        isComplete: false,
        id: Date.now().toString(),
    };
};