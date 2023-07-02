const info = "./data/data.json";

async function fetchSpotlight() {
  const response = await fetch(info);
  const data = await response.json();
 

  let array = data.companies.filter(chosenCompany);
  let spotRandom = randomCompanies(array);
  displaySpotlight(spotRandom);

  function chosenCompany(company) {
    if (company.mLevel == "Gold" || company.mLevel == "Silver") {
      return company;
    }
  }

  function randomCompanies(array, count) {
    const randomCompany = array.sort(() => 0.5 - Math.random());
    return randomCompany.slice(0, count);
  }

}

  const displaySpotlight = (spotRandom) => {
    const cards = document.querySelector(".main-spotlight");

    spotRandom.forEach((company) => {
      let card = document.createElement("section");

      let name = document.createElement("h2");
      let logo = document.createElement("img");
      let quote = document.createElement("h3");
      let phone = document.createElement("p");
      let website = document.createElement("p");

      name.textContent = company.name;
      quote.textContent = company.quote;
      phone.textContent = company.phone;
      website.textContent = company.website;

      logo.setAttribute("src", company.logo);
      logo.setAttribute("alt", company.name);
      logo.setAttribute("loading", "lazy");
      logo.setAttribute("width", "50%");

      card.appendChild(name);
      card.appendChild(logo);
      card.appendChild(quote);
      card.appendChild(phone);
      card.appendChild(website);

      card.appendChild(card);
    });
};


fetchSpotlight();
