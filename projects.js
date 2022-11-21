const projectLinks = [
    {
        name: 'Anime finder',
        tech: [
                'React',
                'HTML',
                'CSS',
                'Firebase',
                'RESTful API',
            ],
        livelink: 'https://animes-finder.netlify.app/',
        repo: 'https://github.com/DanRamsauer/daniel-ramsauer-project-three',
        img : './assests/Photos/animeFinder.png',
        description: 'An indivisual coding project that uses an api to display animes to the page and allows the user to search and add them to a favourites list.',
        class: 'project'
    },
    {
        name: 'Book Club Reads',
        tech: [
            'React',
            'HTML',
            'SASS',
            'Firebase',
            'RESTful API',
        ],
        livelink: 'https://junobookclub.netlify.app/',
        repo: 'https://github.com/juno-book-club/book-club',
        img : './assests/Photos/bookClubReads.png',
        description: 'A four person project that uses the google books API and google authentication to allow the user to search for books and add them to a favourites list. From that favourites list that user can remove them or mark them as read.',
        class: 'project'
    },
    {
        name: 'Currency Converter',
        tech: [
            'JavaScript',
            'HTML',
            'CSS',
            'RESTful API',
        ],
        livelink: 'https://incandescent-sprinkles-c54daa.netlify.app/',
        repo: 'https://github.com/Juno-Project-2/Currency-Converter',
        img : './assests/Photos/currencyConverter.png',
        description: 'A paired-programming project that allows the user to input an amount and has them choose a source currency and target currency and it gives the conversion rate.',
        class: 'project'
    },
    {
        name: 'Captured Landing Page',
        tech: [
            'HTML',
            'CSS',
        ],
        livelink: 'https://graceful-cajeta-2db571.netlify.app/',
        repo: 'https://github.com/DanRamsauer/daniel-ramsauer-project-one',
        img : './assests/Photos/Captured.png',
        description: 'An indivisual coding project that converts a PSD into a multi-page, functional, and responsive website.',
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
        const tStackDiv = document.createElement('div');
        const anchorDiv = document.createElement('div');

        h3.innerText = project.name;
        anchorOne.innerText = 'Live';
        anchorTwo.innerText = 'Repo';
        anchorOne.href = project.livelink;
        anchorTwo.href = project.repo;
        pTwo.innerText = project.description;
        img.src = project.img;
        img.alt = `A screenshot of ${project.name}`

        li.appendChild(h3);
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
        anchorDiv.classList.add('links');
        li.classList.add('descriptions');
        anchorOne.setAttribute('target', '_blank');
        anchorTwo.setAttribute('target', '_blank');
        
        project.tech.forEach(tStack => {
            const stack = document.createElement('p');
            stack.innerText = tStack;
            stack.classList.add('flicker');
            tStackDiv.appendChild(stack);
        });

    });
}

displayprojects();