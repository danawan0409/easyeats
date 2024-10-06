document.addEventListener('DOMContentLoaded', function() {
    // Get the h3 element inside #intro-banner
    const heading = document.querySelector('#intro-banner h3');
    
    // Add click event listener
    heading.addEventListener('click', function() {
        // Navigate to the question.html page
        window.location.href = 'questionnare.html';
    });
});