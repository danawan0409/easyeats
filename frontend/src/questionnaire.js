// Using DOMContentLoaded to ensure the DOM is fully loaded before running the script
document.addEventListener('DOMContentLoaded', function() {
    const checkedInputs = document.querySelectorAll('.check');

    checkedInputs.forEach(function(mcInput) {
        mcInput.addEventListener('click', function() {
            const checkbox = mcInput.querySelector('input[type="checkbox"]');
            checkbox.checked = !checkbox.checked; // Toggle checkbox state

            // Change background color and text color based on checkbox state
            if (checkbox.checked) {
                mcInput.style.backgroundColor = "#ffc400";
                mcInput.style.color = "white";
            } else {
                mcInput.style.backgroundColor = "white";
                mcInput.style.color = "#ffc400";
            }
        });
    });

    // Get all forms for submission handling
    const forms = document.querySelectorAll('.question-div');

    forms.forEach(function(form) {
        const submitButton = form.querySelector('.submit');

        // Show / hide arrow on hover
        submitButton.addEventListener('mouseenter', function() {
            const arrow = submitButton.nextElementSibling;
            arrow.style.display = "block"; // Show arrow
            arrow.style.cursor = "pointer";
            submitButton.style.cursor = "pointer";
        });

        submitButton.addEventListener('mouseleave', function() {
            const arrow = submitButton.nextElementSibling;
            arrow.style.display = "none"; // Hide arrow
        });

        // Handle form submission
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the default action

            // Log form input values to the console
            if (form.id === 'name-form') {
                const nameInput = document.getElementById('name').value;
                console.log(nameInput);
            }

            if (form.id === 'dietary-preferences-form') {
                const preferences = Array.from(document.querySelectorAll('input[name="dietary-preferences"]:checked'))
                    .map(input => input.value);
                console.log(preferences);
            }

            if (form.id === 'allergies-form') {
                const allergies = Array.from(document.querySelectorAll('input[name="allergy-preferences"]:checked'))
                    .map(input => input.value);
                console.log(allergies);
            }

            if (form.id === 'household-people-form') {
                const people = document.getElementById('household-people').value;
                console.log(people);
            }

            const currentQuestion = form; // The current form
            const nextQuestion = currentQuestion.nextElementSibling; // Find the next question

            currentQuestion.style.display = "none"; // Hide current question

            if (nextQuestion) {
                nextQuestion.style.display = "block"; // Show next question
            } else {
                window.open("https://google.com"); // Open Google if there are no more questions
            }
        });
    });

    const radioInputs = document.querySelectorAll('.radio');
    
    radioInputs.forEach(function(radioInput) {
        radioInput.addEventListener('click', function() {
            // Get the radio button within the clicked div
            const radioButton = radioInput.querySelector('input[type="radio"]');
            
            // Check the radio button
            if (radioButton) {
                radioButton.checked = true; // Select the radio button
            }

            // Change background color and text color based on radio button state
            radioInputs.forEach(function(input) {
                const inputRadioButton = input.querySelector('input[type="radio"]');
                if (inputRadioButton.checked) {
                    input.style.backgroundColor = "#ffc400";
                    input.style.color = "white";
                } else {
                    input.style.backgroundColor = "white";
                    input.style.color = "#ffc400";
                }
            });
        });
    });

    // Handle form submission
    const reserveForm = document.getElementById('reserve-form');
    reserveForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get the selected option value
        const selectedValue = document.querySelector('input[name="reserve"]:checked');
        if (selectedValue) {
            console.log('Selected reserve option:', selectedValue.value); // Log the selected value
        }
    });
});
