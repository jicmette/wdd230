const gridBtn = document.querySelector('.gridView');
const listBtn = document.querySelector('.listView');
const display = document.querySelector('.cards');

gridBtn.addEventListener('click', () => {
    display.classList.add('gridView');
    display.classList.remove('listView');
});

listBtn.addEventListener('click', listCompanies);

function listCompanies() {
    display.classList.add('listView');
    display.classList.remove('gridView');

}

const storage = './data/data.json';

async function getCompaniesData() {
    const response = await fetch(storage);
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
        let membership = document.createElement('p');
        let website = document.createElement('p');

        image.setAttribute('src', company.logo);
        image.setAttribute('alt', company.name);
        image.setAttribute('loading', 'lazy');
        h3.textContent = company.name;
        id.textContent = `ID: ${company.id}`;
        address.textContent = company.address;
        membership.textContent = `Membership Level: ${company.mLevel}`;
        phone.textContent = `Phone Number: +52 ${company.phone}`;

        website.textContent = `Website: ${company.website}`;

        card.appendChild(h3);
        card.appendChild(image);
        card.appendChild(id);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);
        card.appendChild(membership);
        cards.appendChild(card);

    });
}

async function spotlightFetch() {
    try {
      const response = await fetch('./data/data.json');
      if (response.ok) {
        const dataSpot = await response.json();
        console.log(dataSpot); // this is for testing the call)
        displaySpotlight(data.companies);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }

  function displaySpotlight(companies) {
    const membersrdn = [];
    
    companies.forEach(member => {
        if(member.mLevel == "Gold" || member.mLevel == "Silver"){
            membersrdn.push(member);
        }
  }
  )};

  

getCompaniesData();