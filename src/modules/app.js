import { TodoFactory } from './todo';
import { ProjectFactory } from './project';
import { Storage } from './storage';

export const TodoApp = (() => {
    let projects = [];
    const defaultProject = ProjectFactory('Inbox');

    const init = () => {
        const savedProjects = Storage.getProjects();
        if (savedProjects.length > 0) {
            projects = savedProjects.map(p => {
                const project = ProjectFactory(p.name);
                p.todos.forEach(t => project.addTodo(TodoFactory(t.title, t.description, t.dueDate, t.priority)));
                return project;
            });
        } else {
            projects = [defaultProject];
        }
        Storage.saveProjects(projects);
    };

    const addProject = (name) => {
        const project = ProjectFactory(name);
        projects.push(project);
        Storage.saveProjects(projects);
        return project;
    };

    const addTodoToProject = (projectId, todoData) => {
        const project = projects.find(p => p.id === projectId) || defaultProject;
        const todo = TodoFactory(todoData.title, todoData.description, todoData.dueDate, todoData.priority);
        project.addTodo(todo);
        Storage.saveProjects(projects);
        return todo;
    };

    return { init, addProject, addTodoToProject, projects };
})();