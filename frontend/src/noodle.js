document.addEventListener("DOMContentLoaded", function() {
    const ingredients = document.querySelectorAll('.ingredient');

    // Mock ingredient alternatives
    const alternatives = {
        "200g firm tofu, cubed": "Tempeh, Seitan",
        "200g rice noodles": "Zucchini noodles, Soba noodles",
        "2 tablespoons soy sauce": "Tamari, Coconut aminos",
        "1 tablespoon sesame oil": "Peanut oil, Olive oil",
        "1 tablespoon olive oil (for frying)": "Canola oil, Avocado oil",
        "2 garlic cloves, minced": "Garlic powder, Shallots",
        "1 tablespoon fresh ginger, grated": "Ground ginger, Galangal",
        "1 tablespoon hoisin sauce (optional)": "Oyster sauce, Plum sauce",
        "2 tablespoons green onions, chopped": "Chives, Leeks",
        "1 medium carrot, julienned": "Sweet potatoes, Butternut squash",
        "1 small red bell pepper, thinly sliced": "Yellow bell pepper, Poblano pepper",
        "1 tablespoon sesame seeds (optional)": "Chia seeds, Poppy seeds",
        "1 tablespoon lime juice (optional)": "Lemon juice, Rice vinegar",
        "Fresh cilantro (optional)": "Parsley, Basil",
        "Salt and pepper, to taste": "Garlic salt, Paprika"
    };

    // Function to display alternative on click
    ingredients.forEach(ingredient => {
        ingredient.addEventListener('click', function() {
            const alt = alternatives[ingredient.textContent] || "No alternatives available";
            alert(`Alternative: ${alt}`);
        });
    });
});
