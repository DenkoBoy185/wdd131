// W06 Project - Zero-G Nexus
// Author: Bruno Emerson

// 1. Footer Date & Last Modified (Template Literals)
const year = new Date().getFullYear();
const lastModified = document.lastModified;

// DOM Manipulation: Set footer content
document.getElementById("footer-year").textContent = year;
document.getElementById("lastModified").textContent = `Last Modified: ${lastModified}`;

// 2. Navigation Menu Toggle (Mobile)
const nav = document.querySelector("nav");
const menuButton = document.getElementById("menu");

menuButton.addEventListener("click", () => {
    nav.classList.toggle("show");
    // Accessibility: Toggle aria-expanded
    const isExpanded = nav.classList.contains("show");
    menuButton.setAttribute("aria-expanded", isExpanded);
});

// 3. Dynamic Content (Array of Objects & Rendering)
// Used on Research page mainly, but we can set up the structure here.
const researchTopics = [
    {
        title: "Alcubierre Drive Theory",
        category: "Propulsion",
        description: "Theoretical framework for FTL travel by contracting space in front of a spacecraft and expanding it behind.",
        image: "images/wireframe_prototypes_cad.png", // Placeholder using existing wireframe
        status: "Conceptual"
    },
    {
        title: "Diamagnetic Levitation",
        category: "Anti-Gravity",
        description: "Using powerful magnetic fields to counteract gravity for non-magnetic materials, including biological matter.",
        image: "images/wireframe_research_cad.png", // Placeholder
        status: "Experimental"
    },
    {
        title: "Zero-Point Energy",
        category: "Energy",
        description: "Harvesting the quantum vacuum energy that exists in empty space as a potential infinite power source.",
        image: "images/wireframe_home_cad.png", // Placeholder
        status: "Theoretical"
    }
];

// Function to render research cards
function renderResearch(topics) {
    const container = document.getElementById("research-container");
    if (!container) return; // Exit if not on research page

    // Clear existing content
    container.innerHTML = "";

    // Iterate and create HTML using Template Literals
    const htmlContent = topics.map(topic => `
        <article class="card">
            <h3>${topic.title}</h3>
            <p><strong>Category:</strong> ${topic.category}</p>
            <p><strong>Status:</strong> <span class="${topic.status.toLowerCase()}">${topic.status}</span></p>
            <p>${topic.description}</p>
        </article>
    `).join("");

    container.innerHTML = htmlContent;
}

// Render content if on research page
if (document.getElementById("research-container")) {
    renderResearch(researchTopics);
}

// 4. LocalStorage Feature (Visit Counter)
// Conditional Branching to check if counter exists
let visits = Number(window.localStorage.getItem("nexus-visits")) || 0;
const visitDisplay = document.getElementById("visit-count");

if (visitDisplay) {
    if (visits === 0) {
        visitDisplay.textContent = "Welcome! This is your first visit to the Nexus.";
    } else {
        visitDisplay.textContent = `You have accessed the Nexus ${visits} times.`;
    }
}

// Increment and save
visits++;
window.localStorage.setItem("nexus-visits", visits);


// 5. Form Handling (Conditional Branching & DOM)
const contactForm = document.getElementById("contact-form");
if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault(); // Prevent actual submission for demo

        const name = document.getElementById("name").value;
        const topic = document.getElementById("topic").value;

        // Simple validation visualization or success message
        const formContainer = contactForm.parentElement;
        formContainer.innerHTML = `
            <div class="success-message">
                <h3>Transmission Received</h3>
                <p>Thank you, Agent ${name}.</p>
                <p>We have received your inquiry regarding <strong>${topic}</strong>.</p>
                <p>Our research team will respond within 24 standard hours.</p>
            </div>
        `;
    });
}
