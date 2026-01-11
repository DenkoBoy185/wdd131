// Output the current year in the footer
const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;

// Output the last modified date
document.getElementById('lastModified').textContent = `Last Modification: ${document.lastModified}`;
