export const Storage = (() => {
    const saveProjects = (projects) => {
        localStorage.setItem('todoProjects', JSON.stringify(projects));
    };

    const getProjects = () => {
        const projects = localStorage.getItem('todoProjects');
        return projects ? JSON.parse(projects) : [];
    };

    return { saveProjects, getProjects };
})();