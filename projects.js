const projectLinks = [
    {
        name: 'Currency Converter',
        livelink: 'https://incandescent-sprinkles-c54daa.netlify.app/',
        repo: 'https://github.com/Juno-Project-2/Currency-Converter',
        img : './assests/Photos/currencyConverter.png',
        description: 'An website created with a partner that takes a number from the user and has them choose a source currency and target currency and it gives you the conversion rate',
        class: 'projectOne'
    },
    {
        name: 'Captured Landing Page',
        livelink: 'https://graceful-cajeta-2db571.netlify.app/',
        repo: 'https://github.com/DanRamsauer/daniel-ramsauer-project-one',
        img : './assests/Photos/Captured.png',
        description: 'A landing page for a fake website',
        class: 'projectTwo'
    }
]

    
const projectsUl = document.querySelector('#projects');

const displayprojects = function () {

    projectLinks.forEach(project => {
        const div = document.createElement('div');
        const img = document.createElement('img');
        const li = document.createElement('li');
        const h3 = document.createElement('h3');
        const anchorOne = document.createElement('a');
        const anchorTwo = document.createElement('a');
        const pTwo = document.createElement('p');

        h3.innerText = project.name;
        anchorOne.innerText = 'Live Link';
        anchorTwo.innerText = 'Repo';
        anchorOne.href = project.livelink;
        anchorTwo.href = project.repo;
        pTwo.innerText = project.description;
        img.src = project.img;
        img.alt = `A screenshot of ${project.name}`

        li.appendChild(h3);
        li.appendChild(anchorOne);
        li.appendChild(anchorTwo);
        li.appendChild(pTwo);
        div.appendChild(img);
        div.appendChild(li);
        projectsUl.appendChild(div);
        
        div.classList.add(project.class);
        li.classList.add('descriptions');
        anchorOne.classList.add('flicker');
        anchorTwo.classList.add('flicker');
        anchorOne.setAttribute('target', '_blank');
        anchorTwo.setAttribute('target', '_blank');
    });
}

displayprojects();