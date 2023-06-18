const grid = document.querySelector('#grid');
const list = document.querySelector('#listBtn');
const display = document.querySelector('.cards');

grid.addEventListener('click', () => {
    display.classList.add('grid');
    display.classList.remove('listBtn');
});

list.addEventListener('click', listCompanies);

function listCompanies() {
    display.classList.add('listBtn');
    display.classList.remove('grid');

}




const url = './data/data.json';

async function getCompaniesData() {
    const response = await fetch(url);
    const data = await response.json();
    displayCompanies(data.companies);
    
}


const displayCompanies = (companies) => {
    const cards = document.querySelector('div.cards');

    companies.forEach((company) => {
        let card = document.createElement('section');
        let image = document.createElement('img');
        let h3 = document.createElement('h3');
        let id = document.createElement('p');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let website = document.createElement('p');

        image.setAttribute('src', company.logo);
        image.setAttribute('alt', company.name);
        image.setAttribute('loading', 'lazy');
        h3.textContent = company.name;
        id.textContent = `ID: ${company.id}`;
        address.textContent = company.address;
        phone.textContent = `Phone Number: +52 ${company.phone}`;
        website.textContent = `Website: ${company.website}`;

        card.appendChild(h3);
        card.appendChild(image);
        card.appendChild(id);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);
        cards.appendChild(card);

    });
}


getCompaniesData();