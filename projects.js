const projects = {}

projects.init = function init() {
    projects.displayprojects();
}

projects.projectLinks = [
    {
        name: 'Currency Converter',
        livelink: 'https://incandescent-sprinkles-c54daa.netlify.app/',
        repo: 'https://github.com/Juno-Project-2/Currency-Converter'
    },
    {
        name: 'Captured Landing Page',
        livelink: 'https://graceful-cajeta-2db571.netlify.app/',
        repo: 'https://github.com/DanRamsauer/daniel-ramsauer-project-one'
    }
]

    
projects.projectsUl = document.querySelector('#projects');

projects.displayprojects = function () {

    projects.projectLinks.forEach(project => {
        const li = document.createElement('li');
        const p = document.createElement('p');
        const anchorOne = document.createElement('a');
        const anchorTwo = document.createElement('a');

        p.innerHTML = project.name;
        anchorOne.innerText = 'Live Link';
        anchorTwo.innerText = 'Repo';
        anchorOne.href = project.livelink;
        anchorTwo.href = project.repo;

        li.appendChild(p);
        li.appendChild(anchorOne);
        li.appendChild(anchorTwo);
        projects.projectsUl.appendChild(li);        
    });
}



projects.init();