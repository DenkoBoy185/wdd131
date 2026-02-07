// review.js
// Parse the query string to determine if we actually just submitted a review
// (This is a simplified approach; in a real app, the server would handle this)
// For this assignment, simply loading the page counts as a submission/review check.
// However, to avoid double counting on simple reloads if we wanted to be strict, we'd check for params.
// But the requirement says "localStorage is used on the review.html page to keep track of the number of reviews completed."

let reviewCount = localStorage.getItem('reviewCount');

if (!reviewCount) {
    reviewCount = 0;
}

// Increment review count
reviewCount++;

// Save back to localStorage
localStorage.setItem('reviewCount', reviewCount);

// Display logic (optional, but good for verification)
// We'll insert this into the page if an element exists, or just log it is fine based on strict requirements, 
// but showing it is better user experience.
const reviewCountDisplay = document.getElementById('reviewCounter');
if (reviewCountDisplay) {
    reviewCountDisplay.textContent = reviewCount;
} else {
    // If no specific container, we can append it or just control it via the HTML file edits I'll make next.
    // I will modify review.html to include a span for this.
}
