document.addEventListener('DOMContentLoaded', function() {
    const forms = document.querySelectorAll('.question-div');

    forms.forEach(function(form) {
        const submitButton = form.querySelector('.submit');

        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the default action

            // Process form values or validate inputs if needed

            const currentQuestion = form; 
            const nextQuestion = currentQuestion.nextElementSibling; 

            currentQuestion.style.display = "none"; // Hide current question

            if (nextQuestion) {
                nextQuestion.style.display = "block"; // Show next question
            } else {
                window.location.href = 'recipe.html'; // Redirect to recipe.html after last question
            }
        });
    });
});
