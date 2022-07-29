const portfolio = {}

console.log(portfolio);
portfolio.init = function init() {
    portfolio.displayPortfolio();
}

portfolio.projectLinks = [
    {
        name: 'Currency Converter',
        livelink: 'https://incandescent-sprinkles-c54daa.netlify.app/',
        repo: 'https://github.com/Juno-Project-2/Currency-Converter'
    }
    {
        name: 'Captured Landing Page',
        livelink: 'https://graceful-cajeta-2db571.netlify.app/',
        repo: 'https://github.com/DanRamsauer/daniel-ramsauer-project-one'
    }
]

    
portfolio.projects = document.querySelector('#projects');

portfolio.displayPortfolio = function () {

    portfolio.projectLinks.forEach(project => {
        const ul = document.createElement('li')
    });
}



portfolio.init();