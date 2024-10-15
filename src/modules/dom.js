import { TodoApp } from './app';

export const DomManager = (() => {
    const renderProjects = () => {
        const projectList = document.querySelector('.project-list');
        projectList.innerHTML = '';
        
        TodoApp.projects.forEach(project => {
            const projectElement = document.createElement('div');
            projectElement.classList.add('project');
            projectElement.setAttribute('data-project-id', project.id);
            
            projectElement.innerHTML = `
                <h3>${project.name}</h3>
                <div class="todo-list"></div>
            `;
            
            projectList.appendChild(projectElement);
            renderTodos(project);
        });
    };
    
    const renderTodos = (project) => {
        const projectElement = document.querySelector(`[data-project-id="${project.id}"]`);
        const todoList = projectElement.querySelector('.todo-list');
        todoList.innerHTML = '';
        
        project.todos.forEach(todo => {
            const todoElement = document.createElement('div');
            todoElement.classList.add('todo');
            todoElement.classList.add(`priority-${todo.priority.toLowerCase()}`);
            
            todoElement.innerHTML = `
                <h4>${todo.title}</h4>
                <p>Due: ${todo.dueDate}</p>
            `;
            
            todoList.appendChild(todoElement);
        });
    };

    return { renderProjects };
})();