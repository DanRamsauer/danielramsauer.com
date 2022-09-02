const projectLinks = [
    {
        name: 'Currency Converter',
        livelink: 'https://incandescent-sprinkles-c54daa.netlify.app/',
        repo: 'https://github.com/Juno-Project-2/Currency-Converter',
        img : './assests/Photos/currencyConverter.png',
        description: 'A website created with a partner that takes a number from the user and has them choose a source currency and target currency and it gives you the conversion rate',
        class: 'project'
    },
    {
        name: 'Anime finder',
        livelink: 'https://animes-finder.netlify.app/',
        repo: 'https://github.com/DanRamsauer/daniel-ramsauer-project-three',
        img : './assests/Photos/animeFinder.png',
        description: 'A React website that uses an api to display animes to the page and allows the user to add to favourites',
        class: 'project'
    },
    {
        name: 'Book Club',
        livelink: 'https://junobookclub.netlify.app/',
        repo: 'https://github.com/juno-book-club/book-club',
        img : './assests/Photos/bookClub.png',
        description: 'A website made with 3 other people. It takes from the Google books API and allows the user to search and login to add books to  their own favourites list',
        class: 'project'
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