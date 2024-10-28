// script.js

// Function to show specific section
function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.style.display = 'none');
    
    document.getElementById(sectionId).style.display = 'block';
}

// Recipe data
const recipes = {
    fruitSalad: {
        title: "Fruit Salad",
        steps: `
            Step 1: Chop your favorite fruits (2 mins).<br>
            Step 2: Mix fruits in a bowl (1 min).<br>
            Step 3: Add a sprinkle of honey or yogurt if desired (1 min).<br>
            Ready in 4 mins!
        `
    },
    quickPizza: {
        title: "Quick Veggie Pizza",
        steps: `
            Step 1: Spread tomato sauce on a whole-wheat pita bread (2 mins).<br>
            Step 2: Add chopped veggies and cheese (3 mins).<br>
            Step 3: Microwave for 1-2 minutes until cheese melts.<br>
            Ready in 7 mins!
        `
    },
    avocadoToast: {
        title: "Avocado Toast",
        steps: `
            Step 1: Mash an avocado and spread on toast (3 mins).<br>
            Step 2: Add a sprinkle of salt and pepper (1 min).<br>
            Ready in 4 mins!
        `
    },
    poha: {
        title: "Poha (Indian Flattened Rice Dish)",
        steps: `
            Step 1: Rinse poha (flattened rice) under water and let it sit (2 mins).<br>
            Step 2: In a pan, heat oil, add mustard seeds, curry leaves, and chopped veggies (3 mins).<br>
            Step 3: Add poha, turmeric, and salt. Stir well (3 mins).<br>
            Ready in 8 mins!
        `
    },
    vegetableUpma: {
        title: "Vegetable Upma",
        steps: `
            Step 1: Roast rava (semolina) in a pan (3 mins).<br>
            Step 2: In another pan, add oil, mustard seeds, curry leaves, and chopped veggies (3 mins).<br>
            Step 3: Add water, salt, and rava. Stir until cooked (4 mins).<br>
            Ready in 10 mins!
        `
    },
    bananaPancake: {
        title: "Banana Pancakes",
        steps: `
            Step 1: Mash a banana in a bowl (1 min).<br>
            Step 2: Add egg and mix (2 mins).<br>
            Step 3: Pour onto a hot pan and cook on each side (3 mins each side).<br>
            Ready in 9 mins!
        `
    },
    sundal: {
        title: "Sundal (Indian Chickpea Snack)",
        steps: `
            Step 1: Heat a bit of oil in a pan and add mustard seeds and curry leaves (2 mins).<br>
            Step 2: Add cooked chickpeas, salt, and a pinch of turmeric (3 mins).<br>
            Step 3: Stir well and garnish with grated coconut (1 min).<br>
            Ready in 6 mins!
        `
    }
};

// Function to show recipe details
function showRecipe(recipeKey) {
    const recipe = recipes[recipeKey];
    if (recipe) {
        document.getElementById('recipe-title').innerText = recipe.title;
        document.getElementById('recipe-steps').innerHTML = recipe.steps;
        document.getElementById('recipe-details').style.display = 'block';
    }
}
// Function to toggle "Read More" content
function toggleReadMore(id, button) {
    const moreContent = document.getElementById(id);
    if (moreContent.style.display === "none") {
        moreContent.style.display = "block";
        button.innerText = "Read Less";
    } else {
        moreContent.style.display = "none";
        button.innerText = "Read More";
    }
}
