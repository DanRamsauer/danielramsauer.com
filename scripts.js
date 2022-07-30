const portfolio = {}

portfolio.init = function init() {
    portfolio.displayPortfolio();
}

portfolio.projectLinks = [
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

    
portfolio.projects = document.querySelector('#projects');

portfolio.displayPortfolio = function () {

    portfolio.projectLinks.forEach(project => {
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
        portfolio.projects.appendChild(li);        
    });
}



portfolio.init();