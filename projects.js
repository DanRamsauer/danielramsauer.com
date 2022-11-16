const projectLinks = [
    {
        name: 'Anime finder',
        tech1: 'React',
        tech2: 'HTML',
        tech3: 'CSS',
        tech4: 'Firebase',
        livelink: 'https://animes-finder.netlify.app/',
        repo: 'https://github.com/DanRamsauer/daniel-ramsauer-project-three',
        img : './assests/Photos/animeFinder.png',
        description: 'A React website that uses an api to display animes to the page and allows the user to add to favourites',
        class: 'project'
    },
    {
        name: 'Book Club Reads',
        tech1: 'React',
        tech2: 'HTML',
        tech3: 'SCSS',
        tech4: 'Firebase',
        livelink: 'https://junobookclub.netlify.app/',
        repo: 'https://github.com/juno-book-club/book-club',
        img : './assests/Photos/bookClubReads.png',
        description: 'A four person project that uses the google books API and google authentication to allow the user to search for books and add them to a favourites list. From that favourites list that user can remove them or mark them as read.',
        class: 'project'
    },
    {
        name: 'Currency Converter',
        tech1: 'React',
        tech2: 'HTML',
        tech3: 'SCSS',
        tech4: 'Firebase',
        livelink: 'https://incandescent-sprinkles-c54daa.netlify.app/',
        repo: 'https://github.com/Juno-Project-2/Currency-Converter',
        img : './assests/Photos/currencyConverter.png',
        description: 'A website created with a partner that takes a number from the user and has them choose a source currency and target currency and it gives you the conversion rate',
        class: 'project'
    },
    {
        name: 'Captured Landing Page',
        tech1: 'HTML',
        tech2: 'CSS',
        livelink: 'https://graceful-cajeta-2db571.netlify.app/',
        repo: 'https://github.com/DanRamsauer/daniel-ramsauer-project-one',
        img : './assests/Photos/Captured.png',
        description: 'A landing page for a fake website',
        class: 'project'
    },
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
        const tStack1 = document.createElement('p');
        const tStack2 = document.createElement('p');
        const tStack3 = document.createElement('p');
        const tStack4 = document.createElement('p');
        const tStackDiv = document.createElement('div');
        const anchorDiv = document.createElement('div');

        h3.innerText = project.name;
        anchorOne.innerText = 'Live';
        anchorTwo.innerText = 'Repo';
        anchorOne.href = project.livelink;
        anchorTwo.href = project.repo;
        pTwo.innerText = project.description;
        tStack1.innerText = project.tech1;
        tStack2.innerText = project.tech2;
        tStack3.innerText = project.tech3;
        tStack4.innerText = project.tech4;
        img.src = project.img;
        img.alt = `A screenshot of ${project.name}`

        li.appendChild(h3);
        tStackDiv.appendChild(tStack1);
        tStackDiv.appendChild(tStack2);
        tStackDiv.appendChild(tStack3);
        tStackDiv.appendChild(tStack4);
        anchorDiv.appendChild(anchorOne);
        anchorDiv.appendChild(anchorTwo);
        li.appendChild(tStackDiv);
        li.appendChild(pTwo);
        div.appendChild(img);
        div.appendChild(li);
        li.appendChild(anchorDiv);
        projectsUl.appendChild(div);
        
        div.classList.add(project.class);
        tStackDiv.classList.add('techStack');
        tStack1.classList.add('flicker');
        tStack2.classList.add('flicker');
        tStack3.classList.add('flicker');
        tStack4.classList.add('flicker');
        anchorDiv.classList.add('links');
        li.classList.add('descriptions');
        anchorOne.setAttribute('target', '_blank');
        anchorTwo.setAttribute('target', '_blank');
    });
}

displayprojects();