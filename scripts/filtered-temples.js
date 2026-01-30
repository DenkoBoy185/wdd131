
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Salt Lake Temple",
        location: "Salt Lake City, Utah, United States",
        dedicated: "1893, April, 6",
        area: 382207,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/400x250/salt-lake-temple-37762.jpg"
    },
    {
        templeName: "St. George Utah Temple",
        location: "St. George, Utah, United States",
        dedicated: "1877, April, 6",
        area: 143969,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/st-george-utah/400x250/st-george-temple-lds-149536-wallpaper.jpg"
    },
    {
        templeName: "Barranquilla Colombia Temple",
        location: "Barranquilla, Colombia",
        dedicated: "2018, December, 9",
        area: 25349,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/barranquilla-colombia/400x250/2-Barranquilla-Columblia-Temple-2135201.jpg"
    }
];


createTempleCard(temples);

const oldLink = document.querySelector("#old");
const newLink = document.querySelector("#new");
const largeLink = document.querySelector("#large");
const smallLink = document.querySelector("#small");
const homeLink = document.querySelector("#home");
const galleryHeader = document.querySelector("#gallery-header");
const navLinks = document.querySelectorAll("nav a");

function setActive(element) {
    navLinks.forEach(link => link.classList.remove("active"));
    element.classList.add("active");
}

oldLink.addEventListener("click", (event) => {
    event.preventDefault();
    createTempleCard(temples.filter(temple => parseInt(temple.dedicated.split(",")[0]) < 1900));
    setActive(oldLink);
    galleryHeader.textContent = "Old Temples";
});

newLink.addEventListener("click", (event) => {
    event.preventDefault();
    createTempleCard(temples.filter(temple => parseInt(temple.dedicated.split(",")[0]) > 2000));
    setActive(newLink);
    galleryHeader.textContent = "New Temples";
});

largeLink.addEventListener("click", (event) => {
    event.preventDefault();
    createTempleCard(temples.filter(temple => temple.area > 90000));
    setActive(largeLink);
    galleryHeader.textContent = "Large Temples";
});

smallLink.addEventListener("click", (event) => {
    event.preventDefault();
    createTempleCard(temples.filter(temple => temple.area < 10000));
    setActive(smallLink);
    galleryHeader.textContent = "Small Temples";
});

homeLink.addEventListener("click", (event) => {
    event.preventDefault();
    createTempleCard(temples);
    setActive(homeLink);
    galleryHeader.textContent = "Home";
});

function createTempleCard(filteredTemples) {
    document.querySelector(".gallery").innerHTML = "";
    filteredTemples.forEach(temple => {
        let card = document.createElement("figure");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");
        img.setAttribute("width", "400");
        img.setAttribute("height", "250");

        // Order: Image first, then info
        card.appendChild(img); // Image top
        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);

        document.querySelector(".gallery").appendChild(card);
    });
}

// Footer Dates
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = `Last Modification: ${lastModified}`;

// Hamburger Menu
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('nav');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('show');
    hamButton.classList.toggle('open');
});
