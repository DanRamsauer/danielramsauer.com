const projectLinks = [
    {
        name: 'Currency Converter',
        livelink: 'https://incandescent-sprinkles-c54daa.netlify.app/',
        repo: 'https://github.com/Juno-Project-2/Currency-Converter',
        img : './assests/Photos/currencyconverterscreenshot.png',
        description: 'An app that takes a number from the user and has them choose a source currency and target currency and it gives you the conversion rate'
    },
    {
        name: 'Captured Landing Page',
        livelink: 'https://graceful-cajeta-2db571.netlify.app/',
        repo: 'https://github.com/DanRamsauer/daniel-ramsauer-project-one',
        img : './assests/Photos/currencyconverterscreenshot.png',
        description: 'A landing page for a fake website'
    }
]

    
const projectsUl = document.querySelector('#projects');

const displayprojects = function () {

    projectLinks.forEach(project => {
        const li = document.createElement('li');
        const h3 = document.createElement('h3');
        const anchorOne = document.createElement('a');
        const anchorTwo = document.createElement('a');
        const pTwo = document.createElement('p');
        const image = document.createElement('img');

        h3.innerText = project.name;
        anchorOne.innerText = 'Live Link';
        anchorTwo.innerText = 'Repo';
        anchorOne.href = project.livelink;
        anchorTwo.href = project.repo;
        pTwo.innerText = project.description;
        image.alt = `A screenshot of ${project.name}`;
        image.src = project.img;

        li.appendChild(h3);
        li.appendChild(anchorOne);
        li.appendChild(anchorTwo);
        li.appendChild(pTwo);
        li.appendChild(image);
        projectsUl.appendChild(li);        
    });
}



displayprojects();