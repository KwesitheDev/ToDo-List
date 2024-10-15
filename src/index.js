
import style from './styles.css';
import { TodoApp } from './modules/app';
import { DomManager } from './modules/dom';

document.addEventListener('DOMContentLoaded', () => {
    TodoApp.init();
    DomManager.renderProjects();
});

